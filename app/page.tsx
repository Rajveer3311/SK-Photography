"use client";

import HeroCarousel from "@/components/HeroCarousel";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";

const initialHomeForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type GalleryResponse = {
  categories: {
    contactHome: string[];
    homecategories: string[];
    heroBanner: string[];
  };
};
export default function Home() {
  const [homeForm, setHomeForm] = useState(initialHomeForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const [images, setImages] = useState<{
    contactHome: string[];
    homecategories: string[];
    heroBanner: string[];
  }>({
    contactHome: [],
    homecategories: [],
    heroBanner: [],
  });   


  const handleChange = (field: keyof typeof initialHomeForm, value: string) => {
    setHomeForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleHomeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "home-contact",
          ...homeForm,
        }),
      });

      if (!response.ok) {
        const json = await response.json().catch(() => null);
        throw new Error(
          json?.message || "Unable to send your message right now.",
        );
      }

      setHomeForm(initialHomeForm);
      router.push("/contact/acknowledgement");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    }
  };


  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/upload");
      if (!response.ok) return;
      const data: GalleryResponse = await response.json();
      setImages((prev) => ({ ...prev, contactHome: data.categories.contactHome, homecategories: data.categories.homecategories, heroBanner: data.categories.heroBanner }));
    };

    load();
  }, []);

  return (
    <div>
      <main>
        <HeroCarousel slidesArray={images?.heroBanner}/>
        <section className="py-24 text-center px-4">
          <h1 className="font-['Manrope'] text-3xl font-light tracking-wide mb-4">
            Enchanting, Evocative, Inspiring
          </h1>
          <p className="text-[0.6rem] tracking-[0.2em] text-on-surface/60 font-medium">
            We strive to unveil the hidden narratives
          </p>
        </section>
        <section className="max-w-350 mx-auto px-8 pb-40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* weddings */}
            <div className="space-y-6 text-center">
              <div className="aspect-square overflow-hidden bg-gray-100">
                {images.homecategories[0] && (
                  <img
                    alt="Weddings"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    src={images.homecategories[0]}
                  />
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm tracking-widest font-light">Weddings</h3>
                <a
                  className="inline-block text-[0.55rem] tracking-[0.2em] font-bold text-on-surface/40 hover:text-on-surface transition-colors"
                  href="/weddings"
                >
                  SEE MORE
                </a>
              </div>
            </div>
            {/* fashion 1 */}
            <div className="space-y-6 text-center">
              <div className="aspect-square overflow-hidden bg-gray-100">
                {images.homecategories[1] && (
                  <img
                    alt="Fashion"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    src={images.homecategories[1]}
                  />
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm tracking-widest font-light">
                  Pre-weddings
                </h3>
                <a
                  className="inline-block text-[0.55rem] tracking-[0.2em] font-bold text-on-surface/40 hover:text-on-surface transition-colors"
                  href="/pre-weddings"
                >
                  SEE MORE
                </a>
              </div>
            </div>
            {/* fashion 2 */}
            <div className="space-y-6 text-center">
              <div className="aspect-square overflow-hidden bg-gray-100">
                {images.homecategories[2] && (
                  <img
                    alt="Fashion"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    src={images.homecategories[2]}
                  />
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm tracking-widest font-light">Fashion</h3>
                <a
                  className="inline-block text-[0.55rem] tracking-[0.2em] font-bold text-on-surface/40 hover:text-on-surface transition-colors"
                  href="/fashion"
                >
                  SEE MORE
                </a>
              </div>
            </div>
            {/* travel */}
            <div className="space-y-6 text-center">
              <div className="aspect-square overflow-hidden bg-gray-100">
                {images.homecategories[3] && (
                  <img
                    alt="Travel"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    src={images.homecategories[3]}
                  />
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm tracking-widest font-light">Travel</h3>
                <a
                  className="inline-block text-[0.55rem] tracking-[0.2em] font-bold text-on-surface/40 hover:text-on-surface transition-colors"
                  href="#"
                >
                  SEE MORE
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-32 px-8 max-w-350 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left Content */}
            <div className="relative flex flex-col items-start pt-10">
              <h2 className="text-5xl font-light leading-[1.1] max-w-md mb-20">
                Leave us a message and unleash your vision
              </h2>
              <div className="relative w-full flex">
                <div className="w-1/3 aspect-3/4 mr-8 mt-40">
                  <img
                    alt="Detail"
                    className="w-full h-full object-cover"
                    src={images.contactHome[0]}
                  />
                </div>
                <div className="w-1/2 aspect-3/5 bg-gray-100">
                  {images.contactHome[1] && (
                    <img
                      alt="Portrait"
                      className="w-full h-full object-cover"
                      src={images.contactHome[1]}
                    />
                  )}
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="pt-10">
              <form className="space-y-12" onSubmit={handleHomeSubmit}>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[0.6rem] tracking-widest font-medium text-on-surface/60 uppercase">
                      First Name
                    </label>
                    <input
                      value={homeForm.firstName}
                      onChange={(event) =>
                        handleChange("firstName", event.target.value)
                      }
                      className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.6rem] tracking-widest font-medium text-on-surface/60 uppercase">
                      Last Name
                    </label>
                    <input
                      value={homeForm.lastName}
                      onChange={(event) =>
                        handleChange("lastName", event.target.value)
                      }
                      className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[0.6rem] tracking-widest font-medium text-on-surface/60 uppercase">
                      Email *
                    </label>
                    <input
                      value={homeForm.email}
                      onChange={(event) =>
                        handleChange("email", event.target.value)
                      }
                      className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm"
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[0.6rem] tracking-widest font-medium text-on-surface/60 uppercase">
                      Phone
                    </label>
                    <input
                      value={homeForm.phone}
                      onChange={(event) =>
                        handleChange("phone", event.target.value)
                      }
                      className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm placeholder:text-gray-300"
                      placeholder="Phone"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[0.6rem] tracking-widest font-medium text-on-surface/60 uppercase">
                    Subject
                  </label>
                  <input
                    value={homeForm.subject}
                    onChange={(event) =>
                      handleChange("subject", event.target.value)
                    }
                    className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[0.6rem] tracking-widest font-medium text-on-surface/60 uppercase">
                    Type your message here...
                  </label>
                  <textarea
                    value={homeForm.message}
                    onChange={(event) =>
                      handleChange("message", event.target.value)
                    }
                    className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm"
                    rows={4}
                  />
                </div>
                {errorMessage ? (
                  <div className="text-sm text-red-600">{errorMessage}</div>
                ) : null}
                <div className="flex justify-center pt-8">
                  <button
                    className="bg-primary text-white text-[0.65rem] tracking-[0.2em] font-bold px-16 py-4 hover:opacity-90 transition-opacity uppercase disabled:opacity-70 disabled:cursor-not-allowed"
                    type="submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
