import { Container, Typography, Paper } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const Terms = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 400, friction: 26 }
  });

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
          Terms and Conditions
        </Typography>

        <Paper sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            1. Terms of Service
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            By accessing and using this website, you agree to be bound by these Terms of Service. These terms govern your use of our website and the information provided herein. For specific terms regarding our automation services, including detailed service levels, data processing, and custom integrations, a separate service agreement will be provided during the client onboarding process. You must be at least 18 years old to use this website or engage our services. We reserve the right to modify these website terms at any time, with updates posted on this page.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            2. Website Use and Privacy
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            This website collects basic usage data through cookies and analytics tools to improve user experience. Any information submitted through our contact or inquiry forms will be handled according to our Privacy Policy. We implement standard security measures to protect website data. The collection and processing of data related to actual automation services will be governed by individual service agreements and our detailed Privacy Policy, which will be provided to clients separately.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            3. Intellectual Property
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            All content on this website, including but not limited to text, graphics, logos, images, and software, is our property or that of our content suppliers and is protected by international copyright laws. You may access, browse, and use these materials for your personal information and to learn about our services. Any other use, including reproduction, modification, distribution, or republication, without our prior written consent, is strictly prohibited.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            4. General Disclaimer
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            This website and its contents are provided "as is" for informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability of this website. Any reliance you place on such information is strictly at your own risk. Specific terms, warranties, and guarantees regarding our automation services will be detailed in individual client service agreements.
          </Typography>

          <Typography variant="caption" display="block" sx={{ mt: 4, color: 'text.secondary' }}>
            Last updated: November 2024
          </Typography>
        </Paper>
      </animated.div>
    </Container>
  );
};

export default Terms;
