'use client'

import { useEffect, useRef, useState } from 'react'

const images = [
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
]

const leftColumn = images.filter((_, index) => index % 3 === 0)
const centerColumn = images.filter((_, index) => index % 3 === 1)
const rightColumn = images.filter((_, index) => index % 3 === 2)

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max)
}

export default function ParallaxGridScroll({title = 'Parallax Grid Scroll', subtitle = 'Parallax Grid Scroll'}: { title?: string, subtitle?: string }) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const handleScroll = () => {
            const viewportHeight = window.innerHeight
            const progress = clamp(
                (window.scrollY + viewportHeight - section.offsetTop) /
                (section.offsetHeight + viewportHeight),
                0,
                1,
            )
            setOffset((progress - 0.5) * 600)
        }

        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    const leftOffset = offset * -1.1
    const centerOffset = offset * -0.55
    const rightOffset = offset * -1.1

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white/95 text-white px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className=" text-center">
                    <h1 className=" text-4xl font-light text-black sm:text-5xl">{title}</h1>
                    <p className="mt-4 text-xs uppercase tracking-[0.35em] text-black/60">{subtitle}</p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div
                        className="space-y-8 will-change-transform"
                        style={{ transform: `translateY(${leftOffset}px)` }}
                    >
                        {leftColumn.map((src, index) => (
                            <div key={`left-${index}`} className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.5)]">
                                <img
                                    src={src}
                                    alt={`Parallax image ${index + 1}`}
                                    className="h-[30rem] w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    <div
                        className="space-y-8 will-change-transform"
                        style={{ transform: `translateY(${centerOffset}px)` }}
                    >
                        {centerColumn.map((src, index) => (
                            <div key={`center-${index}`} className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.5)]">
                                <img
                                    src={src}
                                    alt={`Parallax image ${index + 1}`}
                                    className="h-[30rem] w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>

                    <div
                        className="space-y-8 will-change-transform"
                        style={{ transform: `translateY(${rightOffset}px)` }}
                    >
                        {rightColumn.map((src, index) => (
                            <div key={`right-${index}`} className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/5 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.5)]">
                                <img
                                    src={src}
                                    alt={`Parallax image ${index + 1}`}
                                    className="h-[30rem] w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
