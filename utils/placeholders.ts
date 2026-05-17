// TODO(launch): Sentinel values flagged as placeholders. Replace with real
// data before going live. The values here are kept stable so the dev-mode
// banner and console warnings can detect them anywhere they leak through.

export const PLACEHOLDER_PHONE = '*5555';
export const PLACEHOLDER_EMAIL = 'info@anton-aluminum.com';
export const PLACEHOLDER_WHATSAPP = '972555555555';

export const PLACEHOLDER_IMAGE_HOSTS = ['picsum.photos', 'images.unsplash.com'];

export const isPlaceholderImage = (url: string): boolean =>
  PLACEHOLDER_IMAGE_HOSTS.some((host) => url.includes(host));

let warned = false;
export const warnPlaceholdersOnce = (): void => {
  if (warned || !import.meta.env.DEV) return;
  warned = true;
  // eslint-disable-next-line no-console
  console.warn(
    '[metaline-design] Placeholder data in use. Update constants.ts ' +
      '(phone, email, WhatsApp) and replace picsum/unsplash images before launch.'
  );
};
