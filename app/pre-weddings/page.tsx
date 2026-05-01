"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import ParallaxGridScroll from "@/components/ParallaxGridScroll";

type GalleryResponse = {
  categories: {
    preweddings: string[];
  };
};

export default function PreWeddingsPage() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/upload");
      if (!response.ok) return;
      const data: GalleryResponse = await response.json();
      setImages(data.categories.preweddings ?? []);
    };

    load();
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 bg-white" />
      <ParallaxGridScroll
        title="PRE-WEDDINGS"
        subtitle="Heavenly moments, before the big day"
        images={images}
      />
    </main>
  );
}
