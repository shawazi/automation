import { useState } from 'react';
import { Container, Grid, Typography, Paper, Box, TextField, Button, Divider, Alert } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import { InlineWidget } from 'react-calendly';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
  serviceType: string;
}

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

  const fadeIn = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement form submission logic
    // This would connect to your backend API
    setSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData(initialFormState);
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ width: '100%', px: { xs: 2, sm: 3, md: 4 } }}>
      <animated.div style={fadeIn}>
        <Typography variant="h2" sx={{ 
          mb: 6, 
          mt: 4, 
          textAlign: 'center',
          fontSize: { xs: '2.5rem', md: '3.75rem' },
          fontWeight: 700,
          background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          {/* Contact Form Section */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                Get in Touch
              </Typography>
              <Typography variant="body1" paragraph>
                Let's discuss how we can automate your business processes.
              </Typography>
              
              {submitted && (
                <Alert severity="success" sx={{ mb: 2 }}>
                  Thank you for your message! We'll be in touch soon.
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Service Type"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      helperText="e.g., Lead Generation, Process Management, Task Scheduling"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      sx={{
                        mt: 2,
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        color: 'white',
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Calendly Integration */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" gutterBottom>
                Schedule a Consultation
              </Typography>
              <Typography variant="body1" paragraph>
                Book a time that works best for you. We'll discuss your automation needs and create a customized solution.
              </Typography>
              <Box sx={{ height: '600px' }}>
                <InlineWidget 
                  url="https://calendly.com/your-calendly-url"
                  styles={{
                    height: '100%',
                    width: '100%',
                  }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </animated.div>
    </Container>
  );
};

export default Contact;
