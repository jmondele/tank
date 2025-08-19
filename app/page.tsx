// app/page.tsx
export default function HomePage() {
  return (
    <main className="bg-white text-[#2b2b2b]">
      {/* Hero Video (local /public/hero.mp4) */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow">
          <video
            className="w-full h-full object-cover"
            src="/tank_v.mp4"      // place your file at public/hero.mp4
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </section>

       {/* Trusted Inspections Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto text-center">
              <div className="mb-12">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                  Industry Leading Excellence
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  <span className="text-blue-600">Trusted</span> Inspections
                  <span className="block text-gray-700 text-3xl md:text-4xl mt-2">Built on Decades of Expertise</span>
                </h2>
              </div>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                <div className="text-gray-700 text-xl leading-relaxed space-y-6">
                  <p className="text-2xl text-gray-900 font-semibold mb-6">
                    At Tank Inspection Services, we deliver safe, precise, and reliable inspection services for storage tanks, piping, and pressure vessels.
                  </p>
                  <p>
                    Our mission is simple: keep your assets compliant, safe, and efficient through work . we provide exceptional
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-semibold mx-1">API 653</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-semibold mx-1">API 570</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-semibold mx-1">API 510</span>
                    certified inspections, supported by advanced
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-semibold mx-1">Non-Destructive Testing (NDT)</span>
                    methods and a full range of inspection equipment to handle projects of any size or complexity.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="font-medium">Petroleum Sector</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="font-medium">Chemical Industry</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="font-medium">Industrial Facilities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         {/* Decades of Experience */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Experience</h2>
              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>
                 With more than 10 years of expertise, our team has been safeguarding critical infrastructure through reliable inspections, advanced engineering solutions, and strong management practices across multiple industries.
                </p>
                <p>
                  With broad technical knowledge, industry certifications, and state of the art equipment, we adapt to the changing needs of tank owners while upholding the highest standards of quality and safety.
                </p>
              </div>
            </div>
          </div>
        </section>

         {/* Decades of Experience - Enhanced */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/10 rounded-full"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 text-blue-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Proven Track Record
                </div>
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  <span className="block text-blue-400">10+ Years</span>
                  <span className="block text-3xl md:text-4xl text-gray-300 mt-4">of Industry Excellence</span>
                </h2>
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  More than 10 years safeguarding critical infrastructure.
                </p>
              </div>

              {/* Experience Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-500">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">10+</div>
                  <div className="text-xl font-semibold text-white mb-2">Years of Experience</div>
                  <div className="text-gray-300">Since 2011</div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-500">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">100+</div>
                  <div className="text-xl font-semibold text-white mb-2">Projects Completed</div>
                  <div className="text-gray-300">Across All Sectors</div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-500">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">99.8%</div>
                  <div className="text-xl font-semibold text-white mb-2">Safety Record</div>
                  <div className="text-gray-300">Zero Major Incidents</div>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-500">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">24/7</div>
                  <div className="text-xl font-semibold text-white mb-2">Emergency Response</div>
                  <div className="text-gray-300">Always Available</div>
                </div>
              </div>

              

                
              
            </div>
          </div>
        </section>
        {/* Trusted by Industry Leaders */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Industry Proven
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Trusted by <span className="text-blue-600">Industry Leaders</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Tank owners across the industry depend on us to protect their facilities and maintain compliance with the highest safety standards.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200 max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
                <div className="text-center group">
                  <div className="h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-lg">Vopak</span>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-lg">Chevron</span>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-lg">VTTI</span>
                  </div>
                </div>
                <div className="text-center group">
                  <div className="h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-lg">PetroPort</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">100+ Projects Completed</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">99.8% Safety Record</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">24/7 Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      



   
    </main>
  );
}
