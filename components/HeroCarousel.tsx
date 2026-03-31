'use client'

import { useEffect, useRef, useState } from 'react'

const slides = [
    'https://static.wixstatic.com/media/b7d251_c416a48476ef4853bb48a3dc1793ed66~mv2.jpg/v1/fill/w_3827,h_1763,q_90,enc_avif,quality_auto/b7d251_c416a48476ef4853bb48a3dc1793ed66~mv2.jpg',
    'https://static.wixstatic.com/media/b7d251_0bc3ec5af573425d9a69f7c0e8c335ff~mv2.jpg/v1/fill/w_4350,h_2004,q_90,enc_avif,quality_auto/b7d251_0bc3ec5af573425d9a69f7c0e8c335ff~mv2.jpg',
    'https://static.wixstatic.com/media/b7d251_59ac68c7f05e440184566a1387af9b87~mv2.jpg/v1/fill/w_4350,h_2004,q_90,enc_avif,quality_auto/b7d251_59ac68c7f05e440184566a1387af9b87~mv2.jpg',
]

export default function HeroCarousel() {
    const [activeIndex, setActiveIndex] = useState(0)
    const intervalRef = useRef<number | null>(null)

    const nextSlide = () => {
        setActiveIndex((current) => (current + 1) % slides.length)
    }

    const prevSlide = () => {
        setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
    }

    useEffect(() => {
        intervalRef.current = window.setInterval(nextSlide, 5000)
        return () => {
            if (intervalRef.current !== null) {
                window.clearInterval(intervalRef.current)
            }
        }
    }, [])

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
            <div className="absolute inset-0">
                {slides.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <img
                            src={src}
                            alt={`Hero slide ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* <div className="absolute inset-0 bg-black/35" /> */}

            <div className="relative z-10 flex min-h-[90vh] flex-col justify-between px-4 py-6 sm:px-8 lg:px-12">
                <div className="flex h-[90vh] items-center justify-between">
                    <button
                        type="button"
                        onClick={prevSlide}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/15"
                        aria-label="Previous slide"
                    >
                        <span className="text-xl">‹</span>
                    </button>
                    <button
                        type="button"
                        onClick={nextSlide}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/15"
                        aria-label="Next slide"
                    >
                        <span className="text-xl">›</span>
                    </button>
                </div>

                {/* <div className="mx-auto flex max-w-4xl flex-col items-center text-center gap-6 py-24 sm:py-32">
                    <p className="text-xs uppercase tracking-[0.45em] text-white/60">Visual Storytelling</p>
                    <h1 className="text-4xl font-light leading-tight text-white sm:text-6xl md:text-7xl">
                        Cinematic photography that fills the screen.
                    </h1>
                    <p className="max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                        Auto-rotating hero carousel with left and right navigation, designed for a full-screen homepage introduction.
                    </p>
                </div> */}

                <div className="mx-auto flex gap-3 pb-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            className={`h-3 w-3 rounded-full transition-colors ${index === activeIndex ? 'bg-white' : 'bg-white/30'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
