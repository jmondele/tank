"use client";

import { useState } from 'react';

export default function Resources() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as keyof typeof formData]: value
    }));
  };

  const handleDownload = (e: React.FormEvent, resourceType: string) => {
    e.preventDefault();
    
    // Create email content for lead capture
    const subject = `Resource Download - ${resourceType} - ${formData.company}`;
    const body = `
RESOURCE DOWNLOAD REQUEST
========================

CONTACT INFORMATION:
- Name: ${formData.firstName} ${formData.lastName}
- Company: ${formData.company}
- Job Title: ${formData.jobTitle}
- Email: ${formData.email}

REQUESTED RESOURCE: ${resourceType}

---
Please send the requested resource to this contact and add them to our mailing list for industry updates.

Resource downloaded from tankinspectionservices.com/resources
    `.trim();

    // Create mailto link for lead capture
    const mailtoLink = `mailto:luismon@tankinspectionservices.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-400/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-300/10 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center">
              <div className="inline-flex items-center bg-purple-500/20 border border-purple-400/30 text-purple-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Free Resources
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                <span className="text-purple-400">Free Inspection Resources</span>
                <span className="block text-white">That Actually Help</span>
              </h1>

              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-purple-100 leading-relaxed mb-8">
                  **No fluff, no sales pitches** - just practical checklists, guides, and tools I've developed over 15+ years in the industry. These are the same resources I use on million-dollar projects.
                </p>
                <p className="text-lg text-purple-200">
                  **Download any resource instantly** - just tell me where to send it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resource Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Free Resource</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Each resource is based on real-world experience and designed to help you avoid costly mistakes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* API 653 Checklist */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-blue-600 mb-4">API 653 Inspection Checklist</h3>
                    <p className="text-gray-700 mb-6">
                      **Complete 47-point checklist** I use on every tank inspection. Covers external, internal, and documentation requirements.
                    </p>
                    <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                      <li>✓ Pre-inspection preparation steps</li>
                      <li>✓ External inspection criteria</li>
                      <li>✓ Internal inspection procedures</li>
                      <li>✓ Documentation requirements</li>
                      <li>✓ Common failure points to check</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-2xl p-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">FREE</div>
                      <div className="text-sm text-blue-700">Usually $297</div>
                    </div>
                  </div>
                  <form onSubmit={(e) => handleDownload(e, 'API 653 Inspection Checklist')} className="space-y-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Work Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300"
                    >
                      Download Free Checklist
                    </button>
                  </form>
                </div>

                {/* Tank Failure Prevention Guide */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-red-600 mb-4">Tank Failure Prevention Guide</h3>
                    <p className="text-gray-700 mb-6">
                      **The 12 most common causes** of tank failures and exactly how to prevent them. Based on 50+ failure investigations.
                    </p>
                    <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                      <li>✓ Early warning signs to watch for</li>
                      <li>✓ Critical maintenance schedules</li>
                      <li>✓ Environmental factors that accelerate failure</li>
                      <li>✓ Cost-effective prevention strategies</li>
                      <li>✓ Emergency response procedures</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-2xl p-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600 mb-1">FREE</div>
                      <div className="text-sm text-red-700">Usually $497</div>
                    </div>
                  </div>
                  <form onSubmit={(e) => handleDownload(e, 'Tank Failure Prevention Guide')} className="space-y-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Work Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300"
                    >
                      Download Prevention Guide
                    </button>
                  </form>
                </div>

                {/* Compliance Calendar */}
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-600 mb-4">2024 Compliance Calendar</h3>
                    <p className="text-gray-700 mb-6">
                      **Never miss another deadline.** Complete calendar with API 653, 570, 510 inspection schedules and regulatory deadlines.
                    </p>
                    <ul className="text-left text-sm text-gray-600 space-y-2 mb-6">
                      <li>✓ API inspection frequency requirements</li>
                      <li>✓ State and federal deadline tracking</li>
                      <li>✓ Seasonal maintenance windows</li>
                      <li>✓ Documentation submission dates</li>
                      <li>✓ Emergency preparedness schedules</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">FREE</div>
                      <div className="text-sm text-green-700">Usually $197</div>
                    </div>
                  </div>
                  <form onSubmit={(e) => handleDownload(e, '2024 Compliance Calendar')} className="space-y-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Work Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300"
                    >
                      Download Calendar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why These Resources Are Worth Thousands
              </h2>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 md:p-12 border border-purple-200 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-4">15+ Years</div>
                    <h3 className="text-xl font-bold text-purple-800 mb-2">Field Experience</h3>
                    <p className="text-purple-700">Every resource comes from real project experience and lessons learned from actual failures.</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-4">$50M+</div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">Disasters Prevented</h3>
                    <p className="text-blue-700">These tools have helped companies avoid millions in failures, cleanup costs, and regulatory fines.</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-4">100%</div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Practical Application</h3>
                    <p className="text-green-700">No theory or fluff - just actionable steps you can implement immediately.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Happens After You Download?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">1</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Instant Access</h4>
                    <p className="text-gray-600">Resource sent to your email within 5 minutes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">2</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Monthly Updates</h4>
                    <p className="text-gray-600">Industry updates and new resources delivered monthly</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">3</span>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">Expert Support</h4>
                    <p className="text-gray-600">Direct access to ask questions about your specific situations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Prevent Your Next Disaster?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
              **These resources have prevented millions in failures for other companies.** Download any resource above to start protecting your assets today. No cost, no obligations - just practical tools that work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/quote"
                className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
              >
                Get Professional Inspection Quote
              </a>
              <a 
                href="mailto:luismon@tankinspectionservices.com?subject=Resource Question&body=I have a question about the inspection resources available."
                className="bg-purple-600 hover:bg-purple-700 text-white border border-purple-400 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 inline-block"
              >
                Ask About Custom Resources
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}