'use client'

import HeroCarousel from '@/components/HeroCarousel'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Contact'

export default function Home() {
    return (

        <div>
            <main>
                <HeroCarousel />
                <section className="py-24 text-center px-4">
                    <h1 className="font-['Manrope'] text-3xl font-light tracking-wide mb-4">Enchanting, Evocative, Inspiring</h1>
                    <p className="text-[0.6rem] tracking-[0.2em] text-on-surface/60 font-medium">We strive to unveil the hidden narratives</p>
                </section>
                <section className="max-w-350 mx-auto px-8 pb-40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* weddings */}
                        <div className="space-y-6 text-center">
                            <div className="aspect-square overflow-hidden bg-gray-100">
                                <img alt="Weddings" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVOzEN04DWZRNf4IWdboyNpN6811nvMehc-X9_qSW4fPvZEfphCzY_XndhWkASgNT-9AlIZST925vXQ80wVC6MI0e8glFIpKlqmM3nP4av_Ky_kBPy6qN91V4oQFPgBYcBuao32BXaZGRqLR7HLA7bMGwIukAYugPg_VcUpBgoiCtUk8SNufzpKmCNLKhSLfHmgjVXkQclDR3oPNSGebdm5L8Oi4Yf08b9C4vv6SPncxiqCRb66vesBkktbwpHSQgGtD8OcUAvx6I" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm tracking-[0.1em] font-light">Weddings</h3>
                                <a className="inline-block text-[0.55rem] tracking-[0.2em] font-bold text-on-surface/40 hover:text-on-surface transition-colors" href="/weddings">SEE MORE</a>
                            </div>
                        </div>
                        {/* fashion 1 */}
                        <div className="space-y-6 text-center">
                            <div className="aspect-square overflow-hidden bg-gray-100">
                                <img alt="Fashion" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://static.wixstatic.com/media/b7d251_84a67f4edd5643588988d2c54e4c0336~mv2.jpg/v1/crop/x_0,y_1078,w_6189,h_6298/fill/w_870,h_884,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AI%20PW%20005.jpg" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm tracking-[0.1em] font-light">Pre-weddings</h3>
                                <a className="inline-block text-[0.55rem] tracking-[0.2em] font-bold text-on-surface/40 hover:text-on-surface transition-colors" href="/pre-weddings">SEE MORE</a>
                            </div>
                        </div>
                        {/* fashion 2 */}
                        <div className="space-y-6 text-center">
                            <div className="aspect-square overflow-hidden bg-gray-100">
                                <img alt="Fashion" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://static.wixstatic.com/media/b7d251_5846204ba8884381938c9ce9babba6a0~mv2.jpg/v1/crop/x_0,y_836,w_6336,h_7451/fill/w_760,h_896,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/KD%20002.jpg" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm tracking-widest font-light">Fashion</h3>
                                <a className="inline-block text-[0.55rem] tracking-[0.2em] font-bold text-on-surface/40 hover:text-on-surface transition-colors" href="/fashion">SEE MORE</a>
                            </div>
                        </div>
                        {/* travel */}
                        <div className="space-y-6 text-center">
                            <div className="aspect-square overflow-hidden bg-gray-100">
                                <img alt="Travel" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://static.wixstatic.com/media/b7d251_9e7435005b264282876646a7d2a0d2f9~mv2.jpg/v1/crop/x_0,y_0,w_1080,h_1252/fill/w_770,h_896,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fire%20man%200011alpha.jpg" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm tracking-widest font-light">Travel</h3>
                                <a className="inline-block text-[0.55rem] tracking-[0.2em] font-bold text-on-surface/40 hover:text-on-surface transition-colors" href="#">SEE MORE</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-32 px-8 max-w-350 mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                        {/* Left Content */}
                        <div className="relative flex flex-col items-start pt-10">
                            <h2 className="text-5xl font-light leading-[1.1] max-w-md mb-20">Leave us a message and unleash your vision</h2>
                            <div className="relative w-full flex">
                                <div className="w-1/3 aspect-[3/4] mr-8 mt-40">
                                    <img alt="Detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzr5qdB3zKkcGIiqnLPiJ3BpnnBqQMHK5zabseca-VjrVhIPtF6STZv-l-sT17h_rHXWV6-jBOAalvJ28Lz9APVRwNo9jy1jLDs9Qx9TW9uPTpOVA8N_eRmrFkcxRHXa_PszZ3hgezg6GcBcEcx_WkYhrV_sNtLY9gz3S3xEwIQ6RWtuwBIPRr8N0fIQtK_29yn_Lc8TEi3fEo1KipD1E20B9a5y2qMyQj5oZowCYn7Ptma5Q9dDyHI5S1UrCljZf_oF3IusGqI-k" />
                                </div>
                                <div className="w-1/2 aspect-[3/5]">
                                    <img alt="Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzr5qdB3zKkcGIiqnLPiJ3BpnnBqQMHK5zabseca-VjrVhIPtF6STZv-l-sT17h_rHXWV6-jBOAalvJ28Lz9APVRwNo9jy1jLDs9Qx9TW9uPTpOVA8N_eRmrFkcxRHXa_PszZ3hgezg6GcBcEcx_WkYhrV_sNtLY9gz3S3xEwIQ6RWtuwBIPRr8N0fIQtK_29yn_Lc8TEi3fEo1KipD1E20B9a5y2qMyQj5oZowCYn7Ptma5Q9dDyHI5S1UrCljZf_oF3IusGqI-k" />
                                </div>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="pt-10">
                            <form className="space-y-12">
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[0.6rem] tracking-[0.1em] font-medium text-on-surface/60 uppercase">First Name</label>
                                        <input className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[0.6rem] tracking-[0.1em] font-medium text-on-surface/60 uppercase">Last Name</label>
                                        <input className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm" type="text" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[0.6rem] tracking-[0.1em] font-medium text-on-surface/60 uppercase">Email *</label>
                                        <input className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm" type="email" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[0.6rem] tracking-[0.1em] font-medium text-on-surface/60 uppercase">Phone</label>
                                        <input className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm placeholder:text-gray-300" placeholder="Phone" type="tel" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[0.6rem] tracking-[0.1em] font-medium text-on-surface/60 uppercase">Subject</label>
                                    <input className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[0.6rem] tracking-[0.1em] font-medium text-on-surface/60 uppercase">Type your message here...</label>
                                    <textarea className="w-full border-0 border-b border-gray-200 px-0 py-2 focus:ring-0 focus:border-on-surface transition-colors text-sm" rows={4} defaultValue={""} />
                                </div>
                                <div className="flex justify-center pt-8">
                                    <button className="bg-primary text-white text-[0.65rem] tracking-[0.2em] font-bold px-16 py-4 hover:opacity-90 transition-opacity uppercase" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
