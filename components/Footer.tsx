"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

type GalleryResponse = {
  categories: {
    footer: string[];
  };
};

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email: newsletterEmail }),
      });

      if (!response.ok) {
        const json = await response.json().catch(() => null);
        throw new Error(json?.message || "Unable to subscribe at this time.");
      }

      setStatus("success");
      setMessage("Thank you! You are now subscribed to updates.");
      setNewsletterEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  };

  const [images, setImages] = useState<string[]>([]);
  
    useEffect(() => {
      const load = async () => {
        const response = await fetch("/api/upload");
        if (!response.ok) return;
        const data: GalleryResponse = await response.json();
        setImages(data.categories.footer ?? []);
      };
  
      load();
    }, []);

  return (
    <div>
      <footer className="bg-black pt-24 pb-12">
        <div className="max-w-screen-2xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
            {/* Instagram Column */}
            <div>
              <h3 className="text-white text-2xl font-bold mb-8">
                Follow me on Instagram
              </h3>
              <div className="grid grid-cols-3 gap-2">
                {images.map((img) => (
                  <img
                    key={img}
                    className="aspect-square object-cover rounded-none scale-100 hover:scale-95 transition-transform duration-2000"
                    data-alt="Black and white artistic portrait of a woman with dramatic side lighting"
                    src={img}
                  />
                ))}
              </div>
            </div>
            {/* Navigation Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                  Explore
                </h4>
                <ul className="space-y-4 text-zinc-400 text-sm">
                  <li>
                    <a
                      className="hover:text-white transition-colors"
                      href="/weddings"
                    >
                      Weddings
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white transition-colors"
                      href="/pre-weddings"
                    >
                      Pre-Weddings
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white transition-colors"
                      href="/fashion"
                    >
                      Fashion
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                  Social
                </h4>
                <ul className="space-y-4 text-zinc-400 text-sm">
                  <li>
                    <a
                      className="hover:text-white transition-colors"
                      href="https://www.instagram.com/sk_photography____ll/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white transition-colors"
                      href="https://www.youtube.com/channel/UCEdYj5AWnA8916oFsWUN4Hg"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      className="hover:text-white transition-colors"
                      href="https://www.facebook.com/sonu.kanojiya.71/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 space-y-6">
                <h4 className="text-white font-bold text-sm uppercase tracking-widest">
                  Newsletter
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Subscribe to get the latest updates and behind-the-scenes
                  content.
                </p>
                <form
                  className="flex flex-col gap-4 sm:flex-row"
                  onSubmit={handleNewsletterSubmit}
                >
                  <input
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    className="bg-zinc-800 border-none rounded-full px-6 py-3 text-sm text-white focus:ring-1 focus:ring-zinc-500 w-full"
                    placeholder="Your email"
                    type="email"
                    required
                  />
                  <button
                    className="bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-zinc-200 transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60"
                    type="submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Join"}
                  </button>
                </form>
                {message ? (
                  <div
                    className={`${status === "error" ? "text-red-300" : "text-emerald-300"} text-sm`}
                  >
                    {message}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="pt-12 mt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-3xl font-bold tracking-tighter text-white font-headline">
              Sk Photography
            </div>
            <div className="text-zinc-500 text-sm font-manrope">
              The SK - Photography © 2026. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
