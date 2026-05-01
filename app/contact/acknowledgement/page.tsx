import Link from "next/link";

export default function AcknowledgementPage() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <div className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-3xl rounded-4xl border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <div className="mb-8 rounded-full bg-primary/10 px-5 py-3 text-primary font-semibold uppercase tracking-[0.35em] text-sm">
            Message received
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6">
            Thank you for your inquiry
          </h1>
          <p className="max-w-2xl text-base leading-8 text-zinc-300 mb-10">
            We have received your message and will review your request with
            care. Expect a response shortly with a personalized photography plan
            that matches your vision.
          </p>
          <div className="grid gap-4 sm:grid-cols-[1fr_auto] items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition hover:bg-zinc-200"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
            >
              Submit another request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
