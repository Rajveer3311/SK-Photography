'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface GalleryItem {
  id: string
  src: string
  alt: string
  span: 'single' | 'double'
}

const FashionGallery = () => {
  const fashionImages: GalleryItem[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&h=700&fit=crop',
      alt: 'Fashion portrait 1',
      span: 'double',
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1595595046519-b30d7b1cfe7a?w=800&h=700&fit=crop',
      alt: 'Fashion portrait 2',
      span: 'single',
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1564810204814-097a9d929f28?w=400&h=500&fit=crop',
      alt: 'Fashion portrait 3',
      span: 'single',
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1551986782-d244d2fb8550?w=400&h=500&fit=crop',
      alt: 'Fashion portrait 4',
      span: 'single',
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1505631346881-b72b27e84530?w=400&h=500&fit=crop',
      alt: 'Fashion portrait 5',
      span: 'single',
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1515134769519-4f062e2d6461?w=800&h=600&fit=crop',
      alt: 'Fashion portrait 6',
      span: 'double',
    },
  ]

  const imageRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleItems = new Set(visibleItems)
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          if (entry.isIntersecting) {
            newVisibleItems.add(index)
          }
        })
        setVisibleItems(newVisibleItems)
      },
      { threshold: 0.2 }
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [visibleItems])

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 lg:px-12">
      <style>{`
        .fashion-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .fashion-gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .gallery-item {
          position: relative;
          border-radius: 0.5rem;
          overflow: hidden;
          background: var(--color-secondary);
        }

        .gallery-item.span-2 {
          grid-column: span 2;
        }

        .gallery-item.span-1 {
          grid-column: span 1;
        }

        /* Mobile adjustments */
        @media (max-width: 767px) {
          .gallery-item.span-2 {
            grid-column: span 1;
          }
          
          .fashion-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        .gallery-item-inner {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
          overflow: hidden;
        }

        .gallery-item.span-2 .gallery-item-inner {
          padding-bottom: 60%;
        }

        @media (max-width: 767px) {
          .gallery-item .gallery-item-inner {
            padding-bottom: 120%;
          }
        }

        .gallery-item img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        /* Animation classes */
        .gallery-item.visible {
          animation: fadeSlideUp 0.6s ease forwards;
        }

        .gallery-item:nth-child(1).visible {
          animation-delay: 0s;
        }

        .gallery-item:nth-child(2).visible {
          animation-delay: 0.1s;
        }

        .gallery-item:nth-child(3).visible {
          animation-delay: 0.2s;
        }

        .gallery-item:nth-child(4).visible {
          animation-delay: 0.3s;
        }

        .gallery-item:nth-child(5).visible {
          animation-delay: 0.4s;
        }

        .gallery-item:nth-child(6).visible {
          animation-delay: 0.5s;
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="fashion-gallery-grid">
        {fashionImages.map((item, idx) => (
          <div
            key={item.id}
            data-index={idx}
            ref={(el) => {
              imageRefs.current[idx] = el
            }}
            className={`gallery-item ${item.span === 'double' ? 'span-2' : 'span-1'} ${
              visibleItems.has(idx) ? 'visible' : ''
            }`}
          >
            <div className="gallery-item-inner">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={idx === 0}
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FashionGallery
