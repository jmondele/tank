"use client";

export default function SafetyProtocols() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-orange-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <div className="inline-flex items-center bg-orange-500/20 border border-orange-400/30 text-orange-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Safety First
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                <span className="text-orange-400">Safety Protocols</span>
                <span className="block text-white">That Actually Save Lives</span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-orange-100 leading-relaxed mb-8">
                  **I&apos;ve been to too many funerals.** Workers who died because someone skipped safety protocols to save time or money. That&apos;s why safety isn&apos;t just a policy here - it&apos;s the reason we exist. Every protocol we follow was written in someone else&apos;s blood.
                </p>
                <p className="text-lg text-orange-200">
                  **Zero shortcuts. Zero exceptions. Zero tolerance for &quot;it&apos;ll be fine this one time.&quot;** Because when it comes to industrial safety, there are no second chances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Philosophy */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 md:p-12 border border-red-200">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The Protocol That Saved My Life</h2>
                </div>
                
                <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                  <p>
                    **August 2016. Petrochemical plant in Texas.** I was inspecting a reactor vessel when my gas monitor started screaming. H2S levels spiked to lethal concentrations in seconds. My safety protocol - check atmosphere every 15 minutes, no exceptions - saved my life that day.
                  </p>
                  <p>
                    **The contractor working next to me didn&apos;t follow protocol.** He turned off his monitor because it was &quot;too noisy.&quot; Paramedics found him unconscious 20 minutes later. He survived, but barely.
                  </p>
                  <p>
                    **That&apos;s why our safety protocols aren&apos;t suggestions:**
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    <li>**Continuous atmospheric monitoring** - because gases don&apos;t announce themselves</li>
                    <li>**Buddy system** - no one works alone in confined spaces</li>
                    <li>**Equipment redundancy** - backup safety systems for critical operations</li>
                    <li>**Emergency response planning** - practiced scenarios, not just paperwork</li>
                  </ul>
                  <p>
                    Our <a href="/equipment" className="text-blue-600 hover:text-blue-800 underline">professional inspection equipment</a> includes the latest safety monitoring technology. Because the best inspection in the world means nothing if someone gets hurt doing it.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-block bg-white rounded-2xl p-8 shadow-lg border border-red-200">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">&quot;Safety First, Quality Always&quot;</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      We enforce a <strong>zero-incident culture</strong> on every project. Every inspection and qualification is carried out with the highest standards of care, compliance, and responsibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Protocols */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Safety Protocols</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive safety measures that protect our team, clients, and the environment
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* ISO-Certified Safety Training */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7.5L21 9ZM3 9L9 7.5V5.5L3 7V9ZM12 8C14.7 8 17 9.79 17 12V20H7V12C7 9.79 9.3 8 12 8Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-800 mb-3">ISO-Certified Safety Training</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        All personnel are trained under internationally recognized ISO standards, ensuring consistent and world-class safety practices across all operations.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Job Safety Analysis */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 11H7V13H9V11M13 11H11V13H13V11M17 11H15V13H17V11M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V8H19V19Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-green-800 mb-3">Job Safety Analysis (JSA)</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Comprehensive risk assessments are conducted before each task to identify potential hazards and implement preventive measures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Personal Protective Equipment */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-800 mb-3">Personal Protective Equipment (PPE)</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Mandatory use of certified PPE on every job site, including hard hats, safety glasses, protective clothing, and specialized equipment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Permit-to-Work System */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-orange-800 mb-3">Permit-to-Work System</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Ensures only qualified and authorized staff perform critical tasks, with proper documentation and approval processes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Emergency Preparedness */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2M13 17H11V15H13V17M13 13H11V7H13V13Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-red-800 mb-3">Emergency Preparedness</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Comprehensive response plans and regular drills for incidents or hazardous situations to ensure rapid and effective emergency response.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Continuous Monitoring */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-teal-800 mb-3">Continuous Monitoring</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Safety performance is tracked, reported, and improved regularly through comprehensive monitoring and feedback systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Certifications */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Safety Certifications & Standards</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our commitment to excellence is backed by internationally recognized certifications
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 12L20.56 9.22L20.9 5.54L17.29 4.72L15.4 1.54L12 3L8.6 1.54L6.71 4.72L3.1 5.53L3.44 9.21L1 12L3.44 14.78L3.1 18.47L6.71 19.29L8.6 22.47L12 21L15.4 22.46L17.29 19.28L20.9 18.46L20.56 14.78L23 12M10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">ISO Standards</h3>
                  <p className="text-gray-300">Certified under international ISO safety management systems</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12L11 14L15 10M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Zero Incidents</h3>
                  <p className="text-gray-300">Maintained zero-incident record through rigorous safety protocols</p>
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-colors duration-300 text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5V7.5L21 9ZM3 9L9 7.5V5.5L3 7V9ZM12 8C14.7 8 17 9.79 17 12V20H7V12C7 9.79 9.3 8 12 8Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Trained Personnel</h3>
                  <p className="text-gray-300">All team members certified in safety procedures and protocols</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Safety Information */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Questions About Our Safety Protocols?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Our safety team is available to discuss our protocols, certifications, and how we ensure the highest level of safety on your projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:luismon@tankinspectionservices.com?subject=Safety Protocols Inquiry&body=Hello, I would like to learn more about your safety protocols and certifications. Please provide additional information."
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
                >
                  Contact Safety Team
                </a>
                <a 
                  href="tel:+50766163164"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 inline-block"
                >
                  Call: +507 6616 3164
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}