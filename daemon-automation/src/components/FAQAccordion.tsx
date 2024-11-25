import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { FAQItem } from '../constants/faq';

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => (
  <>
    {items.map((faq, index) => (
      <Accordion key={index} defaultExpanded={index === 0}>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          sx={{
            '&.Mui-expanded': {
              minHeight: '48px',
            }
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            {faq.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {faq.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </>
);

export default FAQAccordion;
