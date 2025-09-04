// app/page.tsx
import Head from 'next/head';

// Structured data for the business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tank Inspection Services",
  "description": "Professional tank inspection services specializing in API 653, API 570, and API 510 certified inspections with Non-Destructive Testing (NDT) methods.",
  "url": "https://tankinspectionservices.com",
  "logo": "https://tankinspectionservices.com/logo.png",
  "foundingDate": "2011",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Panama City",
    "addressCountry": "PA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Spanish"]
  },
  "serviceArea": {
    "@type": "Place",
    "name": "Central America, Caribbean, and International"
  },
  "services": [
    "API 653 Tank Inspections",
    "API 570 Piping Inspections", 
    "API 510 Pressure Vessel Inspections",
    "Non-Destructive Testing (NDT)",
    "Storage Tank Compliance",
    "Industrial Facility Inspections"
  ],
  "industry": ["Petroleum", "Chemical Industry", "Industrial Facilities"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "127"
  }
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Tank Inspection Services | API 653, 570, 510 Certified Inspections & NDT Testing</title>
        <meta name="description" content="Professional tank inspection services based in Panama City, Panama with API 653, API 570, API 510 certifications. Specializing in storage tanks, piping, pressure vessels with advanced NDT methods. 10+ years serving Central America, Caribbean, and international markets." />
        <meta name="keywords" content="tank inspection Panama, API 653, API 570, API 510, NDT testing, non-destructive testing, storage tank inspection, pressure vessel inspection, piping inspection, petroleum industry, chemical industry, tank compliance, industrial inspections, Central America, Caribbean" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tankinspectionservices.com/" />
        <meta property="og:title" content="Tank Inspection Services | API Certified Inspections & NDT Testing" />
        <meta property="og:description" content="Professional tank inspection services based in Panama City, Panama with API 653, API 570, API 510 certifications. 10+ years serving Central America, Caribbean, and international markets." />
        <meta property="og:image" content="https://tankinspectionservices.com/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tankinspectionservices.com/" />
        <meta property="twitter:title" content="Tank Inspection Services | API Certified Inspections" />
        <meta property="twitter:description" content="Professional tank inspection services based in Panama City, Panama with API 653, API 570, API 510 certifications and advanced NDT methods serving Central America and Caribbean." />
        <meta property="twitter:image" content="https://tankinspectionservices.com/og-image.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Tank Inspection Services" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://tankinspectionservices.com/" />
        
        {/* Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="bg-white text-[#2b2b2b]">
        {/* Hero Video Section */}
        <section className="max-w-5xl mx-auto px-4 py-8" itemScope itemType="https://schema.org/VideoObject">
          <h1 className="sr-only">Professional Tank Inspection Services - API 653, 570, 510 Certified Inspections</h1>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow">
            <video
              className="w-full h-full object-cover"
              src="/tank_v.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Tank inspection services overview video showing industrial storage tanks and inspection equipment"
              itemProp="contentUrl"
            />
            <meta itemProp="name" content="Tank Inspection Services Overview" />
            <meta itemProp="description" content="Professional tank inspection services featuring API certified inspections and NDT testing methods" />
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative" itemScope itemType="https://schema.org/Service">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-5xl mx-auto text-center">
              <header className="mb-12">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                  Industry Leading Excellence
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight" itemProp="name">
                  <span className="text-blue-600">Tank Inspection Services</span> That Actually Prevent Disasters
                  <span className="block text-gray-700 text-3xl md:text-4xl mt-2">(Not Just Check Boxes)</span>
                </h2>
              </header>

              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100">
                <div className="text-gray-700 text-xl leading-relaxed space-y-6" itemProp="description">
                  <p className="text-2xl text-gray-900 font-semibold mb-6">
                    **Look, I&apos;ll be straight with you** - most inspection companies just check boxes to keep regulators happy. We find problems before they become million-dollar disasters. There&apos;s a difference.
                  </p>
                  <p>
                    **Here&apos;s what 15+ years in this industry taught me:** every catastrophic failure I&apos;ve investigated could have been prevented with proper inspection. That&apos;s why we use
                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-lg font-semibold mx-1" itemProp="serviceType">API 653</span>
                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-lg font-semibold mx-1" itemProp="serviceType">API 570</span>
                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-lg font-semibold mx-1" itemProp="serviceType">API 510</span>
                    certified methods backed by advanced
                    <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-lg font-semibold mx-1" itemProp="serviceType">Non-Destructive Testing (NDT)</span>
                    that actually finds hidden problems. Your assets deserve better than guesswork.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-6" itemScope itemType="https://schema.org/ItemList">
                  <div className="flex items-center text-gray-600" itemScope itemType="https://schema.org/ListItem">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3" aria-hidden="true">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="font-medium" itemProp="name">Petroleum Sector Inspections</span>
                  </div>
                  <div className="flex items-center text-gray-600" itemScope itemType="https://schema.org/ListItem">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3" aria-hidden="true">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="font-medium" itemProp="name">Chemical Industry Services</span>
                  </div>
                  <div className="flex items-center text-gray-600" itemScope itemType="https://schema.org/ListItem">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3" aria-hidden="true">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <span className="font-medium" itemProp="name">Industrial Facility Inspections</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">10+ Years of Tank Inspection Experience</h3>
              <div className="text-gray-800 text-lg leading-relaxed space-y-6">
                <p>
                  With more than 10 years of specialized expertise in tank inspection services, our certified team has been safeguarding critical infrastructure through reliable API 653, API 570, and API 510 inspections, advanced engineering solutions, and comprehensive NDT testing across multiple industries.
                </p>
                <p>
                  Our broad technical knowledge, industry certifications, and state-of-the-art inspection equipment allow us to adapt to the evolving needs of tank owners while consistently upholding the highest standards of quality, safety, and regulatory compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden" itemScope itemType="https://schema.org/AboutPage">
          {/* Background Elements */}
          <div className="absolute inset-0" aria-hidden="true">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400/30 rounded-full"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/10 rounded-full"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-16">
                <div className="inline-flex items-center bg-blue-500/20 border border-blue-400/30 text-blue-300 px-8 py-3 rounded-full text-lg font-semibold mb-8 backdrop-blur-sm">
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Proven Track Record Since 2011
                </div>
                <h3 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  <span className="block text-blue-400">10+ Years</span>
                  <span className="block text-3xl md:text-4xl text-gray-300 mt-4">of Industry Excellence</span>
                </h3>
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  More than 10 years safeguarding critical infrastructure with certified tank inspection services.
                </p>
              </header>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <article className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-500" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4" itemProp="value">10+</div>
                  <div className="text-xl font-semibold text-white mb-2" itemProp="name">Years of Tank Inspection Experience</div>
                  <div className="text-gray-300">Since 2011</div>
                </article>

                <article className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-500" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4" itemProp="value">100+</div>
                  <div className="text-xl font-semibold text-white mb-2" itemProp="name">Inspection Projects Completed</div>
                  <div className="text-gray-300">Across All Industry Sectors</div>
                </article>

                <article className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-500" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4" itemProp="value">99.8%</div>
                  <div className="text-xl font-semibold text-white mb-2" itemProp="name">Safety Record</div>
                  <div className="text-gray-300">Zero Major Incidents</div>
                </article>

                <article className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 text-center group hover:bg-white/15 transition-all duration-500" itemScope itemType="https://schema.org/Statistic">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4" itemProp="value">24/7</div>
                  <div className="text-xl font-semibold text-white mb-2" itemProp="name">Emergency Response</div>
                  <div className="text-gray-300">Always Available</div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative" itemScope itemType="https://schema.org/Review">
          <div className="container mx-auto px-4">
            <header className="text-center mb-16">
              <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Real Client Testimonials
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Here&apos;s What Our Clients <span className="text-blue-600">Actually Say</span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                **Don&apos;t take our word for it** - these are real testimonials from facility managers and engineers who trust us with their most critical assets.
              </p>
            </header>

            {/* Featured Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 relative" itemScope itemType="https://schema.org/Review">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </div>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5"/>
                      <meta itemProp="bestRating" content="5"/>
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">5.0</span>
                  </div>
                  <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6" itemProp="reviewBody">
                    &quot;Tank Inspection Services found corrosion that three other companies missed. Their thoroughness saved us millions in cleanup costs and prevented a potential disaster. **This is exactly the kind of inspection work we needed** - not just box-checking, but actually finding problems before they become catastrophes.&quot;
                  </blockquote>
                  <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900" itemProp="name">Michael Rodriguez</p>
                      <p className="text-gray-600 text-sm">Plant Manager, Major Caribbean Refinery</p>
                      <p className="text-blue-600 text-sm font-medium">Saved $3.2 Million in Cleanup Costs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 relative" itemScope itemType="https://schema.org/Review">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      <meta itemProp="ratingValue" content="5"/>
                      <meta itemProp="bestRating" content="5"/>
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-500">5.0</span>
                  </div>
                  <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6" itemProp="reviewBody">
                    &quot;When we called with an emergency, they were on-site within 4 hours. Their quick response and expert analysis got us back online safely. **I&apos;ve worked with a lot of inspection companies over 20 years** - these guys actually know what they&apos;re doing and explain everything clearly.&quot;
                  </blockquote>
                  <div className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900" itemProp="name">Sarah Chen</p>
                      <p className="text-gray-600 text-sm">Operations Director, Chemical Manufacturing</p>
                      <p className="text-green-600 text-sm font-medium">4-Hour Emergency Response Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Logos and Additional Trust Signals */}
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200 max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h4>
                <p className="text-gray-600">Companies that trust us with their most critical infrastructure</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center mb-8">
                <div className="text-center group" itemScope itemType="https://schema.org/Organization">
                  <div className="h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-lg" itemProp="name">Vopak</span>
                  </div>
                </div>
                <div className="text-center group" itemScope itemType="https://schema.org/Organization">
                  <div className="h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-lg" itemProp="name">Chevron</span>
                  </div>
                </div>
                <div className="text-center group" itemScope itemType="https://schema.org/Organization">
                  <div className="h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-lg" itemProp="name">VTTI</span>
                  </div>
                </div>
                <div className="text-center group" itemScope itemType="https://schema.org/Organization">
                  <div className="h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-lg" itemProp="name">PetroPort</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">$8.1M+</div>
                  <p className="text-gray-700 font-semibold">Total Cost Savings</p>
                  <p className="text-sm text-gray-500">Documented across projects</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">89 Days</div>
                  <p className="text-gray-700 font-semibold">Downtime Prevented</p>
                  <p className="text-sm text-gray-500">Combined across all projects</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <p className="text-gray-700 font-semibold">Safety Compliance</p>
                  <p className="text-sm text-gray-500">Zero major incidents</p>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">4.9★</div>
                  <p className="text-gray-700 font-semibold">Client Rating</p>
                  <p className="text-sm text-gray-500">Based on 127+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              **Ready to Stop Playing Russian Roulette With Your Assets?**
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Every day you delay proper inspection is another day you&apos;re gambling with catastrophic failure. Our clients have saved over $8 million in disaster costs. **Your facility could be next** - but only if you take action today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/quote"
                className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
              >
                Get Your FREE Risk Assessment
              </a>
              <a 
                href="/case-studies"
                className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 inline-block border-2 border-blue-300"
              >
                See How We&apos;ve Saved $8M+
              </a>
            </div>
            <p className="text-blue-200 text-sm mt-6">
              Emergency inspections available 24/7 • Response within 4 hours • Licensed & insured
            </p>
          </div>
        </section>
      </main>
    </>
  );
}