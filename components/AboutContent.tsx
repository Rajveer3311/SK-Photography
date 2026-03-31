'use client'

import Image from 'next/image'

export default function AboutContent() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
      {/* Main Heading */}
      <div className="mb-16 md:mb-24">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground mb-8">
          About Me.
        </h1>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {/* Left Column - Text Content */}
        <div className="md:col-span-2 space-y-6">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            I am Chintu Pathak, a passionate photographer based in Rajasthan, India, with over 15 years of experience in the art of freezing time and capturing life&apos;s most precious moments.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Photography has been an integral part of my life, and my journey began with a fascination for storytelling through visuals. Over the years, I have had the privilege of working with a diverse range of clients and capturing a multitude of emotions, from candid expressions to breathtaking landscapes.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            My photography style can be described as artistic and evocative. I believe in going beyond the ordinary and seeking beauty in the mundane. Whether it&apos;s a radiant smile on a bride&apos;s face, the magical hues of a sunset over the desert, or the raw emotions of a family reunion, my goal is to create images that leave a lasting impact on hearts.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            The beauty of photography lies in its ability to freeze fleeting moments and transform them into timeless memories. Every click of the shutter is an opportunity to preserve a story, an emotion, or a connection. With my camera as my companion, I embark on a continuous quest to explore new perspectives and push the boundaries of visual storytelling.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            As a Sony Rajasthan brand ambassador, I am grateful for the opportunities that this partnership has offered me. It allows me to showcase the incredible potential of Sony&apos;s cutting-edge technology, which elevates my art to new heights.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Beyond the lens, I am an avid traveler and an ardent lover of nature. Exploring new places not only fuels my creativity but also provides me with fresh inspiration for my photography.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            Thank you for visiting my website and for taking the time to get to know me better. I hope my passion for photography reflects in the images I create and that you find as much joy in viewing them as I do in capturing them.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            If you have any questions, collaboration ideas, or simply want to say hello, please feel free to get in touch. I&apos;m excited to embark on this photographic journey together, capturing the beauty and essence of life, one frame at a time.
          </p>
        </div>

        {/* Right Column - Portrait Image */}
        <div className="md:col-span-1">
          <div className="relative w-full aspect-[3/4] sticky top-32">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-30%20at%2011.00.42%E2%80%AFPM-Jbnrwq5q37NHFR1XqZcS1WKV063zDs.png"
              alt="Chintu Pathak - Photographer"
              fill
              priority
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
