"use client";

import { useState } from 'react';
//import Image from 'next/image';//

export default function CaseStudies() {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Petrochemical Refinery - Hidden Corrosion Detection",
      client: "Major Caribbean Refinery",
      industry: "Petroleum Refining",
      challenge: "Routine API 653 inspection on 2.5M gallon crude oil storage tank revealed concerning readings",
      solution: "Advanced ultrasonic thickness testing with Olympus MX2 system revealed 40% wall thinning in critical areas",
      results: {
        moneySaved: "$3.2 Million",
        downtimeAvoided: "45 days",
        safetyImprovement: "Prevented catastrophic failure"
      },
      testimonial: "Tank Inspection Services found corrosion that three other companies missed. Their thoroughness saved us millions in cleanup costs and prevented a potential disaster.",
      clientRole: "Plant Manager",
      services: ["API 653", "Ultrasonic Testing", "NDT"],
      timeline: "3 days",
      image: "/api653-1.jpg"
    },
    {
      id: 2,
      title: "Chemical Plant - Emergency Pressure Vessel Assessment", 
      client: "Chemical Manufacturing Facility",
      industry: "Chemical Processing",
      challenge: "Emergency API 510 inspection after abnormal pressure readings during startup",
      solution: "Comprehensive pressure vessel inspection using phased array UT and magnetic particle testing",
      results: {
        moneySaved: "$1.8 Million",
        downtimeAvoided: "30 days", 
        safetyImprovement: "Identified critical weld defects"
      },
      testimonial: "When we called with an emergency, they were on-site within 4 hours. Their quick response and expert analysis got us back online safely.",
      clientRole: "Operations Director",
      services: ["API 510", "Phased Array UT", "Emergency Response"],
      timeline: "2 days",
      image: "/api510-1.jpg"
    },
    {
      id: 3,
      title: "Pipeline Terminal - Comprehensive Piping Assessment",
      client: "Pipeline Distribution Terminal", 
      industry: "Oil & Gas Distribution",
      challenge: "API 570 inspection of high-pressure piping systems showing signs of external corrosion",
      solution: "Complete piping inspection using advanced NDT methods and real-time monitoring",
      results: {
        moneySaved: "$950,000",
        downtimeAvoided: "14 days",
        safetyImprovement: "100% compliance achieved"
      },
      testimonial: "Professional, thorough, and they explain everything in terms we can understand. Their recommendations saved us significant money on unnecessary repairs.",
      clientRole: "Facility Engineer",
      services: ["API 570", "Piping Inspection", "Corrosion Assessment"],
      timeline: "5 days",
      image: "/api570-1.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 text-blue-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Real Results
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                <span className="text-blue-400">Case Studies</span>
                <span className="block text-white">Where We&apos;ve Prevented Disasters</span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  **Here&apos;s the proof** - real projects where our inspections saved companies millions of dollars and prevented catastrophic failures. These aren&apos;t made-up stories - these are actual cases where thorough inspection made the difference between normal operations and disaster.
                </p>
                <p className="text-lg text-blue-200">
                  Every case study represents lives protected, money saved, and operations kept running safely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Real Projects, Real Results</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Click on any case study below to see the full details of how our inspections prevented disasters and saved money.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {caseStudies.map((study, index) => (
                  <div
                    key={study.id}
                    className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                      activeCase === index 
                        ? 'bg-blue-600 text-white shadow-2xl scale-105' 
                        : 'bg-white text-gray-700 shadow-lg hover:shadow-xl'
                    }`}
                    onClick={() => setActiveCase(index)}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                        activeCase === index ? 'bg-white/20' : 'bg-blue-100'
                      }`}>
                        <svg className={`w-6 h-6 ${
                          activeCase === index ? 'text-white' : 'text-blue-600'
                        }`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                      <h3 className="font-bold text-lg">{study.industry}</h3>
                    </div>
                    <p className={`text-sm mb-4 ${activeCase === index ? 'text-blue-100' : 'text-gray-600'}`}>
                      {study.challenge.substring(0, 100)}...
                    </p>
                    <div className="flex justify-between items-center">
                      <span className={`text-2xl font-bold ${activeCase === index ? 'text-white' : 'text-green-600'}`}>
                        {study.results.moneySaved}
                      </span>
                      <span className={`text-sm ${activeCase === index ? 'text-blue-100' : 'text-gray-500'}`}>
                        Saved
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detailed Case Study */}
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mr-4">
                          Case Study #{caseStudies[activeCase].id}
                        </div>
                        <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {caseStudies[activeCase].timeline}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">
                        {caseStudies[activeCase].title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        <strong>Industry:</strong> {caseStudies[activeCase].industry}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-red-600 mb-3">The Challenge</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {caseStudies[activeCase].challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-blue-600 mb-3">Our Solution</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {caseStudies[activeCase].solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-green-600 mb-3">Services Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudies[activeCase].services.map((service, idx) => (
                            <span key={idx} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 mb-8">
                      <h4 className="text-2xl font-bold text-green-800 mb-6 text-center">Results Delivered</h4>
                      
                      <div className="grid grid-cols-1 gap-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-green-600 mb-2">
                            {caseStudies[activeCase].results.moneySaved}
                          </div>
                          <p className="text-green-700 font-semibold">Cost Savings</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            {caseStudies[activeCase].results.downtimeAvoided}
                          </div>
                          <p className="text-blue-700 font-semibold">Downtime Avoided</p>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange-600 mb-2">
                            {caseStudies[activeCase].results.safetyImprovement}
                          </div>
                          <p className="text-orange-700 font-semibold">Safety Impact</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-6">
                      <h4 className="text-xl font-bold text-gray-800 mb-4">Client Testimonial</h4>
                      <blockquote className="text-gray-700 italic leading-relaxed mb-4">
                        &quot;{caseStudies[activeCase].testimonial}&quot;
                      </blockquote>
                      <p className="text-sm text-gray-600">
                        — {caseStudies[activeCase].clientRole}, {caseStudies[activeCase].client}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want Results Like These?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              **These case studies represent real projects with real results.** Every inspection we perform has the potential to save you millions and prevent disasters. Don&apos;t wait for a failure to prove the value of proper inspection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:luismon@tankinspectionservices.com?subject=Case Study Discussion&body=Hello, I'd like to discuss how your inspection services could help prevent issues at our facility. Please contact me to schedule a consultation."
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
              >
                Get Your Free Consultation
              </a>
              <a 
                href="mailto:luismon@tankinspectionservices.com?subject=Emergency Inspection Request&body=We need emergency inspection services. Please contact me immediately."
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 inline-block"
              >
                Emergency Inspection
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}