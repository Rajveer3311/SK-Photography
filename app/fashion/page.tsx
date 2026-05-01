"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ParallaxGridScroll from "@/components/ParallaxGridScroll";

type GalleryResponse = {
  categories: {
    fashion: string[];
  };
};

export default function FashionPage() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/upload");
      if (!response.ok) return;
      const data: GalleryResponse = await response.json();
      setImages(data.categories.fashion ?? []);
    };

    load();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20 bg-white" />
      <ParallaxGridScroll
        title="FASHION"
        subtitle="Elegance, Beauty & Craft"
        images={images}
      />
    </main>
  );
}
