import { del, list, put } from "@vercel/blob";
import { NextRequest, NextResponse } from "next/server";

const validCategories = [
  "weddings",
  "fashion",
  "preweddings",
  "contactHome",
  "footer",
  "heroBanner",
  "homecategories",
] as const;

type Category = (typeof validCategories)[number];

const categoryAliases: Record<string, Category> = {
  weddings: "weddings",
  fashion: "fashion",
  preweddings: "preweddings",
  "pre-weddings": "preweddings",
  contactHome: "contactHome",
  footer: "footer",
  heroBanner: "heroBanner",
  homecategories: "homecategories",
};

function normalizeCategory(value: string | null | undefined): Category | null {
  if (!value) return null;
  return categoryAliases[value] ?? null;
}

async function getCategoryImages(category: Category) {
  const { blobs } = await list({
    prefix: `images/${category}/`,
    limit: 1000,
  });
  return blobs
    .map((blob) => blob.url)
    .sort((a, b) => b.localeCompare(a));
}

export async function GET() {
  try {
    const categories = await Promise.all(
      validCategories.map(async (category) => ({
        category,
        images: await getCategoryImages(category),
      })),
    );

    return NextResponse.json({
      categories: Object.fromEntries(
        categories.map(({ category, images }) => [category, images]),
      ),
    });
  } catch (error) {
    console.error("Failed to load gallery images:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const category = normalizeCategory(formData.get("category") as string);
    const images = formData.getAll("images") as File[];

    if (!category) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    if (!images || images.length === 0) {
      return NextResponse.json(
        { error: "No images provided" },
        { status: 400 },
      );
    }

    // Validate category limits based on existing blobs.
    const { blobs: existingImages } = await list({
      prefix: `images/${category}/`,
      limit: 1000,
    });
    const existingCount = existingImages.length;

    const newTotal = existingCount + images.length;

    if (category === "heroBanner" && newTotal > 10) {
      return NextResponse.json({ error: `Hero Banner allows max 10 photos. You can only add ${Math.max(0, 10 - existingCount)} more.` }, { status: 400 });
    }
    if (category === "contactHome" && newTotal > 2) {
      return NextResponse.json({ error: `Contact Home allows max 2 photos. You can only add ${Math.max(0, 2 - existingCount)} more.` }, { status: 400 });
    }
    if (category === "footer" && newTotal > 6) {
      return NextResponse.json({ error: `Footer allows max 6 photos. You can only add ${Math.max(0, 6 - existingCount)} more.` }, { status: 400 });
    }
    if (category === "homecategories" && newTotal > 4) {
      return NextResponse.json({ error: `Home Categories allows max 4 photos. You can only add ${Math.max(0, 4 - existingCount)} more.` }, { status: 400 });
    }

    const uploadedFiles: string[] = [];

    for (const image of images) {
      if (!(image instanceof File)) {
        continue;
      }

      if (!image.type.startsWith("image/")) {
        continue;
      }

      const timestamp = Date.now();
      const originalName = image.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const filename = `${timestamp}-${originalName}`;
      const blobPath = `images/${category}/${filename}`;

      const { url } = await put(blobPath, image, {
        access: "public",
        addRandomSuffix: false,
        contentType: image.type,
      });

      uploadedFiles.push(url);
    }

    return NextResponse.json({
      message: "Images uploaded successfully",
      files: uploadedFiles,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { imagePath, category, filename } = (await request.json()) as {
      imagePath?: string;
      category?: string;
      filename?: string;
    };

    if (imagePath) {
      await del(imagePath);
      return NextResponse.json({ message: "Image deleted successfully" });
    }

    const normalizedCategory = normalizeCategory(category);
    if (!normalizedCategory || !filename) {
      return NextResponse.json(
        { error: "imagePath or (category + filename) is required" },
        { status: 400 },
      );
    }

    const expectedPath = `images/${normalizedCategory}/${filename}`;
    const { blobs } = await list({ prefix: expectedPath, limit: 1 });
    const targetBlob = blobs.find((blob) => blob.pathname === expectedPath);

    if (!targetBlob) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }
    await del(targetBlob.url);

    return NextResponse.json({ message: "Image deleted successfully" });
  } catch (error: unknown) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
