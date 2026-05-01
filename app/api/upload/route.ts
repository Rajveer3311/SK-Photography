import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const validCategories = ["weddings", "fashion", "preweddings", "contactHome", "footer", "heroBanner", "homecategories"] as const;
const imageFilePattern = /\.(jpg|jpeg|png|webp|gif|avif)$/i;

async function getCategoryImages(category: (typeof validCategories)[number]) {
  const categoryDir = path.join(process.cwd(), "public", "images", category);

  try {
    const entries = await fs.readdir(categoryDir, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && imageFilePattern.test(entry.name))
      .map((entry) => `/images/${category}/${entry.name}`)
      .sort((a, b) => b.localeCompare(a));
  } catch {
    return [];
  }
}

export async function GET() {
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
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const category = formData.get("category") as string;
    const images = formData.getAll("images") as File[];

    if (
      !category ||
      !validCategories.includes(category as (typeof validCategories)[number])
    ) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    if (!images || images.length === 0) {
      return NextResponse.json(
        { error: "No images provided" },
        { status: 400 },
      );
    }

    const uploadDir = path.join(process.cwd(), "public", "images", category);

    // Ensure the directory exists
    await fs.mkdir(uploadDir, { recursive: true });

    // Validate category limits
    let existingCount = 0;
    try {
      const entries = await fs.readdir(uploadDir, { withFileTypes: true });
      existingCount = entries.filter((entry) => entry.isFile() && imageFilePattern.test(entry.name)).length;
    } catch {
      existingCount = 0;
    }

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

      // Generate unique filename
      const timestamp = Date.now();
      const originalName = image.name.replace(/[^a-zA-Z0-9.-]/g, "_");
      const filename = `${timestamp}-${originalName}`;
      const filepath = path.join(uploadDir, filename);

      // Convert File to Buffer and write
      const buffer = Buffer.from(await image.arrayBuffer());
      await fs.writeFile(filepath, buffer);

      uploadedFiles.push(filename);
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
    const { category, filename } = (await request.json()) as {
      category?: string;
      filename?: string;
    };

    if (
      !category ||
      !validCategories.includes(category as (typeof validCategories)[number])
    ) {
      return NextResponse.json({ error: "Invalid category" }, { status: 400 });
    }

    if (!filename || filename.includes("/") || filename.includes("\\")) {
      return NextResponse.json({ error: "Invalid filename" }, { status: 400 });
    }

    const targetPath = path.join(
      process.cwd(),
      "public",
      "images",
      category,
      filename,
    );
    await fs.unlink(targetPath);

    return NextResponse.json({ message: "Image deleted successfully" });
  } catch (error: unknown) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === "ENOENT") {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
