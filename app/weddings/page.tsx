'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WeddingsGallery from '@/components/WeddingsGallery'
import ParallaxGridScroll from '@/components/ParallaxGridScroll'

export default function WeddingsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20"/>
        <ParallaxGridScroll title='WEDDINGS' subtitle='Capturing your most precious moments' />
      
    </main>
  )
}
