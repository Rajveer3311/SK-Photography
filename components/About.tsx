export default function About() {
  return (
    <section className="w-full py-16 md:py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Tagline */}
        <div className="text-center space-y-4 md:space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground tracking-tight text-balance">
            Enchanting, Evocative, Inspiring
          </h2>
          <p className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
            We Strive To Capture The Deepest Emotions
          </p>
        </div>
      </div>
    </section>
  )
}
