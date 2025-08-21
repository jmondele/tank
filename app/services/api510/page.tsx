"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function API510() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(8).fill(false));

  // Photo gallery data - replace with your actual images
  const photos = [
    { src: '/api510-1.jpg', alt: 'Pressure Vessel External Inspection', fallback: false },
    { src: '/api510-2.jpg', alt: 'Internal Vessel Assessment', fallback: false },
    { src: '/api510-3.jpg', alt: 'Thickness Measurement Process', fallback: true },
    { src: '/api510-4.jpg', alt: 'Welding and Component Replacement', fallback: true },
    { src: '/api510-5.jpg', alt: 'On-Stream Inspection', fallback: true },
    { src: '/api510-6.jpg', alt: 'Stress Analysis Equipment', fallback: true },
    { src: '/api510-7.jpg', alt: 'Pressure Vessel Rerating', fallback: true },
    { src: '/api510-8.jpg', alt: 'Certified Inspector at Work', fallback: true }
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
                      index % 4 === 0 ? 'from-purple-600 to-purple-800' :
                      index % 4 === 1 ? 'from-orange-600 to-orange-800' :
                      index % 4 === 2 ? 'from-red-600 to-red-800' :
                      'from-indigo-600 to-indigo-800'
                    } flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <svg className="w-20 h-20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                          {index % 4 === 0 ? (
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"/>
                          ) : index % 4 === 1 ? (
                            <path d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.953l-7.108 4.061A1.125 1.125 0 013 16.811z"/>
                          ) : index % 4 === 2 ? (
                            <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-4.653a2.548 2.548 0 010-3.586l6.837-6.836a5.814 5.814 0 018.485 8.485L15.25 15.25"/>
                          ) : (
                            <path d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307z"/>
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
                <p className="text-sm text-gray-200">Professional API 510 pressure vessel inspection services</p>
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
              API 510 <span className="text-blue-400">Pressure Vessel Inspection</span>
            </h1>
            <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
              Professional in-service inspection, repair, alteration, and rerating of pressure vessels following API 510 standards.
            </p>
          </div>
        </section>

        {/* What is API 510 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12 border border-blue-200">
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What is API 510?</h2>
                </div>
                
                <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                  <p>
                    <strong>API 510</strong> is the American Petroleum Institute&apos;s Pressure Vessel Inspection Code. It covers the <strong>in-service inspection, repair, alteration, and rerating of pressure vessels</strong> used in the petroleum, chemical, and industrial sectors.
                  </p>
                  <p>
                    It ensures that pressure vessels remain <strong>safe, reliable, and compliant</strong> throughout their operational life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Scope of API 510 */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Scope of API 510</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive standards covering all aspects of pressure vessel safety and integrity
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Inspection Requirements */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600">Inspection Requirements</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700"><strong>External inspections</strong> – At defined intervals while in service.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700"><strong>Internal inspections</strong> – Based on corrosion rates, risk assessments, and service conditions.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700"><strong>On-stream inspections</strong> – Non-intrusive checks while equipment remains in service.</p>
                    </div>
                  </div>
                </div>

                {/* Vessel Evaluation */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"/>
                        <path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600">Vessel Evaluation</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Thickness measurements and corrosion monitoring.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Fitness-for-service assessments.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Stress and fatigue analysis.</p>
                    </div>
                  </div>
                </div>

                {/* Repairs & Alterations */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655-4.653a2.548 2.548 0 010-3.586l6.837-6.836a5.814 5.814 0 018.485 8.485L15.25 15.25"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600">Repairs & Alterations</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Welding and component replacement.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Nozzle or reinforcement additions.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Design modifications to extend life or meet new requirements.</p>
                    </div>
                  </div>
                </div>

                {/* Rerating & Certification */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600">Rerating & Certification</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Establishing new maximum allowable working pressure (MAWP).</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Adjusting design temperature or operating conditions.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Work must be performed by an <strong>API 510 certified pressure vessel inspector</strong>.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why It Matters</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  API 510 compliance is essential for safe, reliable, and legally compliant pressure vessel operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Safety & Integrity</h3>
                  <p className="text-slate-300">Ensures safety and integrity of high-pressure equipment.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Failure Prevention</h3>
                  <p className="text-slate-300">Prevents failures, leaks, and catastrophic incidents.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Regulatory Compliance</h3>
                  <p className="text-slate-300">Helps maintain regulatory and industry compliance.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Extended Service Life</h3>
                  <p className="text-slate-300">Extends equipment service life while minimizing downtime.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Professional API 510 Services?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Our certified API 510 professionals use advanced techniques to ensure your assets remain safe, reliable, and compliant without interrupting operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:luismon@tankinspectionservices.com?subject=NDT Services Quote Request&body=Hello, I would like to request a free quote for NDT services. Please contact me with more information."
                className="bg-white text-gray-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
              >
                Get Free Quote
              </a>
              <a 
                href="mailto:luismon@tankinspectionservices.com?subject=NDT Services Inquiry&body=Hello, I would like to speak with your NDT experts about our inspection needs. Please contact me at your earliest convenience."
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm inline-block"
              >
                Contact Our Experts
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}