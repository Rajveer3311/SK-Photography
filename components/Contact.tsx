'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  return (
    <section className="w-full py-16 md:py-24 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Section - Text and Images */}
          <div className="flex flex-col space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              Leave us a<br />
              message and<br />
              unleash your<br />
              vision
            </h2>

            {/* Image 1 */}
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop"
                alt="Portrait"
                fill
                className="object-cover"
              />
            </div>

            {/* Image 2 */}
            <div className="relative w-48 h-48 rounded-lg overflow-hidden bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop"
                alt="Travel"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Section - Form */}
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            {/* Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="firstName" className="block text-xs tracking-widest text-muted-foreground mb-3">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b border-muted text-foreground bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors"
                  placeholder=""
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs tracking-widest text-muted-foreground mb-3">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-muted text-foreground bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors"
                  placeholder=""
                />
              </div>
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest text-muted-foreground mb-3">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-muted text-foreground bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs tracking-widest text-muted-foreground mb-3">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-muted text-foreground bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors"
                  placeholder=""
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-xs tracking-widest text-muted-foreground mb-3">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border-b border-muted text-foreground bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors"
                placeholder=""
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs tracking-widest text-muted-foreground mb-3">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border-b border-muted text-foreground bg-transparent py-2 focus:outline-none focus:border-foreground transition-colors resize-none"
                placeholder="Type your message here..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full md:w-40 bg-accent hover:bg-accent/90 text-white px-8 py-3 text-sm tracking-widest font-medium transition-colors"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
