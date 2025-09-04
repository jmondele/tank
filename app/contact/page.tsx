"use client";

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as keyof typeof formData]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create email content
    const subject = `New Contact Form Submission - ${formData.service || 'General Inquiry'}`;
    const body = `
New contact form submission from your website:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}

---
This message was sent from the contact form on tankinspectionservices.com
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:luismon@tankinspectionservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

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
                Get In Touch
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Let&apos;s Talk About Your
                <span className="block text-green-400">Inspection Needs</span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-green-100 leading-relaxed mb-8">
                  **Here&apos;s the deal** - I&apos;m not going to waste your time with a sales pitch. You know what you need: reliable inspections that actually protect your assets and keep you compliant. Let&apos;s have a real conversation about how we can help.
                </p>
                <p className="text-lg text-green-200">
                  Whether you need **API 653 tank inspection**, **API 570 piping assessment**, **API 510 pressure vessel evaluation**, or comprehensive **NDT services** - I&apos;ll personally make sure you get straight answers and honest recommendations.
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
                <div className="w-8 h-8 ">
                  <span className="text-white font-bold"></span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-blue-800 mb-3">Office Address</h3>
                        <p className="text-gray-700 text-lg">
                          Panama City, Panama
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border border-blue-200 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-green-800 mb-3">Phone</h3>
                        <p className="text-gray-700 text-lg">
                          <a href="tel:+50766163164" className="hover:text-green-600 transition-colors">
                            +507 6616 3164
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="m18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-purple-800 mb-3">Email</h3>
                        <p className="text-gray-700 text-lg">
                          <a href="mailto:luismon@tankinspectionservices.com" className="hover:text-purple-600 transition-colors">
                            luismon@tankinspectionservices.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 border border-orange-200 shadow-lg">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-orange-800 mb-3">Website</h3>
                        <p className="text-gray-700 text-lg">
                          <a href="https://tankinspectionservices.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                            tankinspectionservices.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+507 1234 5678"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="API 653 - Tank Inspection">API 653 - Tank Inspection</option>
                        <option value="API 570 - Piping Inspection">API 570 - Piping Inspection</option>
                        <option value="API 510 - Pressure Vessel Inspection">API 510 - Pressure Vessel Inspection</option>
                        <option value="NDT Services">NDT Services</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Tell us about your project and inspection needs..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <div className="w-8 h-8 ">
                  <span className="text-white font-bold"></span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Business Hours</h2>
              </div>

              <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Monday – Friday</h3>
                    <p className="text-lg text-gray-700 mb-2">8:00 AM – 6:00 PM</p>
                    <p className="text-sm text-gray-600">Regular business hours</p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Saturday</h3>
                    <p className="text-lg text-gray-700 mb-2">By appointment</p>
                    <p className="text-sm text-gray-600">Contact us to schedule</p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Sunday</h3>
                    <p className="text-lg text-gray-700 mb-2">Closed</p>
                    <p className="text-sm text-gray-600">Emergency contact available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Request a Quote */}
        <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-green-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 bg-blue-300/20 rounded-full blur-2xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-start space-x-4 mb-12">
                <div className="w-8 h-8 ">
                  <span className="text-white font-bold"></span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Request a Quote</h2>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 border border-white/20">
                <div className="text-center">
                  <div className=" from-green-400 to-green-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                    
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Get Your Custom Quote</h3>

                  <p className="text-xl text-green-100 leading-relaxed max-w-4xl mx-auto mb-8">
                    Looking for inspection services? Send us your project details and our team will provide a customized quote tailored to your needs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">653</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">Tank Inspections</h4>
                      <p className="text-white-200 text-sm">API 653 certified</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">570</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">Piping Systems</h4>
                      <p className="text-white-200 text-sm">API 570 certified</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold">510</span>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">Pressure Vessels</h4>
                      <p className="text-white-200 text-sm">API 510 certified</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                      <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.5 12.5L12 3L4.5 12.5H7V21h10v-8.5h2.5z"/>
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">NDT Services</h4>
                      <p className="text-white-200 text-sm">All methods available</p>
                    </div>
                  </div>

                  <div className="mt-12">
                    <a 
                      href="mailto:luismon@tankinspectionservices.com?subject=Quote Request&body=Hello, I would like to request a quote for inspection services. Please contact me with more information about your services and pricing."
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl mr-4 inline-block"
                    >
                      Request Quote Now
                    </a>
                    <a 
                      href="tel:+50766163164"
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm inline-block"
                    >
                      Call Us Directly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-red-800 mb-4">Emergency Inspection Services</h2>
                <p className="text-red-700 mb-6">
                  Need urgent tank inspection services? We provide emergency response for critical situations.
                </p>
                <a href="tel:+50766163164" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block">
                  Call Emergency Line: +507 6616 3164
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}