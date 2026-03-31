import Link from 'next/link'

export default function Footer() {
    return (
        <div>
            <footer className="bg-black pt-24 pb-12">
                <div className="max-w-screen-2xl mx-auto px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
                        {/* Instagram Column */}
                        <div>
                            <h3 className="text-white text-2xl font-bold mb-8">Follow me on Instagram</h3>
                            <div className="grid grid-cols-3 gap-2">
                                <img className="aspect-square object-cover rounded-none scale-100 hover:scale-95 transition-transform duration-2000" data-alt="Black and white artistic portrait of a woman with dramatic side lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXBFB3_2XZG0maNwDVP-SE-xmOkzxqiXWgiOMlBIxKRfTrHr96e-Dt6bOR-NsTUT2MALy9htoA-P82QAJqq7yrOHNpgvqKNMo-1BIl_u1PNjPs1P_OxcfB4fzOuUDfdEyMR-imBmJ7DPPKTOSyVQlcmSG7oNNwUJlyx6R31x9gaC4eNlo1MT87fltqZvcqACefyAHY4jnrREbQ56rGZSi5tPM6dlbgGRtquVs3dZaDkGtAhOFDP9wqlCnIVlbqOZ6qcgudVRKHGdM" />
                                <img className="aspect-square object-cover rounded-none scale-100 hover:scale-95 transition-transform duration-2000" data-alt="Moody landscape of misty mountains at dawn in monochrome" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgbVOoy6kAb4V_OYWTERWb0Xz-1jzpElYpMCkGlVNbACRKHaJXrBCgj1ZKHl1TvbAvDe1NIVKgwQCqpWyH1NroGtoYqNPmP0jIwD3ci2K3AKm9neFnPtjnm3KNlx_y2f3Fo21YEGqIhMhDAWeZlir_1U9Kv68iymOv80wiRYak284CaBIZlZ25MKbgE11eqOSv9p6p7eikbypKGNqeIw4cZNCSjt-In4KNaEqFLEuS-MqOtqRfuAYo2VJ6p3-oOePVNlGUnCABPrA" />
                                <img className="aspect-square object-cover rounded-none scale-100 hover:scale-95 transition-transform duration-2000" data-alt="Candid street photography shot of a busy European boulevard in soft focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC59tfriqD-IX-F_tg1CiZ8Zi6FeHQOOZK4KcIF0bfulwpRTo5QPWW2DX4E2yS6baxCjgRQaFtDQ-sIX8z5Yy6OtDA6UVaViQL-49jV2QHj9lYm0iKyCfK1cfZ6dxddJ3XmpDnLHo6hgZ8uz6aGwVDuPBUWTXNIXY1ClGMUgZG-krpFOP338JACWHlZSGBFoeWdDjtrpqWfJp5gxxo-quXqAm-K2QRn4P843FPfRiyshUeaIL-E-wz8sUIve0JEltlYqZQJMuZmG6o" />
                                <img className="aspect-square object-cover rounded-none scale-100 hover:scale-95 transition-transform duration-2000" data-alt="High-fashion studio portrait with strong editorial composition and sharp contrast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFKt5D4PKCxDgAFnJ3yoSuILYzIcGzAUSq8vyK9FAosFsDaB1-WXypJ24-G6ICb5TL_YclHt1MRaJdQEn7Df_8OYnPubas4bWt28g2F3Z7HRPa9Kkr9RexC4MCOpt8IeXG30R78rp5m1e9VHSQTjpvqq6GlG9RiNav0VXAolllxFn8jBNrpnW5DhKCV_G6373TTEohJGeuGji2wCvhhqQtNSWkT0tDo1_y88IG9W-x985kTrBpb8uLp9Wm4niTxkQqlKcwl88roZM" />
                                <img className="aspect-square object-cover rounded-none scale-100 hover:scale-95 transition-transform duration-2000" data-alt="Minimalist architectural detail of a concrete building against a clear sky" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBr7CXO5KgkHUx2ZjZkGPWbVhFhLnX5yORnd1LTDUpXhjP7Tjjs8mla_5E1bdNFdgZPR-R9RNUK1YtxU6H2V7oOy0tKUogS6i2Bh07KqAPjK3jsnzKVJzVg3zo9Aqn4hO2NtXJFB5k3oOriaejghAUHL42I3nd8SvelWN9jZF3Zq3ubVa6rK3POUnLG6aIAulpD6yPM7VWdyL7TqUX8JLwmkiR_M-_Z3_aemZNCMisZbs0mp9I0XwMI1St_W8jK3keubdc8dUrP84" />
                                <img className="aspect-square object-cover rounded-none scale-100 hover:scale-95 transition-transform duration-2000" data-alt="Atmospheric forest path with light rays filtering through dense pine trees" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY6bRlvRiqndtkXV4iChFGwAG3ZC-PjuxCgfoNpGaezcogqFSmcO5HW4cSfJYpxnGLfqQpfYWKhq_Ei_c4t0A1zIHDCKM_KNVGT2DPDzZ6cE-nbGZaCgRgr0m5PWkLdFr4jegXMgICcP2tg2xxSUT6UmRntikS68tOAds2TwT2wazDBxWAdC2FLMkdse9Vxx24rErPu4v4ewirtZNUqqjC0IvJcIZC9299ese7FojNFZnI95lEW8wGNVmJDPHUde8GQwSc_SxiYPU" />
                            </div>
                        </div>
                        {/* Navigation Columns */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="space-y-6">
                                <h4 className="text-white font-bold text-sm uppercase tracking-widest">Explore</h4>
                                <ul className="space-y-4 text-zinc-400 text-sm">
                                    <li><a className="hover:text-white transition-colors" href="#">Portfolio</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Services</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-white font-bold text-sm uppercase tracking-widest">Social</h4>
                                <ul className="space-y-4 text-zinc-400 text-sm">
                                    <li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Twitter</a></li>
                                    <li><a className="hover:text-white transition-colors" href="#">Facebook</a></li>
                                </ul>
                            </div>
                            <div className="col-span-2 space-y-6">
                                <h4 className="text-white font-bold text-sm uppercase tracking-widest">Newsletter</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">Subscribe to get the latest updates and behind-the-scenes content.</p>
                                <div className="flex">
                                    <input className="bg-zinc-800 border-none rounded-l-full px-6 py-3 text-sm text-white focus:ring-1 focus:ring-zinc-500 w-full" placeholder="Your email" type="email" />
                                    <button className="bg-white text-black px-6 py-3 rounded-r-full font-bold text-sm">Join</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* Bottom Footer Area */}
                    <div className="pt-12 mt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-3xl font-bold tracking-tighter text-white font-headline">
                            skphotography
                        </div>
                        <div className="text-zinc-500 text-sm font-manrope">
                            The SK - Photography © 2026. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
