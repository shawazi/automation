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
        <Typography variant="h2" sx={{ mb: 6, mt: 4, textAlign: 'center' }}>
          About Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ p: 4, borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                [Mission statement placeholder]
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Our Expertise
              </Typography>
              <Typography variant="body1" color="text.secondary">
                [Expertise details placeholder]
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%', borderRadius: 2 }}>
              <Typography variant="h5" gutterBottom>
                Our Team
              </Typography>
              <Typography variant="body1" color="text.secondary">
                [Team information placeholder]
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </animated.div>
    </Container>
  );
};

export default About;
