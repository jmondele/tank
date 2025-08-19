"user-client"

export default function Certificates() {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 text-blue-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
                Industry Excellence
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Certificates &
                <span className="block text-blue-400">Accreditations</span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  At Tank Inspection Services, we take pride in holding the highest industry certifications to ensure our inspection services meet and exceed international standards.
                </p>
                <p className="text-lg text-blue-200">
                  Our team of certified professionals guarantees compliance, quality, and safety in every project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* API Certifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🔹</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">API Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">653</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">API 653</h3>
                    <p className="text-blue-700 text-lg font-semibold mb-4">Aboveground Storage Tank Inspection</p>
                    <p className="text-gray-700 leading-relaxed">
                      Certified for inspection, repair, alteration, and reconstruction of aboveground storage tanks built to API 650 or API 12C standards.
                    </p>
                    <div className="mt-6">
                      <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        Certified Inspector
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">570</span>
                    </div>
                    <h3 className="text-2xl font-bold text-green-800 mb-4">API 570</h3>
                    <p className="text-green-700 text-lg font-semibold mb-4">Piping Inspection</p>
                    <p className="text-gray-700 leading-relaxed">
                      Certified for inspection, repair, alteration, and rerating of metallic piping systems in refineries and chemical plants.
                    </p>
                    <div className="mt-6">
                      <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                        Certified Inspector
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">510</span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">API 510</h3>
                    <p className="text-purple-700 text-lg font-semibold mb-4">Pressure Vessel Inspection</p>
                    <p className="text-gray-700 leading-relaxed">
                      Certified for inspection, repair, alteration, and rerating of pressure vessels used in refining and chemical service.
                    </p>
                    <div className="mt-6">
                      <span className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                        Certified Inspector
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NDT Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🔹</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Non-Destructive Testing (NDT) Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ultrasonic Testing</h3>
                    <p className="text-blue-600 font-semibold mb-3">(UT)</p>
                    <p className="text-gray-600 text-sm">
                      High-frequency sound waves for thickness measurement and flaw detection
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Magnetic Particle Testing</h3>
                    <p className="text-red-600 font-semibold mb-3">(MT)</p>
                    <p className="text-gray-600 text-sm">
                      Magnetic field application to detect surface and near-surface discontinuities
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Liquid Penetrant Testing</h3>
                    <p className="text-green-600 font-semibold mb-3">(PT)</p>
                    <p className="text-gray-600 text-sm">
                      Liquid penetrant application to reveal surface-breaking defects
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Testing</h3>
                    <p className="text-yellow-600 font-semibold mb-3">(VT)</p>
                    <p className="text-gray-600 text-sm">
                      Direct visual examination for surface condition assessment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Accreditations */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🔹</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Other Accreditations</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border border-orange-200 shadow-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-orange-800 mb-4">OSHA Safety Training</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Comprehensive safety training certification ensuring workplace safety compliance and hazard prevention protocols.
                    </p>
                    <div className="mt-6">
                      <span className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                        Current Certification
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">ISO Certifications</h3>
                    <p className="text-gray-600 leading-relaxed">
                      [Add any ISO or regional certifications your company holds]
                    </p>
                    <div className="mt-6">
                      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                        Available Upon Request
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-700 mb-4">Industry Approvals</h3>
                    <p className="text-gray-600 leading-relaxed">
                      [Add local/national industry-specific approvals]
                    </p>
                    <div className="mt-6">
                      <span className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                        Contact for Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Benefits */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Why Our Certifications Matter
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                Our comprehensive certifications ensure that every inspection meets the highest standards of quality, safety, and regulatory compliance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Guaranteed Compliance</h3>
                  <p className="text-blue-100">
                    All inspections meet or exceed industry standards and regulatory requirements.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Professional Excellence</h3>
                  <p className="text-blue-100">
                    Certified professionals with proven expertise in their specialized fields.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Peace of Mind</h3>
                  <p className="text-blue-100">
                    Confidence that your assets are inspected by qualified, certified professionals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Work with Certified Professionals?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today to discuss your tank inspection needs with our certified team of experts.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Request Certification Details
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300">
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
