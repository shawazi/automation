import { Container, Typography } from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import FAQAccordion from '../components/FAQAccordion';
import { faqItems } from '../constants/faq';

const FAQ = () => {
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
          Frequently Asked Questions
        </Typography>
        <FAQAccordion items={faqItems} />
      </Container>
    </animated.div>
  );
};

export default FAQ;
