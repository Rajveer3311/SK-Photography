'use client'

import Image from 'next/image'
import Link from 'next/link'

const portfolioItems = [
  {
    id: 1,
    title: 'Weddings',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop',
    category: 'weddings',
  },
  {
    id: 2,
    title: 'Fashion',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=500&fit=crop',
    category: 'fashion',
  },
  {
    id: 3,
    title: 'Fashion',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop',
    category: 'fashion',
  },
  {
    id: 4,
    title: 'Travel',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=500&fit=crop',
    category: 'travel',
  },
]

export default function Portfolio() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden bg-muted rounded-md mb-6 md:mb-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={item.id === 1}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="text-center space-y-3">
                <h3 className="text-foreground font-serif text-lg md:text-xl">
                  {item.title}
                </h3>
                <Link
                  href={`#${item.category}`}
                  className="inline-block text-xs tracking-widest text-accent hover:text-accent/80 transition-colors uppercase font-medium"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
