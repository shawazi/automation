interface Config {
  CALENDLY_URL: string;
  EMAILJS_SERVICE_ID: string;
  EMAILJS_TEMPLATE_ID: string;
  EMAILJS_PUBLIC_KEY: string;
  CONTACT_EMAIL: string;
}

const config: Config = {
  CALENDLY_URL: import.meta.env.VITE_CALENDLY_URL || '',
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || '',
};

// Debug environment variables
if (import.meta.env.DEV) {
  console.log('Environment Variables Debug:');
  console.log('VITE_CALENDLY_URL:', import.meta.env.VITE_CALENDLY_URL);
  console.log('VITE_EMAILJS_SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
  console.log('VITE_EMAILJS_TEMPLATE_ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  console.log('VITE_EMAILJS_PUBLIC_KEY:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  console.log('VITE_CONTACT_EMAIL:', import.meta.env.VITE_CONTACT_EMAIL);
}

const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateConfig = () => {
  // Always validate URLs regardless of environment
  const calendlyValid = Boolean(config.CALENDLY_URL) && isValidUrl(config.CALENDLY_URL);
  if (config.CALENDLY_URL && !calendlyValid) {
    console.error('Invalid Calendly URL:', config.CALENDLY_URL);
  }

  const emailValid = Boolean(
    config.EMAILJS_SERVICE_ID &&
    config.EMAILJS_TEMPLATE_ID &&
    config.EMAILJS_PUBLIC_KEY &&
    config.CONTACT_EMAIL
  );

  if (import.meta.env.DEV) {
    const missingVars = Object.entries(config)
      .filter(([, value]) => !value)
      .map(([key]) => `VITE_${key}`);

    if (missingVars.length > 0) {
      console.error('Missing required environment variables:', missingVars);
      return false;
    }
  }

  // Return true if at least one feature is available and valid
  return calendlyValid || emailValid;
};

export default config;
