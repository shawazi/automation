import { useState } from 'react';
import { Container, Grid, Typography, Paper, Box, TextField, Button, Alert, MenuItem } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { InlineWidget } from 'react-calendly';
import emailjs from '@emailjs/browser';
import config from '../config';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
  serviceType: string;
}

const serviceTypes = [
  { value: 'cold-outreach', label: 'Personalized Cold Outreach System' },
  { value: 'training-bot', label: 'Staff Training ChatBot' },
  { value: 'plan-generator', label: 'Customized Plan Generator' },
  { value: 'onboarding', label: 'Onboarding Chat Assistant' },
  { value: 'guest-support', label: 'Airbnb Guest Support Chat' },
  { value: 'other', label: 'Other / Custom Solution' },
];

const initialFormState: ContactForm = {
  name: '',
  email: '',
  company: '',
  message: '',
  serviceType: '',
};

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const fadeIn = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Check which features are available
  const calendlyAvailable = Boolean(config.CALENDLY_URL);
  const emailAvailable = Boolean(
    config.EMAILJS_SERVICE_ID &&
    config.EMAILJS_TEMPLATE_ID &&
    config.EMAILJS_PUBLIC_KEY &&
    config.CONTACT_EMAIL
  );

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    
    if (!emailAvailable) {
      setError('Email service is currently unavailable. Please try scheduling a meeting instead.');
      setIsLoading(false);
      return;
    }
    
    try {
      await emailjs.send(
        config.EMAILJS_SERVICE_ID,
        config.EMAILJS_TEMPLATE_ID,
        {
          to_email: config.CONTACT_EMAIL,
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          service_type: formData.serviceType ? 
            serviceTypes.find(s => s.value === formData.serviceType)?.label || formData.serviceType :
            'Not specified',
        },
        config.EMAILJS_PUBLIC_KEY
      );
      
      setSubmitted(true);
      setFormData(initialFormState);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError('Failed to send message. Please try scheduling a meeting or try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <animated.div style={fadeIn}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" sx={{ 
          mb: 6, 
          textAlign: 'center',
          fontSize: { xs: '2.5rem', md: '3.75rem' },
          fontWeight: 'bold'
        }}>
          Contact Us
        </Typography>

        {!calendlyAvailable && !emailAvailable && (
          <Alert severity="error" sx={{ mb: 4 }}>
            Our contact services are currently being updated. Please try again later or email us directly.
          </Alert>
        )}

        <Grid container spacing={4}>
          {emailAvailable && (
            <Grid item xs={12} md={calendlyAvailable ? 6 : 12}>
              <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 500 }}>
                  Send us a Message
                </Typography>

                {submitted ? (
                  <Alert severity="success">
                    Thank you for your message! We'll get back to you soon.
                  </Alert>
                ) : (
                  <Box component="form" onSubmit={handleSubmit}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      select
                      fullWidth
                      label="Service Type"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      sx={{ mb: 2 }}
                    >
                      {serviceTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      sx={{ mb: 3 }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                    {error && (
                      <Alert severity="error" sx={{ mt: 2 }}>
                        {error}
                      </Alert>
                    )}
                  </Box>
                )}
              </Paper>
            </Grid>
          )}

          {calendlyAvailable && (
            <Grid item xs={12} md={emailAvailable ? 6 : 12}>
              <Paper elevation={3} sx={{ 
                p: 4, 
                height: '600px',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Typography variant="h5" sx={{ mb: 4, fontWeight: 500 }}>
                  Schedule a Meeting
                </Typography>
                <Box sx={{ 
                  flexGrow: 1, 
                  '& iframe': { 
                    border: 'none',
                    width: '100% !important',
                    height: '100% !important',
                    borderRadius: '8px !important',
                    filter: (theme) => theme.palette.mode === 'dark' ? 'invert(88%)' : 'none'
                  }
                }}>
                  <InlineWidget 
                    url={config.CALENDLY_URL}
                    styles={{
                      height: '100%',
                      width: '100%'
                    }}
                  />
                </Box>
              </Paper>
            </Grid>
          )}
        </Grid>
      </Container>
    </animated.div>
  );
};

export default Contact;
