"use client";

import { useState } from 'react';

export default function Quote() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    serviceType: '',
    assetType: '',
    assetSize: '',
    location: '',
    urgency: '',
    currentIssues: '',
    lastInspection: '',
    additionalServices: [] as string[],
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as keyof typeof formData]: value
    }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Inspection Quote Request - ${formData.serviceType} - ${formData.company}`;
    const body = `
INSPECTION QUOTE REQUEST
========================

CONTACT INFORMATION:
- Name: ${formData.firstName} ${formData.lastName}
- Company: ${formData.company}
- Email: ${formData.email}
- Phone: ${formData.phone}

ASSET DETAILS:
- Service Type: ${formData.serviceType}
- Asset Type: ${formData.assetType}
- Asset Size: ${formData.assetSize}
- Location: ${formData.location}

PROJECT DETAILS:
- Urgency: ${formData.urgency}
- Last Inspection: ${formData.lastInspection}
- Current Issues: ${formData.currentIssues || 'None reported'}

ADDITIONAL SERVICES:
${formData.additionalServices.length > 0 ? formData.additionalServices.join(', ') : 'None selected'}

ADDITIONAL INFORMATION:
${formData.message || 'None provided'}

---
Quote request submitted from tankinspectionservices.com
Please respond within 24 hours for standard requests, immediately for emergency requests.
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
        <section className="py-24 bg-gradient-to-br from-green-900 via-green-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-green-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <div className="inline-flex items-center bg-green-500/20 border border-green-400/30 text-green-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Free Quote Request
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Get Your
                <span className="block text-green-400">Free Quote</span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-green-100 leading-relaxed mb-8">
                  **No games, no sales pitches** - just honest pricing for professional inspection services. Fill out the form below and I&apos;ll personally review your requirements and get back to you within 24 hours with a detailed quote.
                </p>
                <p className="text-lg text-green-200">
                  **Emergency inspections?** Call me directly at <strong className="text-white">(555) 123-4567</strong> - I answer 24/7.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Tell Me About Your Inspection Needs</h2>
                  <p className="text-lg text-gray-600">
                    The more details you provide, the more accurate your quote will be.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Contact Information */}
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-6">Contact Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                          Asset Location (City, State) *
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-6">Service Requirements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-semibold text-gray-700 mb-2">
                          Primary Service Type *
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          required
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select Service Type</option>
                          <option value="API 653 Tank Inspection">API 653 Tank Inspection</option>
                          <option value="API 570 Piping Inspection">API 570 Piping Inspection</option>
                          <option value="API 510 Pressure Vessel Inspection">API 510 Pressure Vessel Inspection</option>
                          <option value="NDT Testing">NDT Testing</option>
                          <option value="Welder Qualification">Welder Qualification</option>
                          <option value="Emergency Inspection">Emergency Inspection</option>
                          <option value="Multiple Services">Multiple Services</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="assetType" className="block text-sm font-semibold text-gray-700 mb-2">
                          Asset Type *
                        </label>
                        <select
                          id="assetType"
                          name="assetType"
                          required
                          value={formData.assetType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select Asset Type</option>
                          <option value="Aboveground Storage Tank">Aboveground Storage Tank</option>
                          <option value="Underground Storage Tank">Underground Storage Tank</option>
                          <option value="Pressure Vessel">Pressure Vessel</option>
                          <option value="Heat Exchanger">Heat Exchanger</option>
                          <option value="Process Piping">Process Piping</option>
                          <option value="Reactor Vessel">Reactor Vessel</option>
                          <option value="Multiple Assets">Multiple Assets</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="assetSize" className="block text-sm font-semibold text-gray-700 mb-2">
                          Asset Size/Capacity
                        </label>
                        <input
                          type="text"
                          id="assetSize"
                          name="assetSize"
                          placeholder="e.g., 500,000 gallons, 150 PSI, 24' diameter"
                          value={formData.assetSize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-semibold text-gray-700 mb-2">
                          Urgency *
                        </label>
                        <select
                          id="urgency"
                          name="urgency"
                          required
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="">Select Urgency</option>
                          <option value="Emergency (Within 24 hours)">Emergency (Within 24 hours)</option>
                          <option value="Urgent (Within 1 week)">Urgent (Within 1 week)</option>
                          <option value="Standard (Within 1 month)">Standard (Within 1 month)</option>
                          <option value="Planned (2+ months)">Planned (2+ months)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="bg-orange-50 rounded-2xl p-6">
                    <h3 className="text-xl font-bold text-orange-800 mb-6">Additional Information</h3>
                    
                    <div className="mb-6">
                      <label htmlFor="lastInspection" className="block text-sm font-semibold text-gray-700 mb-2">
                        When was your last inspection?
                      </label>
                      <input
                        type="text"
                        id="lastInspection"
                        name="lastInspection"
                        placeholder="e.g., 2 years ago, Never inspected, Don't know"
                        value={formData.lastInspection}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="currentIssues" className="block text-sm font-semibold text-gray-700 mb-2">
                        Any current issues or concerns?
                      </label>
                      <textarea
                        id="currentIssues"
                        name="currentIssues"
                        rows={3}
                        placeholder="e.g., Visible corrosion, Leaks, Unusual readings, etc."
                        value={formData.currentIssues}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Additional Services (Check all that apply)
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          'Emergency Response',
                          'After-Hours Inspection',
                          'Detailed Reporting',
                          'Repair Recommendations',
                          'Compliance Documentation', 
                          'Follow-up Inspections'
                        ].map(service => (
                          <label key={service} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={formData.additionalServices.includes(service)}
                              onChange={() => handleCheckboxChange(service)}
                              className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 rounded focus:ring-orange-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell me anything else about your project that would help me provide an accurate quote..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-4 px-12 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Get My Free Quote Now
                    </button>
                    <p className="mt-4 text-sm text-gray-600">
                      **Response Time:** Standard quotes within 24 hours, Emergency quotes within 4 hours
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Companies Choose Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">15+ Years</div>
                  <p className="text-gray-700">Industry Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
                  <p className="text-gray-700">In Prevented Failures</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <p className="text-gray-700">Emergency Response</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}