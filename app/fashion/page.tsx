'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FashionGallery from '@/components/FashionGallery'
import ParallaxGridScroll from '@/components/ParallaxGridScroll'

export default function FashionPage() {
    return (
        <div className="min-h-screen bg-background">
            <main className="pt-20 md:pt-24 bg-white"/>

                <ParallaxGridScroll title='FASHION' subtitle='Elegance, Beauty & Craft' />

        </div>
    )
}
