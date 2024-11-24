import { Typography, Paper, Container, Grid } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const About = () => {
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
          About Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                We empower small businesses to thrive in the digital age by automating their repetitive tasks and workflows. Our mission is to make enterprise-grade automation technology accessible and affordable for businesses of all sizes, helping them save time, reduce errors, and focus on what truly matters - growing their business.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Our Expertise
              </Typography>
              <Typography variant="body1" color="text.secondary">
                With years of experience in business process automation, we specialize in creating custom solutions that streamline operations. Our expertise spans workflow automation, data integration, document processing, and API development. We understand the unique challenges of small businesses and craft solutions that deliver immediate value while scaling with your growth.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Our Approach
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We believe in simplicity and effectiveness. Our approach combines cutting-edge technology with practical business sense. We work closely with each client to understand their unique needs, implement tailored solutions, and provide ongoing support. Whether you're looking to automate customer service, streamline operations, or integrate systems, we're here to make it happen efficiently and affordably.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Why Choose Us
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                <ul>
                  <li>Custom Solutions: Each business is unique, and our automation solutions are tailored to your specific needs</li>
                  <li>Affordable Pricing: Enterprise-grade automation technology within reach of small businesses</li>
                  <li>Ongoing Support: We're committed to your success with dedicated support and regular updates</li>
                  <li>Proven Results: Our solutions have helped businesses reduce manual work by up to 70% and cut operational costs significantly</li>
                </ul>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </animated.div>
    </Container>
  );
};

export default About;
