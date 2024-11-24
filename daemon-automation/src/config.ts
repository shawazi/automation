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

export const validateConfig = () => {
  const missingVars = Object.entries(config)
    .filter(([_, value]) => !value)
    .map(([key]) => `VITE_${key}`);

  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars);
    return false;
  }
  return true;
};

export default config;
