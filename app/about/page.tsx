'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutContent from '@/components/AboutContent'

export default function AboutPage() {
    return (
        <div>
            {/* TopNavBar
            <nav className="fixed top-0 w-full z-50 bg-[#faf9f8]/80 dark:bg-stone-900/80 backdrop-blur-xl flex justify-between items-center w-full px-8 py-6 max-w-full">
                <div className="font-['Newsreader'] uppercase tracking-[0.2em] text-sm font-light text-stone-900 dark:text-stone-100">
                    THE SILENT CURATOR
                </div>
                <div className="hidden md:flex items-center gap-12">
                    <a className="text-stone-500 dark:text-stone-400 font-['Manrope'] font-light uppercase tracking-widest text-[10px] hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-500" href="#">Gallery</a>
                    <a className="text-stone-500 dark:text-stone-400 font-['Manrope'] font-light uppercase tracking-widest text-[10px] hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-500" href="#">Archive</a>
                    <a className="text-stone-900 dark:text-stone-100 border-b border-stone-900 dark:border-stone-100 pb-1 font-['Manrope'] font-light uppercase tracking-widest text-[10px]" href="#">About</a>
                    <a className="text-stone-500 dark:text-stone-400 font-['Manrope'] font-light uppercase tracking-widest text-[10px] hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-500" href="#">Contact</a>
                </div>
                <div className="flex items-center text-[#74533d] dark:text-[#8f6b54]">
                    <span className="material-symbols-outlined cursor-pointer">menu</span>
                </div>
            </nav> */}
            <main className="pt-32 pb-24 px-8 md:px-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Storytelling */}
                    <div className="lg:col-span-7 space-y-12">
                        <h1 className="font-body font-light text-6xl md:text-8xl tracking-tight text-on-surface">
                            About Me.
                        </h1>
                        <div className="space-y-8 text-on-surface-variant leading-relaxed text-lg font-light max-w-2xl">
                            <p>
                                I am Subhash Rawat, a passionate photographer based in Rajasthan, India, with over 15 years of experience in the art of freezing time and capturing life's most precious moments.
                            </p>
                            <p>
                                Photography has been an integral part of my life, and my journey began with a fascination for storytelling through visuals. Over the years, I have had the privilege of working with a diverse range of clients and capturing a multitude of emotions, from candid expressions to breathtaking landscapes.
                            </p>
                            <p>
                                My photography style can be described as artistic and evocative. I believe in going beyond the ordinary and seeking beauty in the mundane. Whether it's a radiant smile on a bride's face, the magical hues of a sunset over the desert, or the raw emotions of a family reunion, my goal is to create images that leave a lasting impact on hearts.
                            </p>
                            <p>
                                The beauty of photography lies in its ability to freeze fleeting moments and transform them into timeless memories. Every click of the shutter is an opportunity to preserve a story, an emotion, or a connection. With my camera as my companion, I embark on a continuous quest to explore new perspectives and push the boundaries of visual storytelling.
                            </p>
                            <div className="pt-4 border-l-2 border-primary pl-8 my-12 italic font-headline text-2xl text-primary">
                                "As a Sony Rajasthan brand ambassador, I am grateful for the opportunities that this partnership has offered me."
                            </div>
                            <p>
                                Beyond the lens, I am an avid traveler and an ardent lover of nature. Exploring new places not only fuels my creativity but also provides me with fresh inspiration for my photography.
                            </p>
                            <p>
                                Thank you for visiting my website and for taking the time to get to know me better. I hope my passion for photography reflects in the images I create and that you find as much joy in viewing them as I do in capturing them.
                            </p>
                            <p className="pb-8">
                                If you have any questions, collaboration ideas, or simply want to say hello, please feel free to get in touch. I'm excited to embark on this photographic journey together, capturing the beauty and essence of life, one frame at a time.
                            </p>
                            {/* <div className="pt-8">
                                <a className="inline-block border-b border-on-surface pb-1 uppercase tracking-[0.2em] text-[10px] font-bold hover:text-primary hover:border-primary transition-all duration-500" href="#">
                                    Download Portfolio
                                </a>
                            </div> */}
                        </div>
                    </div>
                    {/* Right Column: Professional Portrait */}
                    <div className="lg:col-span-5 sticky top-32">
                        <div className="relative aspect-3/4 overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group">
                            <img alt="Portrait of Photographer" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-2000" data-alt="Sophisticated professional black and white portrait of a photographer with sharp lighting and minimal background in an editorial style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuJKmdqWiDdafMGJwnMaybeuSZpf1Bl0mV3J47G8VFPPOM5dY2SFkeEcgRfLCzqvLkKpNK4Q12nb_U0ewPfZy39uTTescP8kuO_FAiayVwmtkZ3Eq0C1rfhuhgnwKZNVtN1QkKEw4F3-PNGde8kHa5J3v2TuoStIy8SjCOAELHnjQ0iLJHx4V_7igyktOWuQfe33IZABw1NI4SF5WczmFZa3tWs3dpy_dXoBznWeKXnM5nIQAPLeugJhUtNn_d7Hsx2Tz2AiQo29U" />
                            <div className="absolute bottom-0 right-0 bg-surface p-6 hidden lg:block">
                                <p className="font-headline italic text-xl text-primary">Subhash Rawat</p>
                                <p className="font-label uppercase tracking-widest text-[9px] text-secondary mt-1">Rajasthan, India</p>
                            </div>
                        </div>
                        {/* Signature/Logo Detail */}
                        <div className="mt-12 flex justify-end">
                            <div className="text-right">
                                <p className="font-headline italic text-4xl text-on-surface opacity-20 select-none">Subhash Rawat</p>
                                <div className="h-[1px] w-24 bg-outline-variant mt-2 ml-auto opacity-30" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
        </div>

    )
}
