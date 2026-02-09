import React, { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle email submission
    alert('Thank you for your interest!')
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="section-padding py-6 border-b border-brand-200">
        <div className="container-max flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-brand-900">
            BENDER BRANDS
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#brands" className="text-brand-700 hover:text-brand-900 transition-colors">Our Brands</a>
            <a href="#about" className="text-brand-700 hover:text-brand-900 transition-colors">About</a>
            <a href="#contact" className="text-brand-700 hover:text-brand-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding py-20 md:py-32">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-brand-900 mb-6">
              Elevated Everyday Products
            </h1>
            <p className="text-xl md:text-2xl text-brand-600 mb-12 leading-relaxed">
              A curated portfolio of brands that seamlessly blend style, design, and uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#brands" 
                className="px-8 py-4 bg-brand-900 text-white font-semibold rounded-lg hover:bg-brand-800 transition-colors"
              >
                Explore Our Brands
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 border-2 border-brand-900 text-brand-900 font-semibold rounded-lg hover:bg-brand-50 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="section-padding py-20 bg-brand-50">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-brand-900 mb-4">
            Our Brands
          </h2>
          <p className="text-xl text-brand-600 text-center mb-16 max-w-3xl mx-auto">
            Each brand in our portfolio is carefully selected to embody our commitment to exceptional quality and timeless design.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="aspect-square bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center">
                  <div className="text-6xl font-bold text-brand-300 group-hover:text-brand-400 transition-colors">
                    {item}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-900 mb-2">
                    Brand {item}
                  </h3>
                  <p className="text-brand-600">
                    Crafted with precision and designed to elevate your everyday experience.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="section-padding py-20">
        <div className="container-max">
          <h3 className="text-sm font-semibold text-brand-500 text-center mb-8 uppercase tracking-wider">
            You've Seen Our Brands In
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-40">
            {['Publication 1', 'Publication 2', 'Publication 3', 'Publication 4'].map((pub, idx) => (
              <div key={idx} className="text-2xl font-bold text-brand-700">
                {pub}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding py-20 bg-brand-900 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              About Us
            </h2>
            <p className="text-xl leading-relaxed text-brand-200 mb-6">
              We are a curated portfolio of brands that seamlessly blend style, design, and uncompromising quality. 
              We strive to create products that not only look and feel exceptional but also stand the test of time.
            </p>
            <p className="text-xl leading-relaxed text-brand-200">
              Every Bender Brands product is designed to elevate your everyday experiences, bringing together 
              functionality and aesthetics in perfect harmony.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding py-20">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-900 mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-brand-600 mb-8">
              Be the first to know about new products and exclusive updates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 border-2 border-brand-300 rounded-lg focus:outline-none focus:border-brand-900 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-brand-900 text-white font-semibold rounded-lg hover:bg-brand-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding py-12 border-t border-brand-200">
        <div className="container-max">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-brand-900 font-bold text-xl mb-4 md:mb-0">
              BENDER BRANDS
            </div>
            <div className="text-brand-600 text-sm">
              © {new Date().getFullYear()} Bender Brands. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
