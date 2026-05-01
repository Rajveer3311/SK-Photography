"use client";

import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const initialState = {
  name: "",
  email: "",
  session: "Wedding",
  source: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (field: keyof typeof initialState, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contact",
          ...formData,
        }),
      });

      if (!response.ok) {
        const json = await response.json().catch(() => null);
        throw new Error(
          json?.message || "Unable to send your request. Please try again.",
        );
      }

      router.push("/contact/acknowledgement");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div>
        <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
          <section className="max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-7xl font-extrabold text-center tracking-tighter mb-8 text-primary">
              Drop us a line
            </h1>
            <p className="text-center max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
              Share your vision and we will respond with a tailored photography
              plan. Your message lands directly in our inbox and is handled with
              care.
            </p>
          </section>

          <section className="max-w-4xl mx-auto mb-20 bg-white/90 dark:bg-black/90 border border-gray-200 dark:border-gray-800 rounded-4xl shadow-[0_30px_100px_-60px_rgba(15,23,42,0.35)] backdrop-blur-md">
            <form
              className="space-y-10 px-6 py-10 md:px-12"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline pl-3">
                    Full Name
                  </label>
                  <input
                    value={formData.name}
                    onChange={(event) =>
                      handleChange("name", event.target.value)
                    }
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-full px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 placeholder:text-gray-300"
                    placeholder="Your Name"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-outline pl-3">
                    Email Address
                  </label>
                  <input
                    value={formData.email}
                    onChange={(event) =>
                      handleChange("email", event.target.value)
                    }
                    className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-full px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 placeholder:text-gray-300"
                    placeholder="hello@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <label className="text-xs font-bold uppercase tracking-widest text-outline pl-3">
                  Session Type
                </label>
                <div className="flex flex-wrap gap-4">
                  {["Wedding", "Engagement", "Fashion", "Casual"].map(
                    (option) => (
                      <label key={option} className="cursor-pointer group">
                        <input
                          className="hidden peer"
                          name="session"
                          type="radio"
                          value={option}
                          checked={formData.session === option}
                          onChange={(event) =>
                            handleChange("session", event.target.value)
                          }
                        />
                        <span className="px-8 py-3 rounded-full border border-outline-variant/20 bg-surface-container-lowest peer-checked:bg-primary peer-checked:text-white transition-all duration-300 inline-block text-sm font-medium">
                          {option}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-outline pl-3">
                  How did you hear about me?
                </label>
                <input
                  value={formData.source}
                  onChange={(event) =>
                    handleChange("source", event.target.value)
                  }
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-full px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 placeholder:text-gray-300"
                  placeholder="Referral, Social Media, etc."
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold uppercase tracking-widest text-outline pl-3">
                  Your message (Optional)
                </label>
                <textarea
                  value={formData.message}
                  onChange={(event) =>
                    handleChange("message", event.target.value)
                  }
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-3xl px-6 py-5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 placeholder:text-gray-300 resize-none"
                  placeholder="Tell us more about your vision..."
                  rows={6}
                />
              </div>

              {error ? (
                <div className="rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              <div className="pt-4">
                <button
                  className="w-full md:w-auto px-12 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-container transition-all duration-300 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </section>

          <section className="max-w-7xl mx-auto mb-32">
            <div className="bg-surface-container-lowest rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-sm">
              <div className="p-12 md:p-24 flex flex-col justify-center items-start">
                <h2 className="text-sm font-extrabold uppercase tracking-[0.3em] text-outline mb-8">
                  Our Address
                </h2>
                <p className="text-3xl md:text-4xl font-light leading-snug mb-12 text-on-surface">
                  742 Evergreen Terrace,
                  <br />
                  Springfield, IL 62704
                  <br />
                  United States
                </p>
                <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-container transition-all duration-300">
                  <Send />
                  Get directions
                </button>
              </div>
              <div className="h-100 lg:h-auto overflow-hidden">
                <img
                  alt="Modern minimalist office space"
                  className="w-full h-full object-cover"
                  data-alt="minimalist modern office interior with large windows, designer furniture, and clean white walls in soft natural daylight"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbA0PrKVMdx5V8QwgUBd6DNtjEvQjXhbtrhtIxZ6v76o6HQTwgaLdyp7fw1tcsrDGRViJqS0MNukgr2D1cpNMXr5stV1-V1hoc9TEu5KP-s8mKlB2xNSD8TGmQjQ5OCPsxpSc-TwYMizMGpln-cQE2O8mfkHoz1t151nUfoAwX3ScxEnJKy7-QepPCzjYVNHNe8eTYVb2JRdL776o0iNI4kCI8Lv3gEcS5Nzo6Zt6OYso-76ebkVpJBNVdh6HiOmPZxd2qPcjTnhQ"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
