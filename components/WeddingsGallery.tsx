'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface GalleryItem {
  id: number
  src: string
  alt: string
  width: number
  height: number
  colSpan: number
  rowSpan: number
}

const weddingsImages: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1519741497674-611481c21ba6?w=500&h=600&fit=crop',
    alt: 'Wedding couple dancing',
    width: 500,
    height: 600,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop',
    alt: 'Bride and groom portrait',
    width: 600,
    height: 400,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1519125338175-e2dc675efc1e?w=500&h=500&fit=crop',
    alt: 'Wedding ceremony',
    width: 500,
    height: 500,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=600&fit=crop',
    alt: 'Bride in wedding dress',
    width: 500,
    height: 600,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop',
    alt: 'Wedding celebration',
    width: 600,
    height: 400,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1460749411175-04bf5292ceea?w=500&h=500&fit=crop',
    alt: 'Romantic wedding moment',
    width: 500,
    height: 500,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&h=500&fit=crop',
    alt: 'Wedding details',
    width: 500,
    height: 500,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1519741497674-611481c21ba6?w=600&h=400&fit=crop',
    alt: 'Reception moment',
    width: 600,
    height: 400,
    colSpan: 2,
    rowSpan: 1,
  },
]

export default function WeddingsGallery() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
      }
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .gallery-item {
          opacity: 0;
        }

        .gallery-item.animate-in {
          animation: slideUp 0.8s ease-out forwards;
        }

        .gallery-item:nth-child(odd).animate-in {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .gallery-item:nth-child(even).animate-in {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .gallery-item:nth-child(3n).animate-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          .gallery-item:nth-child(2) {
            grid-column: span 2;
          }

          .gallery-item:nth-child(4) {
            grid-row: span 2;
          }

          .gallery-item:nth-child(5) {
            grid-column: span 2;
          }
        }
      `}</style>

      <div className="gallery-grid">
        {weddingsImages.map((item, idx) => (
          <div
            key={item.id}
            ref={(el) => {
              imageRefs.current[idx] = el
            }}
            className="gallery-item relative overflow-hidden rounded-lg bg-secondary group"
          >
            <div className="relative w-full h-full min-h-96">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading={idx === 0 ? 'eager' : 'lazy'}
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
