import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety - 99.8% Safety Record",
  description: "Our commitment to safety in tank inspections and industrial operations. Learn about our safety protocols, training, and 99.8% safety record.",
};

export default function Safety() {
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
                Safety First, Always
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Safety
                <span className="block text-orange-400">Commitment</span>
              </h1>

              <div className="max-w-5xl mx-auto">
                <p className="text-xl text-red-100 leading-relaxed mb-8">
                  At Tank Inspection Services, safety is at the core of everything we do. Our inspection services are built on the principle of protecting people, the environment, and critical infrastructure.
                </p>
                <p className="text-lg text-red-200">
                  We maintain strict adherence to industry standards, OSHA regulations, and company-specific safety protocols to ensure that every project is executed responsibly and without compromise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Safety Practices */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Safety Practices</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">OSHA Safety Training</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Comprehensive OSHA safety training for all personnel, ensuring adherence to workplace safety standards.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">Standards Compliance</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Strict compliance with API, ANSI, and ASME standards in all inspection procedures and protocols.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">Certified PPE</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Use of certified PPE and safety equipment on every site, ensuring maximum protection for all personnel.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">Risk Assessment</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Job Safety Analysis (JSA) and comprehensive risk assessments before each inspection project.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border border-red-200 shadow-lg hover:shadow-xl transition-all duration-300 group md:col-span-2 lg:col-span-1">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">Emergency Preparedness</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Emergency preparedness and response protocols, ensuring rapid response to any safety incidents.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Safety Matters */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Safety Matters</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">People Protection</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Protects workers, communities, and the environment from potential hazards and unsafe conditions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Incident Prevention</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Prevents accidents, leaks, and costly incidents that could impact operations and the environment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Trust</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Builds trust and confidence with our clients through demonstrated commitment to safety excellence.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Compliance</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Ensures compliance with regulatory authorities and maintains industry-required safety standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-orange-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-red-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-orange-300/20 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Promise</h2>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Zero-Incident Culture</h3>

                  <p className="text-xl text-red-100 leading-relaxed max-w-4xl mx-auto mb-8">
                    We commit to a zero-incident culture by combining training, technology, and vigilance. Every inspection is carried out with safety first, quality always.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Training</h4>
                      <p className="text-red-200">Continuous education and certification of our personnel</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.5 12.5L12 3L4.5 12.5H7V21h10v-8.5h2.5z"/>
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Technology</h4>
                      <p className="text-red-200">State-of-the-art safety equipment and monitoring systems</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Vigilance</h4>
                      <p className="text-red-200">Constant awareness and proactive safety monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Statistics */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Our Safety Track Record
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-green-200">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-4">99.8%</div>
                  <div className="text-xl font-semibold text-green-800 mb-2">Safety Record</div>
                  <div className="text-green-700">Zero major incidents</div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">10+</div>
                  <div className="text-xl font-semibold text-blue-800 mb-2">Years Experience</div>
                  <div className="text-blue-700">Without major accidents</div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border border-orange-200">
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">24/7</div>
                  <div className="text-xl font-semibold text-orange-800 mb-2">Emergency Response</div>
                  <div className="text-orange-700">Always available</div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">100%</div>
                  <div className="text-xl font-semibold text-purple-800 mb-2">OSHA Compliance</div>
                  <div className="text-purple-700">All personnel certified</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safe Services We Provide */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Safety-First Inspection Services</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  All our inspection services follow the same rigorous safety standards and protocols
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link href="/services/api653" className="group bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">653</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">API 653</h3>
                  <p className="text-sm text-gray-600">Tank Inspections</p>
                </Link>

                <Link href="/services/api570" className="group bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">570</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">API 570</h3>
                  <p className="text-sm text-gray-600">Piping Inspections</p>
                </Link>

                <Link href="/services/api510" className="group bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold">510</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">API 510</h3>
                  <p className="text-sm text-gray-600">Pressure Vessels</p>
                </Link>

                <Link href="/services/NDT" className="group bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.5 12.5L12 3L4.5 12.5H7V21h10v-8.5h2.5z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">NDT</h3>
                  <p className="text-sm text-gray-600">Non-Destructive Testing</p>
                </Link>
              </div>

              <div className="text-center mt-12">
                <p className="text-gray-600 mb-6">
                  Want to know more about our company? Learn about <Link href="/about" className="text-red-600 hover:text-red-800 font-semibold underline">our team and experience</Link> or <Link href="/contact" className="text-red-600 hover:text-red-800 font-semibold underline">contact us directly</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Philosophy & Commitment */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Safety Philosophy: Beyond Compliance
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  At Tank Inspection Services, safety isn&apos;t just a requirement—it&apos;s a core value that drives every decision we make. Our commitment to safety excellence extends far beyond regulatory compliance to create a comprehensive safety culture that protects our people, our clients, and the environment.
                </p>
              </div>

              <div className="space-y-12">
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 md:p-12 border border-red-200">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">Leadership in Safety Excellence</h3>
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Our safety leadership begins with management commitment and extends through every level of our organization. We believe that true safety excellence requires active participation from everyone, from senior management to field technicians. This top-down, bottom-up approach ensures that safety considerations are integrated into every aspect of our operations.
                    </p>
                    <p>
                      We regularly benchmark our safety performance against industry leaders and continuously seek opportunities to improve our systems, procedures, and training programs. Our goal is not just to meet safety standards, but to exceed them and set new benchmarks for excellence in industrial inspection services.
                    </p>
                    <p>
                      Our safety management system includes comprehensive incident investigation procedures, root cause analysis methodologies, and corrective action tracking to ensure that any safety-related events become opportunities for system-wide improvement. This proactive approach has been instrumental in maintaining our exceptional safety record over more than a decade of operations.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Client Partnership in Safety</h4>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      We work closely with our clients to understand and integrate with their safety management systems. This collaborative approach ensures seamless coordination of safety protocols, emergency response procedures, and communication systems throughout the duration of our projects.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our team participates in client safety orientations, adheres to site-specific safety requirements, and contributes to safety meetings and discussions. This integration helps create a unified safety culture that benefits everyone involved in the project.
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Innovation in Safety Technology</h4>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      We continuously invest in the latest safety technologies and equipment to enhance protection for our personnel and improve the effectiveness of our safety programs. This includes advanced gas detection systems, real-time monitoring equipment, and innovative personal protective equipment.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our commitment to technological innovation extends to digital safety management tools, mobile safety reporting applications, and data analytics systems that help us identify trends and proactively address potential safety concerns before they become incidents.
                    </p>
                  </div>
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
                Ready to Work with Safety-First Professionals?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today to learn more about our comprehensive safety protocols and zero-incident commitment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block">
                  Discuss Safety Requirements
                </Link>
                <Link href="/certificates" className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 inline-block">
                  View Safety Protocols
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
