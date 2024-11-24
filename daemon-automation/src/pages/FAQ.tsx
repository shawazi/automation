import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSpring, animated } from '@react-spring/web';
import { faqData } from '../data/faqData';

const FAQ = () => {
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
          Frequently Asked Questions
        </Typography>

        {faqData.map((faq, index) => (
          <Accordion key={index} defaultExpanded={index === 0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {faq.answer.map((paragraph, pIndex) => (
                <Typography key={pIndex} paragraph={pIndex !== faq.answer.length - 1}>
                  {paragraph}
                </Typography>
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </animated.div>
    </Container>
  );
};

export default FAQ;
