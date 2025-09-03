"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

// FAQ Schema data for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes your Olympus X3 and MX2 systems worth the premium?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When a client's tank fails, they don't lose hundreds of dollars. They lose hundreds of thousands. The Olympus X3 and MX2 give us precision that cheaper alternatives simply can't match. 99.9% accuracy in thickness measurements (vs 95% with basic equipment), real-time data analysis that catches issues others miss, and works in extreme conditions where cheaper tools fail."
      }
    },
    {
      "@type": "Question", 
      "name": "How often do you calibrate your equipment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every 90 days, religiously. No exceptions. I've seen too many companies cut corners here and end up with lawsuits. Our calibration certificates are traceable to NIST standards, and we can prove every reading we give you."
      }
    },
    {
      "@type": "Question",
      "name": "Can your equipment work in confined spaces?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Absolutely. The Olympus X3 was specifically chosen for its compact design and wireless capabilities. We've used it in spaces as tight as 18 inches. The MX2 handles most standard tank interiors without issue."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if your equipment fails during inspection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We carry backup systems for every critical piece of equipment. Plus, all our primary equipment comes with comprehensive warranties and 24/7 technical support. In 10+ years, we've never had to postpone an inspection due to equipment failure."
      }
    },
    {
      "@type": "Question", 
      "name": "Do you provide equipment training for our staff?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but with a caveat. We can train your team on basic equipment operation, but API 653, 570, and 510 certifications require extensive training and experience. For critical inspections, you're still better off having certified professionals handle the work."
      }
    }
  ]
};

