"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function WeldingQualifications() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(8).fill(false));

  // Photo gallery data - replace with your actual images
  const photos = [
    { src: '/weld_1.jpg', alt: 'Welding Exam', fallback: false },
    { src: '/weld_2.jpg', alt: 'Welding Exam', fallback: false },
    { src: '/weld_3.jpg', alt: 'Welding Exam', fallback: false },
    { src: '/weld_4.jpg', alt: 'Welding Exam', fallback: false },
    { src: '/weld_5.jpg', alt: 'Welding Exam', fallback: false },
  
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
                      index % 4 === 0 ? 'from-teal-600 to-teal-800' :
                      index % 4 === 1 ? 'from-cyan-600 to-cyan-800' :
                      index % 4 === 2 ? 'from-emerald-600 to-emerald-800' :
                      'from-slate-600 to-slate-800'
                    } flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <svg className="w-20 h-20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                          {index % 4 === 0 ? (
                            <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.091 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
                          ) : index % 4 === 1 ? (
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"/>
                          ) : index % 4 === 2 ? (
                            <path d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.953l-7.108 4.061A1.125 1.125 0 013 16.811z"/>
                          ) : (
                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"/>
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
                <p className="text-sm text-gray-200">Professional Welder Qualification services</p>
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
              Welder <span className="text-blue-400">Qualification</span>
            </h1>
            <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
              At Tank Inspection Services, we specialize in the qualification and certification of welders under the strict requirements of the ASME Section IX Code.
            </p>

          </div>
        </section>

        {/* ASME Welding Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ASME Welding Standards We Follow</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4">ASME Section IX</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Qualification of welders and welding procedures ensuring the highest standards in welding operations.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-indigo-800 mb-4">ASME Section VIII</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Pressure vessel welding requirements for safe and reliable pressure vessel construction and repair.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 3h-2v18h2V3zm4-2H7v18h10V1z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4">ASME B31.3</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Process piping welding standards ensuring integrity in industrial piping systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Welding Capabilities */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Qualification Services</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Testing & Qualification</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Welder Performance Qualification (WPQ) in compliance with ASME Section IX</li>
                        <li>• Procedure Qualification Records (PQR) to validate welding processes</li>
                        <li>• Qualification of Welding Procedure Specifications (WPS)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Testing Methods & Certification</h3>
                      <ul className="text-gray-700 space-y-2">
                        <li>• Testing methods including bend tests, tensile tests, and NDT evaluation</li>
                        <li>• Certification across multiple processes: SMAW, GTAW, GMAW, FCAW, and more</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">Comprehensive Qualification</h3>
                      <p className="text-blue-100 leading-relaxed">
                        Complete welder qualification services ensuring proper testing, certification, and documentation for critical industrial projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why It Matters</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 text-center hover:shadow-lg transition-all duration-30">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Standards Compliance</h3>
                  <p className="text-sm text-gray-700">Ensures welders meet ASME standards before working on projects</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Documentation</h3>
                  <p className="text-sm text-gray-700">Provides employers and clients with documented certification</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 text-center hover:shadow-lg transition-all duration-30">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Risk Reduction</h3>
                  <p className="text-sm text-gray-700">Reduces the risk of weld failures by verifying skills and procedures</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 text-center hover:shadow-lg transition-all duration-30">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-blue-800 mb-2">Quality Assurance</h3>
                  <p className="text-sm text-gray-700">Promotes safety, compliance, and quality assurance across industries</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
