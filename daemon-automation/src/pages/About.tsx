import { Typography, Paper, Container, Grid, Box } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 280, friction: 60 }
  });

  return (
    <animated.div style={fadeIn}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" sx={{ 
          mb: 6, 
          textAlign: 'center',
          fontSize: { xs: '2.5rem', md: '3.75rem' },
          fontWeight: 'bold'
        }}>
          About Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                We transform businesses through intelligent automation solutions. Our mission is to harness the power of AI to solve real business challenges, from personalized customer outreach to streamlined employee training. We believe that advanced automation should be accessible to businesses of all sizes, helping them operate more efficiently and grow sustainably.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Our Solutions
              </Typography>
              <Typography variant="body1">
                We specialize in creating AI-powered solutions that deliver immediate value:
              </Typography>
              <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                <Typography component="li">Intelligent Customer Engagement Systems</Typography>
                <Typography component="li">AI-Powered Training & Onboarding</Typography>
                <Typography component="li">Customized Plan Generation</Typography>
                <Typography component="li">Automated Support Solutions</Typography>
                <Typography component="li">Smart Lead Generation & Conversion</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Our Approach
              </Typography>
              <Typography variant="body1">
                We combine cutting-edge AI technology with practical business solutions. Each system we build is:
              </Typography>
              <Box component="ul" sx={{ mt: 2, pl: 2 }}>
                <Typography component="li">Customized to your specific needs</Typography>
                <Typography component="li">Built with scalability in mind</Typography>
                <Typography component="li">Designed for easy integration</Typography>
                <Typography component="li">Focused on measurable results</Typography>
                <Typography component="li">Supported by ongoing optimization</Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Why Choose Us
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Expertise
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Our team combines deep expertise in AI and machine learning with years of business process optimization experience. We understand both the technical and business aspects of automation.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="h6" gutterBottom>
                      Results
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Our solutions have helped businesses achieve:
                    </Typography>
                    <Box component="ul" sx={{ pl: 2 }}>
                      <Typography component="li">Up to 70% reduction in manual work</Typography>
                      <Typography component="li">3x improvement in response rates</Typography>
                      <Typography component="li">50% faster employee onboarding</Typography>
                      <Typography component="li">24/7 automated customer support</Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </animated.div>
  );
};

export default About;
