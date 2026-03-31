'use client'

import { Send } from "lucide-react"

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div>
                <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
                    {/* Hero Contact Form Section */}
                    <section className="max-w-4xl mx-auto mb-32">
                        <h1 className="text-5xl md:text-7xl font-extrabold text-center tracking-tighter mb-20 text-primary">
                            drop us a line
                        </h1>
                        <form className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-outline pl-4">Full Name</label>
                                    <input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-full px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 placeholder:text-gray-300" placeholder="Your Name" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-outline pl-4">Email Address</label>
                                    <input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-full px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 placeholder:text-gray-300" placeholder="hello@example.com" type="email" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6">
                                <label className="text-xs font-bold uppercase tracking-widest text-outline pl-4">Session Type</label>
                                <div className="flex flex-wrap gap-4">
                                    <label className="cursor-pointer group">
                                        <input defaultChecked className="hidden peer" name="session" type="radio" />
                                        <span className="px-8 py-3 rounded-full border border-outline-variant/20 bg-surface-container-lowest peer-checked:bg-primary peer-checked:text-white transition-all duration-300 inline-block text-sm font-medium">Wedding</span>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input className="hidden peer" name="session" type="radio" />
                                        <span className="px-8 py-3 rounded-full border border-outline-variant/20 bg-surface-container-lowest peer-checked:bg-primary peer-checked:text-white transition-all duration-300 inline-block text-sm font-medium">Engagement</span>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input className="hidden peer" name="session" type="radio" />
                                        <span className="px-8 py-3 rounded-full border border-outline-variant/20 bg-surface-container-lowest peer-checked:bg-primary peer-checked:text-white transition-all duration-300 inline-block text-sm font-medium">Fashion</span>
                                    </label>
                                    <label className="cursor-pointer group">
                                        <input className="hidden peer" name="session" type="radio" />
                                        <span className="px-8 py-3 rounded-full border border-outline-variant/20 bg-surface-container-lowest peer-checked:bg-primary peer-checked:text-white transition-all duration-300 inline-block text-sm font-medium">Casual</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-outline pl-4">How did you hear about me?</label>
                                <input className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-full px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 placeholder:text-gray-300" placeholder="Referral, Social Media, etc." type="text" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-outline pl-4">Your message (Optional)</label>
                                <textarea className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-6 py-5 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all duration-300 placeholder:text-gray-300 resize-none" placeholder="Tell us more about your vision..." rows={6} defaultValue={""} />
                            </div>
                            <div className="pt-4">
                                <button className="w-full md:w-auto px-12 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary-container transition-all duration-300 active:scale-95" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </section>
                    {/* Address Section */}
                    <section className="max-w-7xl mx-auto mb-32">
                        <div className="bg-surface-container-lowest rounded-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-sm">
                            <div className="p-12 md:p-24 flex flex-col justify-center items-start">
                                <h2 className="text-sm font-extrabold uppercase tracking-[0.3em] text-outline mb-8">Our Address</h2>
                                <p className="text-3xl md:text-4xl font-light leading-snug mb-12 text-on-surface">
                                    742 Evergreen Terrace,<br />
                                    Springfield, IL 62704<br />
                                    United States
                                </p>
                                <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-container transition-all duration-300">
                                    <Send />
                                    Get directions
                                </button>
                            </div>
                            <div className="h-100 lg:h-auto overflow-hidden">
                                <img alt="Modern minimalist office space" className="w-full h-full object-cover" data-alt="minimalist modern office interior with large windows, designer furniture, and clean white walls in soft natural daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbA0PrKVMdx5V8QwgUBd6DNtjEvQjXhbtrhtIxZ6v76o6HQTwgaLdyp7fw1tcsrDGRViJqS0MNukgr2D1cpNMXr5stV1-V1hoc9TEu5KP-s8mKlB2xNSD8TGmQjQ5OCPsxpSc-TwYMizMGpln-cQE2O8mfkHoz1t151nUfoAwX3ScxEnJKy7-QepPCzjYVNHNe8eTYVb2JRdL776o0iNI4kCI8Lv3gEcS5Nzo6Zt6OYso-76ebkVpJBNVdh6HiOmPZxd2qPcjTnhQ" />
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

