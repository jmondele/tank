"use client";

import { useState } from 'react';

interface ServiceContactFormProps {
  service: string;
  urgency?: 'standard' | 'priority' | 'emergency';
}

export default function ServiceContactForm({ service, urgency = 'standard' }: ServiceContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: service,
    urgency: urgency,
    details: ''
  });

  const handleSubmit = () => {
    const subject = `${service} Service Request - ${urgency.toUpperCase()}`;
    const body = `
Service Requested: ${service}
Priority Level: ${urgency.toUpperCase()}

Contact Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}

Project Details:
${formData.details}

Please contact me to discuss this ${service} service request.
    `;

    const mailtoUrl = `mailto:luismon@tankinspectionservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const urgencyColors = {
    standard: 'from-blue-600 to-blue-700',
    priority: 'from-orange-600 to-orange-700', 
    emergency: 'from-red-600 to-red-700'
  };

  const urgencyText = {
    standard: 'Standard Request',
    priority: 'Priority Service',
    emergency: 'Emergency Response'
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get {service} Quote
        </h3>
        <div className={`inline-flex items-center bg-gradient-to-r ${urgencyColors[urgency]} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            {urgency === 'emergency' ? (
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            ) : (
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            )}
          </svg>
          {urgencyText[urgency]}
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Name *
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Your full name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="(555) 123-4567"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Company
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Company name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Project Details *
          </label>
          <textarea
            value={formData.details}
            onChange={(e) => setFormData({...formData, details: e.target.value})}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
            placeholder="Describe your inspection needs: number of tanks, location, timeline, any specific requirements..."
            required
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!formData.name || !formData.email || !formData.phone || !formData.details}
          className={`w-full bg-gradient-to-r ${urgencyColors[urgency]} hover:shadow-lg text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`}
        >
          {urgency === 'emergency' ? (
            <>
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
              </svg>
              Request Emergency Inspection
            </>
          ) : (
            <>
              <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
              Send Service Request
            </>
          )}
        </button>

        <p className="text-sm text-gray-600 text-center">
          {urgency === 'emergency' ? (
            <>
              <span className="text-red-600 font-semibold">Emergency Response:</span> We&apos;ll contact you within 1 hour
            </>
          ) : urgency === 'priority' ? (
            <>
              <span className="text-orange-600 font-semibold">Priority Service:</span> Response within 4 hours
            </>
          ) : (
            'We\'ll respond within 24 hours with a detailed quote'
          )}
        </p>
      </div>
    </div>
  );
}