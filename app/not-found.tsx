"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            **Oops! This Page Went Missing**
          </h2>
        </div>

        {/* Error Message */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 mb-8">
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            **The page you're looking for doesn't exist** - but don't worry, we've got plenty of other ways to help you protect your assets from catastrophic failure.
          </p>
          <p className="text-lg text-gray-500 mb-6">
            Maybe the URL was mistyped, or perhaps the page was moved. Either way, let's get you back to finding the tank inspection services you need.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link 
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
          >
            Back to Homepage
          </Link>
          <Link 
            href="/quote"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-block"
          >
            Get Free Quote
          </Link>
        </div>

        {/* Popular Pages */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Pages</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link 
              href="/services/api653"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              API 653 Tank Inspection
            </Link>
            <Link 
              href="/services/api570"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              API 570 Piping
            </Link>
            <Link 
              href="/services/api510"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              API 510 Pressure Vessels
            </Link>
            <Link 
              href="/services/NDT"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              NDT Testing
            </Link>
            <Link 
              href="/case-studies"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Case Studies
            </Link>
            <Link 
              href="/equipment"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Equipment
            </Link>
            <Link 
              href="/resources"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Free Resources
            </Link>
            <Link 
              href="/about"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm py-2 px-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-2xl">
          <p className="text-red-800 font-semibold mb-2">**Need Emergency Inspection?**</p>
          <p className="text-red-600 text-sm mb-3">
            Don't let a missing page delay critical safety inspections
          </p>
          <a 
            href="mailto:luismon@tankinspectionservices.com?subject=Emergency%20Inspection%20Request&body=We%20need%20emergency%20inspection%20services.%20Please%20contact%20me%20immediately."
            className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            Call Emergency Line
          </a>
        </div>
      </div>
    </div>
  );
}