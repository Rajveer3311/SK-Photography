"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ParallaxGridScroll from "@/components/ParallaxGridScroll";

type GalleryResponse = {
  categories: {
    weddings: string[];
  };
};

export default function WeddingsPage() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/upload");
      if (!response.ok) return;
      const data: GalleryResponse = await response.json();
      setImages(data.categories.weddings ?? []);
    };

    load();
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20" />
      <ParallaxGridScroll
        title="WEDDINGS"
        subtitle="Capturing your most precious moments"
        images={images}
      />
    </main>
  );
}
