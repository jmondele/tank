import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Expert Industrial Inspectors",
  description: "Learn about Tank Inspection Services, our team of certified inspectors, and our commitment to safety and excellence in industrial tank inspections.",
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 text-blue-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                Our Story
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                About
                <span className="block text-blue-400">Us</span>
              </h1>

              <div className="max-w-5xl mx-auto">
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  At Tank Inspection Services, we specialize in providing comprehensive inspection services for aboveground storage tanks, piping systems, and pressure vessels.
                </p>
                <p className="text-lg text-blue-200 mb-8">
                  Our expertise covers <Link href="/services/api653" className="text-blue-300 hover:text-blue-100 underline font-semibold">API 653</Link>, <Link href="/services/api570" className="text-blue-300 hover:text-blue-100 underline font-semibold">API 570</Link>, <Link href="/services/api510" className="text-blue-300 hover:text-blue-100 underline font-semibold">API 510</Link> <Link href="/certificates" className="text-blue-300 hover:text-blue-100 underline font-semibold">certified inspections</Link>, supported by advanced <Link href="/services/NDT" className="text-blue-300 hover:text-blue-100 underline font-semibold">Non-Destructive Testing (NDT)</Link> methods and <Link href="/services/welding" className="text-blue-300 hover:text-blue-100 underline font-semibold">welder qualification services</Link>.
                </p>
                <p className="text-lg text-blue-200">
                  With over a decade of experience, our mission is to help industries safeguard critical infrastructure, maintain compliance, and operate with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who We Are</h2>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-12 border border-blue-200 shadow-xl mb-12">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                  <div className="lg:w-1/3">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <h3 className="text-2xl font-bold text-blue-800 mb-6">Certified Professionals</h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      A team of certified professionals with backgrounds in inspection, engineering, and project management. We combine technical expertise with hands-on field experience to deliver results that matter.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-white rounded-xl p-4 border border-blue-200">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900">Inspection</h4>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 border border-blue-200">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19.5 12.5L12 3L4.5 12.5H7V21h10v-8.5h2.5z"/>
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900">Engineering</h4>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-4 border border-blue-200">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                          </div>
                          <h4 className="font-semibold text-gray-900">Management</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Photo Section */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h3>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Our dedicated professionals bring decades of combined experience in tank inspection, NDT services, and asset integrity management.
                  </p>
                </div>
                
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image 
                    src="/team-3.jpg" 
                    alt="Tank Inspection Services Team" 
                    width={800}
                    height={400}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 600px) 100vw, (max-width: 600px) 80vw, 1200px"
                  />
                  
                 
                  
                  {/* Overlay with team member count */}
                  <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="flex items-center space-x-2 text-white">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <span className="font-semibold">Expert Inspection Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What We Do</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">653</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">API 653</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Tank inspections, repairs, and compliance for aboveground storage tanks.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">570</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">API 570</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Piping system inspections and fitness-for-service evaluations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-xl">510</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">API 510</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Pressure vessel inspections and life extension assessments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.5 12.5L12 3L4.5 12.5H7V21h10v-8.5h2.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">NDT Services</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Ultrasonic, Magnetic Particle, Liquid Penetrant, and Visual Testing.
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
            </div>
          </div>
        </section>

        {/* Our Difference */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Difference</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Fully Certified</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Fully certified and equipped for all inspection needs with industry-leading credentials.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Proven Solutions</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Reliable, innovative, and cost-effective solutions tailored to your specific needs.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Client Commitment</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Strong commitment to safety, compliance, and client satisfaction in every project.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Promise */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">

                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Promise</h2>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Your Trusted Partner</h3>

                  <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto mb-8">
                    We are more than inspectors—we are your trusted partner in asset integrity management, helping you operate safely, efficiently, and in full compliance with industry standards.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Safety First</h4>
                      <p className="text-blue-200">Operating with the highest safety standards</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.5 12.5L12 3L4.5 12.5H7V21h10v-8.5h2.5z"/>
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Efficiency</h4>
                      <p className="text-blue-200">Maximizing your operational efficiency</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Compliance</h4>
                      <p className="text-blue-200">Full compliance with industry standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Why Choose Tank Inspection Services
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">10+</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Years Experience</div>
                  <div className="text-gray-600">Proven industry expertise</div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-4">100%</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Certified Team</div>
                  <div className="text-gray-600">API certified professionals</div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">500+</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Projects</div>
                  <div className="text-gray-600">Successfully completed</div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
                  <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-4">24/7</div>
                  <div className="text-xl font-semibold text-gray-900 mb-2">Support</div>
                  <div className="text-gray-600">Always available for you</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our History & Evolution
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Since our founding, Tank Inspection Services has grown from a small specialized team into a leading provider of comprehensive inspection services, building our reputation through consistent quality, innovation, and unwavering commitment to safety.
                </p>
              </div>

              <div className="space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Foundation & Early Years</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Tank Inspection Services was established with a clear mission: to provide the highest quality inspection services for industrial assets while maintaining uncompromising safety standards. Our founders, with extensive backgrounds in petroleum engineering and asset integrity management, recognized the critical need for specialized inspection services in the growing industrial sector.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      From our early days, we focused on building a team of certified professionals and investing in cutting-edge inspection technologies. This foundation has enabled us to consistently deliver reliable, accurate, and timely inspection services that our clients depend on for their most critical assets.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
                    <div className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">2011</div>
                        <div className="text-gray-700 font-medium">Company Founded</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-green-600 mb-2">First</div>
                        <div className="text-gray-700 font-medium">API Certifications</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                        <div className="text-gray-700 font-medium">Initial Projects</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                          <div className="text-gray-700 font-medium">Projects Completed</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                          <div className="text-gray-700 font-medium">Major Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-purple-600 mb-2">99.8%</div>
                          <div className="text-gray-700 font-medium">Safety Record</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Growth & Innovation</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      As the industrial landscape evolved, so did we. We expanded our service offerings to include <Link href="/services/NDT" className="text-blue-600 hover:text-blue-800 underline">advanced non-destructive testing methods</Link>, invested in state-of-the-art <Link href="/equipment" className="text-blue-600 hover:text-blue-800 underline">inspection equipment</Link>, and developed specialized expertise in various industry sectors including petroleum refining, chemical processing, and power generation.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our commitment to continuous improvement has led us to adopt new technologies such as <Link href="/services/NDT" className="text-blue-600 hover:text-blue-800 underline">phased array ultrasonic testing</Link>, advanced digital radiography, and comprehensive data management systems. This technological advancement, combined with our <Link href="/certificates" className="text-blue-600 hover:text-blue-800 underline">certified team</Link>, allows us to provide more accurate, efficient, and comprehensive <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">inspection services</Link> than ever before.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Industry Expertise & Experience
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Our extensive experience across multiple industries gives us unique insights into the specific challenges and requirements of different sectors. We understand that each industry has its own regulatory landscape, operational constraints, and risk profiles.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Petroleum Refining</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Comprehensive inspection services for crude oil processing facilities, including distillation units, hydrotreating systems, catalytic crackers, and associated storage infrastructure. Our expertise covers both upstream and downstream operations.
                  </p>
                  <div className="text-sm text-blue-600 font-semibold">
                    • Crude Oil Storage Tanks • Process Vessels • Heat Exchangers • Piping Systems
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Chemical Processing</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Specialized inspection services for chemical manufacturing facilities, including reactors, distillation columns, storage tanks, and transfer systems. We understand the unique challenges of handling corrosive and hazardous chemicals.
                  </p>
                  <div className="text-sm text-green-600 font-semibold">
                    • Chemical Storage Tanks • Reactor Vessels • Distillation Systems • Transfer Lines
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Power Generation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Inspection services for power plants including boiler systems, fuel storage tanks, cooling systems, and auxiliary equipment. Our services support both traditional fossil fuel and renewable energy facilities.
                  </p>
                  <div className="text-sm text-purple-600 font-semibold">
                    • Boiler Systems • Fuel Storage • Cooling Towers • Steam Systems
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.5 12.5L12 3L4.5 12.5H7V21h10v-8.5h2.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Terminal Operations</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Comprehensive inspection services for petroleum and chemical terminal facilities, including bulk storage tanks, loading systems, pipeline infrastructure, and marine terminal equipment.
                  </p>
                  <div className="text-sm text-orange-600 font-semibold">
                    • Bulk Storage Tanks • Loading Systems • Marine Equipment • Pipeline Infrastructure
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Inspection services for manufacturing facilities across various sectors, including process equipment, storage systems, and support infrastructure. We adapt our services to meet the specific needs of different manufacturing processes.
                  </p>
                  <div className="text-sm text-red-600 font-semibold">
                    • Process Equipment • Storage Systems • Support Infrastructure • Quality Systems
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                  <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Specialty Services</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Customized inspection solutions for unique applications and specialized equipment. Our team works closely with clients to develop tailored inspection programs that address specific operational requirements and regulatory compliance needs.
                  </p>
                  <div className="text-sm text-teal-600 font-semibold">
                    • Custom Solutions • Specialized Equipment • Unique Applications • Regulatory Compliance
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Cross-Industry Excellence</h3>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                    Our diverse industry experience allows us to bring best practices and innovative solutions from one sector to another. This cross-pollination of ideas and approaches has consistently delivered superior results for our clients, helping them achieve higher levels of safety, efficiency, and compliance.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                    Whether you operate a single facility or manage a complex network of industrial assets, our team has the knowledge, experience, and resources to support your inspection and asset integrity needs. We pride ourselves on being more than just service providers—we are trusted partners in your operational success.
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
                Ready to Partner with Industry Experts?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Contact us today to discuss how we can help safeguard your critical infrastructure and maintain compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block">
                  Start Your Project
                </Link>
                <Link href="/certificates" className="bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 inline-block">
                  View Our Certifications
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>


    </div>
  );
}