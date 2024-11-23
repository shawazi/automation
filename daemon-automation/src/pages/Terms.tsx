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
        <Typography variant="h2" sx={{ mb: 6, mt: 4, textAlign: 'center' }}>
          Terms and Conditions
        </Typography>

        <Paper sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            1. Terms of Service
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            [Terms of service content placeholder]
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            2. Privacy Policy
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            [Privacy policy content placeholder]
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            3. Use License
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            [License information placeholder]
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
            4. Disclaimer
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            [Disclaimer content placeholder]
          </Typography>

          <Typography variant="caption" display="block" sx={{ mt: 4, color: 'text.secondary' }}>
            Last updated: [Date placeholder]
          </Typography>
        </Paper>
      </animated.div>
    </Container>
  );
};

export default Terms;
