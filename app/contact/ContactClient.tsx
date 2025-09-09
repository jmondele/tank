"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function ContactClient() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 text-green-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="m18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                {t.getInTouch}
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                {t.contactUs}
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-green-100 leading-relaxed mb-8">
                  {t.contactIntro}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get in Touch */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.getInTouch}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="m18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600">{t.email}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700"><strong>{t.generalInquiries}:</strong></p>
                        <a href="mailto:luismon@tankinspectionservices.com" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                          luismon@tankinspectionservices.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <p className="text-gray-700"><strong>{t.quoteRequests}:</strong></p>
                        <a href="mailto:luismon@tankinspectionservices.com?subject=Quote Request" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                          {t.requestAQuote}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Emergency Services */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border border-red-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-red-600">{t.emergencyResponse}</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">{t.rapidResponse}</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">{t.rapidResponse}</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-gray-700">{t.emergencyLeakDetection}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services We Provide */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.howWeCanHelp}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">653</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t.api653Title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t.api653Description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{t.tankInspection}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{t.shellAssessment}</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{t.floorEvaluation}</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">570</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t.api570Title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t.api570Description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{t.pipingSystems}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{t.corrosionAssessment}</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{t.fitnessForService}</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">510</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t.api510Title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t.api510Description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">{t.pressureVessels}</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">{t.lifeExtension}</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">{t.safetyAssessment}</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.5 12.5L12 3L4.5 12.5H7V21h10v-8.5h2.5z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t.ndtTitle}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {t.ndtDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">UT</span>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">MT</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">PT</span>
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">VT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.whyChooseOurServices}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4">{t.fullyCertified}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t.fullyCertifiedText}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">{t.fastResponse}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t.fastResponseText}
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-purple-800 mb-4">{t.expertTeam}</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {t.expertTeamText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">{t.readyToGetStarted}</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-12">
                {t.readyToGetStartedText}
              </p>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">{t.quickContactOptions}:</h4>
                    <div className="space-y-3">
                      <a 
                        href="mailto:luismon@tankinspectionservices.com?subject=General Inquiry&body=Hello, I would like to learn more about your inspection services."
                        className="flex items-center text-blue-200 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="m18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        {t.generalQuestions}
                      </a>
                      <a 
                        href="mailto:luismon@tankinspectionservices.com?subject=Quote Request&body=Hello, I would like to request a quote for inspection services. Please contact me with details about my project."
                        className="flex items-center text-blue-200 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        {t.requestQuote}
                      </a>
                      <a 
                        href="mailto:luismon@tankinspectionservices.com?subject=Emergency Service Request&body=Hello, I have an urgent inspection need. Please contact me immediately."
                        className="flex items-center text-red-200 hover:text-white transition-colors"
                      >
                        <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                        </svg>
                        {t.emergencyServices}
                      </a>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">{t.serviceAreasInclude}:</h4>
                    <div className="grid grid-cols-2 gap-2 text-blue-200">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-sm">{t.tankInspections}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-sm">{t.pipingSystems}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-sm">{t.pressureVessels}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-sm">{t.ndtTesting}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-sm">{t.weldingQualification}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        <span className="text-sm">{t.emergencyResponse}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:luismon@tankinspectionservices.com?subject=Service Quote Request&body=Hello, I would like to request a free quote for inspection services. Please contact me with more information."
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
                >
                  {t.getQuote}
                </a>
                <a 
                  href="mailto:luismon@tankinspectionservices.com?subject=Expert Consultation&body=Hello, I would like to speak with your experts about our inspection needs. Please contact me at your earliest convenience."
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm inline-block"
                >
                  {t.contactExperts}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}