"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';

// Google Analytics tracking ID - replace with your actual GA4 measurement ID
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

function GoogleAnalyticsInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_TRACKING_ID) return;

    const url = pathname + searchParams.toString();

    // Track page views
    window.gtag?.('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }, [pathname, searchParams]);

  return null;
}

export function GoogleAnalytics() {
  if (!GA_TRACKING_ID) {
    return null;
  }

  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_location: window.location.href,
              page_title: document.title,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsInner />
      </Suspense>
    </>
  );
}

// Helper function to track events
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Predefined tracking functions for common events
export const trackQuoteRequest = (serviceType?: string) => {
  trackEvent('quote_request', {
    service_type: serviceType || 'general',
    event_category: 'lead_generation',
    event_label: 'quote_form_submission'
  });
};

export const trackResourceDownload = (resourceName: string) => {
  trackEvent('resource_download', {
    resource_name: resourceName,
    event_category: 'lead_generation',
    event_label: 'lead_magnet_download'
  });
};

export const trackServicePageView = (serviceName: string) => {
  trackEvent('service_page_view', {
    service_name: serviceName,
    event_category: 'engagement',
    event_label: 'service_interest'
  });
};

export const trackCaseStudyView = (caseStudyId: string) => {
  trackEvent('case_study_view', {
    case_study_id: caseStudyId,
    event_category: 'engagement',
    event_label: 'social_proof_interaction'
  });
};

export const trackEmergencyContact = () => {
  trackEvent('emergency_contact', {
    event_category: 'high_intent_lead',
    event_label: 'emergency_request'
  });
};