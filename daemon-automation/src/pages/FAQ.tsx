import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useSpring, animated } from '@react-spring/web';

const FAQ = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0 },
    config: { mass: 1, tension: 400, friction: 26 }
  });

  return (
    <Container maxWidth="lg" sx={{ width: '100%', px: { xs: 2, sm: 3, md: 4 } }}>
      <animated.div style={fadeIn}>
        <Typography variant="h2" sx={{ mb: 6, mt: 4, textAlign: 'center' }}>
          Frequently Asked Questions
        </Typography>

        <Accordion defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              How to pronounce "daemon"? What is a daemon?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>
              "Daemon" is pronounced as "demon" (not "day-mon"). The word has fascinating origins and meanings in both computer science and literature:
            </Typography>
            <Typography paragraph>
              In computer science, a daemon is a background process that runs without direct control from an interactive user. The term was coined by the programmers at MIT's Project MAC, inspired by Maxwell's demon, an imaginary being from a thought experiment in physics. These programs are essential for system operations, quietly handling tasks like scheduling, logging, and network services.
            </Typography>
            <Typography paragraph>
              In Philip Pullman's "His Dark Materials" series, dæmons (spelled with a ligature) are physical manifestations of a person's inner self or soul, taking the form of animals. While this meaning differs from the technical usage, both contexts share themes of companionship and essential support, extending the capabilities of a human being.
            </Typography>
            <Typography>
              For Daemon Automation, we embrace the computer science definition - representing reliable, efficient background processes that power modern automation systems.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              What services do you offer?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Automation services include:
              <ul>
                <li>Lead Generation</li>
                <li>Process Management</li>
                <li>Task Scheduling</li>
                <li>Appointment Scheduling</li>
                <li>Monitoring and Alerting</li>
                <li>Log Management</li>
                <li>Network Services</li>
                <li>Security and Access Control</li>
                <li>Continuous Integration and Continuous Deployment</li>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">
              How can automation benefit my business?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              [Content coming soon]
            </Typography>
          </AccordionDetails>
        </Accordion>
      </animated.div>
    </Container>
  );
};

export default FAQ;
