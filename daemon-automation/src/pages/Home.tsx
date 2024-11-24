import { Box, Typography, Paper, Grid } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';

const Home = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 400, friction: 26 }
  });

  return (
    <animated.div style={fadeIn}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 8,
          minHeight: '100vh'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: '800px',
            mx: 'auto',
            px: 3
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              fontWeight: 700,
              textAlign: 'center',
              mb: 2,
              background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Daemon Automation
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              color: 'text.secondary',
              mb: 8,
              textAlign: 'center',
              maxWidth: '800px',
              fontWeight: 300,
              letterSpacing: '0.05em',
              lineHeight: 1.6,
              fontFamily: '"Roboto Flex", "Inter", sans-serif',
              '& br': {
                display: { xs: 'none', sm: 'block' }
              },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-2rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60px',
                height: '4px',
                background: 'linear-gradient(45deg, #1a237e 30%, #534bae 90%)',
                borderRadius: '2px'
              }
            }}
          >
            Automate your business growth.
            <br />
            From leads to sales, effortlessly.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ maxWidth: '1200px', px: 3 }}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'background.paper',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                Streamline Your Workflow
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Discover how our automation solutions can transform your business processes.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                backgroundColor: 'background.paper',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom>
                See It In Action
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Visual demonstrations of our powerful automation capabilities coming soon.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </animated.div>
  );
};

export default Home;