export default function Equipment() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(8).fill(false));

  // Photo gallery data - replace with your actual images
  const photos = [
    { src: '/olympus-x3.jpg', alt: 'Olympus X3 Advanced Ultrasonic System', fallback: true },
    { src: '/olympus-mx2.jpg', alt: 'Olympus MX2 Ultrasonic System', fallback: true },
    { src: '/equipment-3.jpg', alt: 'Magnetic Particle Testing Equipment', fallback: true },
    { src: '/equipment-4.jpg', alt: 'Liquid Penetrant Testing Kit', fallback: true },
    { src: '/equipment-5.jpg', alt: 'Phased Array UT System', fallback: true },
    { src: '/equipment-6.jpg', alt: 'Radiographic Testing Equipment', fallback: true },
    { src: '/equipment-7.jpg', alt: 'Visual Inspection Tools', fallback: true },
    { src: '/equipment-8.jpg', alt: 'Portable Testing Laboratory', fallback: true }
  ];

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000); // Change photo every 4 seconds

    return () => clearInterval(interval);
  }, [isPlaying, photos.length]);

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  const goToPhoto = (index: number) => {
    setCurrentPhoto(index);
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
        {/* Photo Gallery Section */}
        <section className="relative h-[400px] md:h-[600px] bg-gray-900 overflow-hidden">
          <div 
            className="relative w-full h-full"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            {/* Photos */}
            <div className="relative w-full h-full">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                    index === currentPhoto ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {photo.fallback || imageErrors[index] ? (
                    <div className={`w-full h-full bg-gradient-to-br ${
                      index % 4 === 0 ? 'from-teal-600 to-teal-800' :
                      index % 4 === 1 ? 'from-cyan-600 to-cyan-800' :
                      index % 4 === 2 ? 'from-emerald-600 to-emerald-800' :
                      'from-slate-600 to-slate-800'
                    } flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <svg className="w-20 h-20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                          {index % 4 === 0 ? (
                            <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"/>
                          ) : index % 4 === 1 ? (
                            <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.091 3.09z"/>
                          ) : index % 4 === 2 ? (
                            <path d="M6.429 9.75L2.25 12l4.179 2.25a1.875 1.875 0 010 3.464L2.25 21.75l4.179-4.046a1.875 1.875 0 01.776-.523 60.58 60.58 0 011.295-.266c.317-.05.654-.078 1.006-.098.681-.04 1.34-.015 1.942.05a60.75 60.75 0 018.727 1.432c.287.055.592.108.918.162.177.03.356.057.537.081L21.75 12 6.429 9.75z"/>
                          ) : (
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5.25 12 5.25c4.478 0 8.268 2.693 9.542 6.75-1.274 4.057-5.064 6.75-9.542 6.75-4.477 0-8.268-2.693-9.542-6.75z"/>
                          )}
                        </svg>
                        <h3 className="text-xl font-bold mb-2">{photo.alt}</h3>
                        <p className="text-blue-100 text-sm opacity-75">Add your image to replace this placeholder</p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-contain bg-gray-900"
                      onError={() => handleImageError(index)}
                      priority={index === 0}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Navigation Arrows */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 group z-20"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 group z-20"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>

            {/* Photo Counter */}
            <div className="absolute top-16 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium z-20">
              {currentPhoto + 1} / {photos.length}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-16 left-4 w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 z-20"
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>

            {/* Caption */}
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="bg-black/50 backdrop-blur-sm text-white p-4 rounded-xl">
                <h3 className="text-lg font-semibold mb-1">{photos[currentPhoto].alt}</h3>
                <p className="text-sm text-gray-200">Professional inspection equipment and tools</p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPhoto(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPhoto 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
              Professional <span className="text-blue-400">Inspection Equipment</span> That Actually Works
            </h1>
            <p className="text-xl text-slate-300 text-center max-w-4xl mx-auto mb-12">
              Look, I&apos;ll be straight with you - <strong>professional inspection equipment</strong> isn&apos;t just about fancy gadgets. It&apos;s about having the right tools that deliver results when your assets are on the line. We use state-of-the-art testing equipment because your business can&apos;t afford guesswork.
            </p>
          </div>
        </section>

        {/* Equipment Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 border border-blue-200">
                <div className="flex items-start space-x-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Our Equipment Actually Matters</h2>
                </div>
                
                <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                  <p>
                    Here&apos;s what I learned after 15+ years in this business: **cheap equipment costs you more in the long run.** That&apos;s why I invested in <strong>advanced inspection equipment</strong> from industry leaders like Olympus - because when you&apos;re dealing with million-dollar assets, &quot;good enough&quot; isn&apos;t good enough.
                  </p>
                  <p>
                    **Here&apos;s our non-negotiable standard:**
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Every piece of equipment gets <strong>calibrated and maintained</strong> religiously (no exceptions)</li>
                    <li>We use the same gear that Fortune 500 companies trust</li>
                    <li>All our <a href="/services/NDT" className="text-blue-600 hover:text-blue-800 underline">NDT testing methods</a> are backed by traceable certificates</li>
                    <li>You get comprehensive reporting that actually helps you make decisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Arsenal: Our 6 Equipment Categories</h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  Here&apos;s what separates us from the &quot;clipboard and flashlight&quot; inspection companies. We&apos;ve got comprehensive equipment for every single inspection scenario you&apos;ll encounter - and yes, we bring backups too.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* Ultrasonic Testing Equipment */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.091 3.09z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600">Ultrasonic Testing: The Heavy Hitters</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Our crown jewels for precision thickness measurement:</p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">**Olympus EPOCH series** - The industry gold standard for thickness gauges</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">**Olympus X3 and MX2** - Our $50K+ precision systems (worth every penny)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">**Phased Array UT** - For when you need to see inside complex welds</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">**TOFD equipment** - Precise crack sizing (catches what others miss)</p>
                    </div>
                  </div>
                </div>

                {/* Magnetic Particle Testing Equipment */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600">Magnetic Particle Testing</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Portable magnetic yokes and electromagnets</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">UV-A lights for fluorescent particle inspection</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Magnetic particles and aerosols</p>
                    </div>
                  </div>
                </div>

                {/* Liquid Penetrant Testing Equipment */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.429 9.75L2.25 12l4.179 2.25a1.875 1.875 0 010 3.464L2.25 21.75l4.179-4.046a1.875 1.875 0 01.776-.523 60.58 60.58 0 011.295-.266c.317-.05.654-.078 1.006-.098.681-.04 1.34-.015 1.942.05a60.75 60.75 0 018.727 1.432c.287.055.592.108.918.162.177.03.356.057.537.081L21.75 12 6.429 9.75z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600">Liquid Penetrant Testing</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Fluorescent and visible dye penetrants</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">UV-A lights and white light sources</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Complete penetrant testing kits</p>
                    </div>
                  </div>
                </div>

                {/* Visual Testing Equipment */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600">Visual Testing</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">High-resolution borescopes and videoscopes</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Digital microscopes and magnification tools</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">LED lighting systems and mirrors</p>
                    </div>
                  </div>
                </div>

                {/* Radiographic Testing Equipment */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"/>
                        <path d="M12.28 0C18.67 1.92 21.81 8.85 19.9 15.26A11.99 11.99 0 0112.28 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600">Radiographic Testing</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Digital radiography systems (DR)</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Computed radiography (CR) equipment</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Film processing and darkroom equipment</p>
                    </div>
                  </div>
                </div>

                {/* Measurement & Calibration */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600">Measurement & Calibration</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Calibrated reference standards and test blocks</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Precision measurement tools and gauges</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Traceable calibration certificates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Features */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Equipment Features</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Advanced features that ensure accurate, reliable, and efficient inspections
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Calibrated & Certified</h3>
                  <p className="text-slate-300">All equipment is regularly calibrated with traceable certificates ensuring measurement accuracy.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Advanced Technology</h3>
                  <p className="text-slate-300">Latest generation equipment with digital recording and advanced analysis capabilities.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.25 18.75a1.5 1.5 0 01-3 0V8.625c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125v.621c0 .69-.492 1.275-1.17 1.405l-.43.086c-.877.175-1.425 1.008-1.425 1.863v7.3c0 .621-.504 1.125-1.125 1.125H8.25zM6.75 6.75c0-.69.56-1.25 1.25-1.25h7.5c.69 0 1.25.56 1.25 1.25v.75H6.75v-.75z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Portable Solutions</h3>
                  <p className="text-slate-300">Mobile and portable equipment for on-site inspections at any location.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Complete Documentation</h3>
                  <p className="text-slate-300">Digital data recording and comprehensive reporting capabilities for complete traceability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Equipment Questions I Get Asked Every Week
              </h2>
              
              <div className="space-y-8">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    &quot;What makes your Olympus X3 and MX2 systems worth the premium?&quot;
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Great question. Here&apos;s the thing - when a client&apos;s tank fails, they don&apos;t lose hundreds of dollars. They lose **hundreds of thousands.** The Olympus X3 and MX2 give us precision that cheaper alternatives simply can&apos;t match.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>**99.9% accuracy** in thickness measurements (vs 95% with basic equipment)</li>
                    <li>Real-time data analysis that catches issues others miss</li>
                    <li>Works in extreme conditions where cheaper tools fail</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    &quot;How often do you calibrate your equipment?&quot;
                  </h3>
                  <p className="text-gray-700">
                    Every 90 days, religiously. No exceptions. I&apos;ve seen too many companies cut corners here and end up with lawsuits. Our <strong>calibration certificates</strong> are traceable to NIST standards, and we can prove every reading we give you.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    &quot;What happens if your equipment breaks during my inspection?&quot;
                  </h3>
                  <p className="text-gray-700">
                    We carry backup equipment for every critical tool. Period. I learned this lesson the hard way on a $2M project in 2019 - never again. You&apos;ll never wait for us to &quot;order parts&quot; or &quot;reschedule.&quot;
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    &quot;Can you handle our specific API 653 requirements?&quot;
                  </h3>
                  <p className="text-gray-700">
                    Absolutely. Our equipment meets or exceeds all <a href="/services/api653" className="text-blue-600 hover:text-blue-800 underline">API 653 inspection standards</a>. We&apos;ve done everything from 10,000-gallon storage tanks to massive refinery vessels. If it&apos;s got steel and holds liquid, we can inspect it properly.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    &quot;How do you handle documentation and reporting?&quot;
                  </h3>
                  <p className="text-gray-700">
                    Digital everything. Real-time data upload, cloud backups, instant reports. You get your results same-day, not &quot;we&apos;ll mail it to you next week.&quot; Our **professional inspection equipment** generates reports that satisfy auditors, insurance companies, and regulators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Equipment That Won&apos;t Let You Down?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-4xl mx-auto">
              Look, I get it. You&apos;ve probably been burned by contractors with subpar equipment before. That&apos;s exactly why I invested in **professional inspection equipment** that Fortune 500 companies trust. Your assets deserve better than guesswork.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:luismon@tankinspectionservices.com?subject=Equipment Services Quote Request&body=Hello, I would like to request a free quote for inspection services. Please contact me with more information."
                className="bg-white text-gray-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
              >
                Get Your Free Quote
              </a>
              <a 
                href="mailto:luismon@tankinspectionservices.com?subject=Equipment Services Inquiry&body=Hello, I would like to speak with your equipment specialists about our inspection needs. Please contact me at your earliest convenience."
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm inline-block"
              >
                Talk to Our Team
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
    </>
  );
}