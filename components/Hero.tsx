'use client'

import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-20 md:pt-24 bg-background overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Couple with umbrella"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Category Text */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
            Weddings Fashion Commercial
          </h2>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-lg mb-8 md:mb-12 bg-white/10 backdrop-blur-sm">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop"
            alt="Featured moment"
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation Arrows */}
        <button className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors hidden md:flex items-center justify-center">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  )
}
