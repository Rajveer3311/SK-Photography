'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PreWeddingsGallery from '@/components/PreWeddingsGallery'
import ParallaxGridScroll from '@/components/ParallaxGridScroll'

export default function PreWeddingsPage() {
  return (
    <main className="min-h-screen ">
      <Header />
      <div className="pt-20 bg-white"/>
        
        <ParallaxGridScroll title='PRE-WEDDINGS' subtitle='Heavenly moments, before the big day' />
    </main>
  )
}
