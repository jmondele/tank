"use client";

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

                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">570</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">API 570</h3>
                    <p className="text-blue-700 text-lg font-semibold mb-4">Piping Inspection</p>
                    <p className="text-gray-700 leading-relaxed">
                      Certified for inspection, repair, alteration, and rerating of metallic piping systems in refineries and chemical plants.
                    </p>
                    <div className="mt-6">
                      <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        Certified Inspector
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">510</span>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">API 510</h3>
                    <p className="text-blue-700 text-lg font-semibold mb-4">Pressure Vessel Inspection</p>
                    <p className="text-gray-700 leading-relaxed">
                      Certified for inspection, repair, alteration, and rerating of pressure vessels used in refining and chemical service.
                    </p>
                    <div className="mt-6">
                      <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        Certified Inspector
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ISO Certifications & Maritime License */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">ISO Certifications & Maritime License</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* ISO Certificate */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-200">
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Valid
                      </span>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-blue-800 mb-2">ISO/IEC 17020:2014</h3>
                      <p className="text-blue-700 font-semibold text-sm">Inspection Body Type A</p>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Authority:</span>
                        <span className="text-blue-800">CNA Panama</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Code:</span>
                        <span className="text-blue-800">OI-050</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Issued:</span>
                        <span className="text-blue-800">Oct 7, 2016</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Renewal:</span>
                        <span className="text-blue-800">Jul 22, 2025</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-blue-200 space-y-2">
                      <button 
                        onClick={() => window.open('/isoo.pdf', '_blank')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd"/>
                        </svg>
                        <span>View Certificate</span>
                      </button>
                      <a 
                        href="/isoo.pdf" 
                        download="ISO-17020-Certificate.pdf"
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Maritime Operations License */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-200">
                  <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-200">
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Active
                      </span>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H2M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.001"/>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-blue-800 mb-2">Maritime Operations</h3>
                      <p className="text-blue-700 font-semibold text-sm">LICENCIA DE OPERACIÓN</p>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Authority:</span>
                        <span className="text-blue-800">AMP Panama</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">License:</span>
                        <span className="text-blue-800">03299</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Issued:</span>
                        <span className="text-blue-800">Jul 16, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">Expires:</span>
                        <span className="text-blue-800">Jul 15, 2034</span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-blue-200 space-y-2">
                      <button 
                        onClick={() => window.open('/maritime-license.pdf', '_blank')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd"/>
                        </svg>
                        <span>View License</span>
                      </button>
                      <a 
                        href="/maritime-license.pdf" 
                        download="Maritime-Operations-License.pdf"
                        className="w-full bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                        <span>Download PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Information */}
              <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl border border-blue-200">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Combined Accreditation Coverage</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                      ISO/IEC 17020:2014 Scope
                    </h5>
                    <ul className="text-gray-700 space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Independent inspection body Type A certification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Storage tanks and pressure vessels inspection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Non-destructive testing services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Piping system inspections</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H2M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6.001"/>
                      </svg>
                      Maritime Operations License
                    </h5>
                    <ul className="text-gray-700 space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Port installation repairs and maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Maritime facility remodeling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Port infrastructure restructuring</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>National-level maritime operations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Certificate Verification */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h6 className="font-semibold text-blue-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      ISO Certificate Verification
                    </h6>
                    <p className="text-blue-700 text-sm mb-3">
                      Verify through CNA Panama website or contact us directly
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Website:</strong> www.cna.gob.pa</p>
                      <p><strong>Certificate Code:</strong> OI-050</p>
                      <p><strong>Company:</strong> Tank Inspection Services</p>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h6 className="font-semibold text-green-800 mb-3 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Maritime License Verification
                    </h6>
                    <p className="text-green-700 text-sm mb-3">
                      Verify through AMP Panama or contact our office
                    </p>
                    <div className="text-xs space-y-1">
                      <p><strong>Authority:</strong> Autoridad Marítima de Panamá</p>
                      <p><strong>License Number:</strong> 03299</p>
                      <p><strong>Valid Until:</strong> July 15, 2034</p>
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

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Non-Destructive Testing (NDT) Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.091 3.09z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ultrasonic Testing</h3>
                    <p className="text-blue-600 font-semibold mb-3">(UT)</p>
                    <p className="text-gray-600 text-sm">
                      High-frequency sound waves for thickness measurement and flaw detection
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.953l-7.108 4.061A1.125 1.125 0 013 16.811z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Magnetic Particle Testing</h3>
                    <p className="text-blue-600 font-semibold mb-3">(MT)</p>
                    <p className="text-gray-600 text-sm">
                      Magnetic field application to detect surface and near-surface discontinuities
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 3a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3H6zM14.25 9a.75.75 0 01.75.75v4.5a.75.75 0 01-.75.75h-4.5A.75.75 0 019 14.25v-4.5A.75.75 0 019.75 9h4.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Liquid Penetrant Testing</h3>
                    <p className="text-blue-600 font-semibold mb-3">(PT)</p>
                    <p className="text-gray-600 text-sm">
                      Liquid penetrant application to reveal surface-breaking defects
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Testing</h3>
                    <p className="text-blue-600 font-semibold mb-3">(VT)</p>
                    <p className="text-gray-600 text-sm">
                      Direct visual examination for surface condition assessment
                    </p>
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
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                <a 
                  href="mailto:luismon@tankinspectionservices.com?subject=Certificate Verification Request&body=Hello, I would like to verify your certifications and discuss our inspection requirements. Please contact me with more information about your qualifications."
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
                >
                  Request Certificate Details
                </a>
                <a 
                  href="mailto:luismon@tankinspectionservices.com?subject=Inspection Services Inquiry&body=Hello, I would like to speak with your certified experts about our inspection needs. Please contact me at your earliest convenience."
                  className="bg-gray-600 hover:bg-gray-700 text-white border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl inline-block"
                >
                  Contact Our Experts
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}