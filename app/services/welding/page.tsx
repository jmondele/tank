"use client";
export default function WeldingQualifications() {
  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 text-blue-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                ASME Certified Excellence
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Welder
                <span className="block text-blue-400">Qualification</span>
              </h1>

              <div className="max-w-5xl mx-auto">
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  At Tank Inspection Services, we specialize in the qualification and certification of welders under the strict requirements of the ASME Section IX Code.
                </p>
                <p className="text-lg text-blue-200">
                  We do not perform welding services — our role is to ensure that welders are properly tested, qualified, and certified to industry standards before working on critical projects.
                </p>
              </div>
            </div>
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
