"use client";

import { useLanguage } from "../../lib/LanguageContext";

export default function SafetyClient() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-red-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-orange-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <div className="inline-flex items-center bg-red-500/20 border border-red-400/30 text-red-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                </svg>
                {t.safetyFirst}
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                {t.safety}
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-red-100 leading-relaxed mb-8">
                  {t.safetyRecord} - {t.zeroMajorIncidents}. {t.safetyDrivesEverything}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Statistics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                {t.ourSafetyCommitment}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
                  <div className="text-5xl font-bold text-green-600 mb-4">99.8%</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.safetyRecord}</h3>
                  <p className="text-gray-700">{t.zeroMajorIncidents}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
                  <div className="text-5xl font-bold text-blue-600 mb-4">24/7</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.emergencyResponse}</h3>
                  <p className="text-gray-700">{t.alwaysAvailable}</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200">
                  <div className="text-5xl font-bold text-purple-600 mb-4">10+</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.yearsExperience}</h3>
                  <p className="text-gray-700">{t.provenSafetyExcellence}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t.safetyIsPriority}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t.safetyPriorityText}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                {t.getQuote}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}