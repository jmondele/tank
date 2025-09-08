"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Equipment() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [imageErrors, setImageErrors] = useState<boolean[]>(new Array(8).fill(false));

  // Equipment photo gallery data
  const photos = [
    { src: '/olympus_x3_y_mx2.jpg', alt: 'Olympus X3 Y MX2 Ultrasonic Flaw Detector', fallback: true },
    { src: '/equipment_1.jpg', alt: 'Advanced NDT Testing Equipment', fallback: true },
    { src: '/equipment_2.jpg', alt: 'Ultrasonic Inspection Tools', fallback: true },
    { src: '/equipment_3.jpg', alt: 'Magnetic Particle Testing Setup', fallback: true },
    { src: '/equipment_4.jpg', alt: 'Pressure Testing Equipment', fallback: true },
    { src: '/equipment_5.jpg', alt: 'Welding Qualification Test Station', fallback: true },
    { src: '/equipment_6.jpg', alt: 'Thickness Measurement Tools', fallback: true },
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
                      index % 4 === 0 ? 'from-green-600 to-green-800' :
                      index % 4 === 1 ? 'from-teal-600 to-teal-800' :
                      index % 4 === 2 ? 'from-cyan-600 to-cyan-800' :
                      'from-slate-600 to-slate-800'
                    } flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <svg className="w-20 h-20 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                          {index % 4 === 0 ? (
                            <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                          ) : index % 4 === 1 ? (
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          ) : index % 4 === 2 ? (
                            <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                          ) : (
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          )}
                        </svg>
                        <h3 className="text-xl font-bold mb-2">{photo.alt}</h3>
                        <p className="text-green-100 text-sm opacity-75">Professional inspection equipment</p>
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
                <p className="text-sm text-gray-200">State-of-the-art inspection and testing equipment</p>
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
              Professional <span className="text-green-400">Inspection Equipment</span>
            </h1>
            <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
              State-of-the-art equipment for comprehensive tank and vessel inspection services, ensuring accurate and reliable results.
            </p>
          </div>
        </section>

        {/* What is Our Equipment */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 md:p-12 border border-green-200">
                <div className="flex items-start space-x-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Equipment Capabilities</h2>
                </div>
                
                <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                  <p>
                    Our <strong>advanced inspection equipment</strong> enables us to perform comprehensive assessments of tanks, pressure vessels, and piping systems with the highest level of accuracy and reliability.
                  </p>
                  <p>
                    From <strong>non-destructive testing (NDT) equipment</strong> to specialized measurement tools, we maintain a complete arsenal of professional-grade instruments to support all aspects of API 510, API 570, API 653, and ASME compliance testing.
                  </p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Equipment Categories</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive equipment inventory for all inspection and testing requirements
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {/* NDT Equipment */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-600">Non-Destructive Testing (NDT)</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Ultrasonic testing equipment for thickness measurement and flaw detection.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Magnetic particle testing systems for surface crack detection.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Dye penetrant testing kits for surface discontinuity identification.</p>
                    </div>
                  </div>
                </div>

                {/* Measurement Tools */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-600">Precision Measurement</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Digital calipers and micrometers for precise dimensional analysis.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Thickness gauges for wall thickness measurement.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Surface roughness testers for finish quality assessment.</p>
                    </div>
                  </div>
                </div>

                {/* Pressure Testing */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-600">Pressure Testing Equipment</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Hydrostatic testing pumps for pressure vessel testing.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Pneumatic testing equipment for air pressure tests.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Digital pressure gauges for accurate pressure monitoring.</p>
                    </div>
                  </div>
                </div>

                {/* Visual Inspection */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-600">Visual Inspection Tools</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Borescopes for internal vessel inspection.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">High-resolution cameras for documentation.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">LED lighting systems for optimal visibility.</p>
                    </div>
                  </div>
                </div>

                {/* Welding Test Equipment */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 00-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-600">Welding Test Equipment</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Bend testing machines for weld quality assessment.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Tensile testing equipment for strength evaluation.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Hardness testers for material property verification.</p>
                    </div>
                  </div>
                </div>

                {/* Calibration & Standards */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-600">Calibration & Standards</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">NIST traceable calibration standards and reference blocks.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Regular calibration maintenance for all equipment.</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">Documentation and certification of all measurements.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Equipment - Olympus X3 Y MX2 */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-12 border border-blue-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Olympus X3 Y MX2</h2>
                        <p className="text-lg text-blue-600 font-semibold">Advanced Ultrasonic Flaw Detector</p>
                      </div>
                    </div>
                    
                    <div className="text-gray-700 text-lg leading-relaxed space-y-4 mb-8">
                      <p>
                        The <strong>Olympus X3 Y MX2</strong> is our flagship ultrasonic flaw detector, providing exceptional accuracy and reliability for critical tank and vessel inspections.
                      </p>
                      <p>
                        This advanced NDT equipment delivers precise thickness measurements and flaw detection capabilities essential for API 510, API 570, and API 653 compliance inspections.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features</h4>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700">High-resolution ultrasonic testing</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700">Precision thickness measurement</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700">Advanced flaw detection algorithms</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700">Real-time data analysis</p>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-bold text-gray-900 mb-3">Applications</h4>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700">Pressure vessel wall thickness</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700">Storage tank floor scanning</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700">Piping system inspection</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-gray-700">Weld quality assessment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:pl-8">
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
                      <h4 className="text-2xl font-bold mb-6 text-center">Technical Specifications</h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-blue-300/30 pb-2">
                          <span className="font-medium">Frequency Range:</span>
                          <span className="text-blue-100">0.5 - 20 MHz</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-blue-300/30 pb-2">
                          <span className="font-medium">Measurement Range:</span>
                          <span className="text-blue-100">0.08 - 6000 mm</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-blue-300/30 pb-2">
                          <span className="font-medium">Accuracy:</span>
                          <span className="text-blue-100">±0.1% ±0.01 mm</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-blue-300/30 pb-2">
                          <span className="font-medium">Display:</span>
                          <span className="text-blue-100">7&quot; Color TFT</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-blue-300/30 pb-2">
                          <span className="font-medium">Operating Temp:</span>
                          <span className="text-blue-100">-10°C to +50°C</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Certification:</span>
                          <span className="text-blue-100">IP65 Rated</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-600 italic">
                        NIST traceable calibration maintained for all measurements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Our Equipment Matters */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Our Equipment Matters</h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Advanced equipment ensures accurate results, regulatory compliance, and reliable assessments
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Precision & Accuracy</h3>
                  <p className="text-slate-300">State-of-the-art equipment delivers precise measurements and reliable test results.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Industry Standards Compliance</h3>
                  <p className="text-slate-300">All equipment meets or exceeds API, ASME, and industry standard requirements.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Comprehensive Documentation</h3>
                  <p className="text-slate-300">Detailed reporting and documentation for all inspection results and findings.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300">
                  <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Efficiency & Speed</h3>
                  <p className="text-slate-300">Advanced technology reduces inspection time while maintaining thorough analysis.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Professional Equipment, Professional Results
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Our state-of-the-art equipment ensures accurate, reliable inspections that meet the highest industry standards. Contact us for professional tank and vessel inspection services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:luismon@tankinspectionservices.com?subject=Equipment Inspection Services Quote Request&body=Hello, I would like to request a free quote for professional inspection services. Please contact me with more information."
                className="bg-white text-gray-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
              >
                Get Free Quote
              </a>
              <a 
                href="mailto:luismon@tankinspectionservices.com?subject=Equipment Inspection Services Inquiry&body=Hello, I would like to speak with your inspection experts about our equipment needs. Please contact me at your earliest convenience."
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