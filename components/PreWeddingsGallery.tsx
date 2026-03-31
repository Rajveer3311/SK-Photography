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

const preWeddingsImages: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1606794778202-83a5e1a39b5b?w=500&h=600&fit=crop',
    alt: 'Couple in field',
    width: 500,
    height: 600,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1545963631-d6ac7bcb6ebf?w=600&h=400&fit=crop',
    alt: 'Couple at palace',
    width: 600,
    height: 400,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop',
    alt: 'Romantic moment',
    width: 500,
    height: 500,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1594366006728-ca4c8a3abd80?w=500&h=600&fit=crop',
    alt: 'Urban love story',
    width: 500,
    height: 600,
    colSpan: 1,
    rowSpan: 2,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1606794778202-83a5e1a39b5b?w=600&h=400&fit=crop',
    alt: 'Golden hour couple',
    width: 600,
    height: 400,
    colSpan: 2,
    rowSpan: 1,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1502078062414-33374b1e5c1d?w=500&h=500&fit=crop',
    alt: 'Bride and groom',
    width: 500,
    height: 500,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1530268729831-4be0524a059b?w=500&h=500&fit=crop',
    alt: 'Couple portrait',
    width: 500,
    height: 500,
    colSpan: 1,
    rowSpan: 1,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1605216174495-fde3e0e9b92f?w=600&h=400&fit=crop',
    alt: 'Street photography',
    width: 600,
    height: 400,
    colSpan: 2,
    rowSpan: 1,
  },
]

export default function PreWeddingsGallery() {
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
        {preWeddingsImages.map((item, idx) => (
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
