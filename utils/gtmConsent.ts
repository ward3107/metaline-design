/**
 * Google Tag Manager Consent Mode v2 Integration
 *
 * This module handles communication with Google Tag Manager's Consent Mode API.
 * It provides functions to set default consent states and update them based on
 * user preferences.
 */

// DataLayer can contain objects or arrays (for gtag calls)
type DataLayerItem = Record<string, unknown> | unknown[];

// Extend Window interface for dataLayer and gtag
declare global {
  interface Window {
    dataLayer: DataLayerItem[];
    gtag: (...args: unknown[]) => void;
  }
}

export interface ConsentState {
  analytics_storage: 'granted' | 'denied';
  ad_storage: 'granted' | 'denied';
  ad_user_data: 'granted' | 'denied';
  ad_personalization: 'granted' | 'denied';
}

/**
 * Set default consent state (should be called before GTM loads)
 * This is typically injected in the <head> of the document
 */
export function setDefaultConsent(): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  function gtag(...args: unknown[]): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window.dataLayer as any).push(args);
  }

  window.gtag = gtag;

  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 2000,
  });
}

/**
 * Update consent state based on user preferences
 * Called when user accepts/changes their cookie preferences
 */
export function updateConsent(analytics: boolean, marketing: boolean): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  const consentUpdate: ConsentState = {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
    ad_user_data: marketing ? 'granted' : 'denied',
    ad_personalization: marketing ? 'granted' : 'denied',
  };

  // Push consent update using gtag
  // Use type assertion to handle the gtag command format
  window.dataLayer.push(['consent', 'update', consentUpdate] as unknown as Record<string, unknown>);

  // Push event for GTM tag triggers
  window.dataLayer.push({
    event: 'cookie_consent_update',
    consent_analytics: analytics,
    consent_marketing: marketing,
    consent_state: consentUpdate,
    consent_timestamp: new Date().toISOString(),
  });
}

/**
 * Initialize consent on page load
 * If user has previously consented, apply their preferences immediately
 */
export function initializeConsent(
  hasConsent: boolean,
  analytics: boolean,
  marketing: boolean
): void {
  if (hasConsent) {
    updateConsent(analytics, marketing);
  }
}

/**
 * GTM Head Snippet Template
 * This should be placed in the <head> section before GTM script loads
 *
 * Usage:
 * 1. Replace GTM-XXXXXXX with your actual GTM Container ID
 * 2. Include this script in your HTML <head> BEFORE the GTM script
 */
export const GTM_HEAD_SNIPPET = `
<!-- Google Tag Manager Consent Mode v2 - Default State -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 2000
  });
</script>
<!-- End Consent Mode v2 -->
`;
