"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type CategoryKey = "weddings" | "fashion" | "preweddings" | "contactHome" | "footer" | "heroBanner" | "homecategories";

type GalleryResponse = {
  categories: Record<CategoryKey, string[]>;
};

const categoryLabels: Record<CategoryKey, string> = {
  weddings: "Weddings",
  fashion: "Fashion",
  preweddings: "Pre-weddings",
  contactHome: "Contact Home",
  footer: "Footer",
  heroBanner: "Hero Banner",
  homecategories: "Home Categories",
};

export default function ManageImagesPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>("weddings");
  const [categories, setCategories] = useState<Record<CategoryKey, string[]>>({
    weddings: [],
    fashion: [],
    preweddings: [],
    contactHome: [],
    footer: [],
    heroBanner: [],
    homecategories: [],
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [deletingPath, setDeletingPath] = useState<string | null>(null);

  const currentImages = useMemo(
    () => categories[selectedCategory] ?? [],
    [categories, selectedCategory],
  );

  const loadImages = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/upload");
      if (!response.ok) throw new Error("Failed to fetch images");
      const data: GalleryResponse = await response.json();
      setCategories(data.categories);
    } catch {
      setMessage("Unable to load images.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const deleteImage = async (imagePath: string) => {
    try {
      setDeletingPath(imagePath);
      setMessage("");
      const response = await fetch("/api/upload", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imagePath,
        }),
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      setCategories((prev) => ({
        ...prev,
        [selectedCategory]: prev[selectedCategory].filter(
          (path) => path !== imagePath,
        ),
      }));
      setMessage("Image deleted successfully.");
    } catch {
      setMessage("Failed to delete image.");
    } finally {
      setDeletingPath(null);
    }
  };

  return (
    <main className="container mx-auto px-4 pt-20">
      <div className="mb-6 flex items-center justify-between gap-3">
        <h1 className="text-3xl font-bold">Manage Images</h1>
        <Button asChild variant="outline">
          <Link href="/upload">Back to Upload</Link>
        </Button>
      </div>

      <div className="mb-8 max-w-xs">
        <label className="mb-2 block text-sm font-medium">Category</label>
        <Select
          value={selectedCategory}
          onValueChange={(value) => setSelectedCategory(value as CategoryKey)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {message && (
        <div
          className={`mb-6 rounded p-4 ${message.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {message}
        </div>
      )}

      {loading ? (
        <p className="text-sm text-muted-foreground">Loading images...</p>
      ) : currentImages.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          No images found in {categoryLabels[selectedCategory]}.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentImages.map((imagePath) => (
            <div
              key={imagePath}
              className="overflow-hidden rounded-xl border bg-white p-3 shadow-sm"
            >
              <img
                src={imagePath}
                alt={imagePath}
                className="h-64 w-full rounded-lg object-cover"
              />
              <Button
                type="button"
                variant="destructive"
                className="mt-3 w-full"
                disabled={deletingPath === imagePath}
                onClick={() => deleteImage(imagePath)}
              >
                {deletingPath === imagePath ? "Deleting..." : "Delete"}
              </Button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
