declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackCTAClick = (ctaLocation: string) => {
  // Dispara GA4 event
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', {
      event_category: 'WhatsApp',
      event_label: ctaLocation,
    });
  }

  // Dispara Meta Pixel event
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', 'Lead', {
      content_name: ctaLocation,
    });
  }
};
