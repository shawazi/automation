import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { FAQItem } from '../types/faq';

interface FAQAccordionProps {
  faq: FAQItem;
  index: number;
}

const FAQAccordion = ({ faq, index }: FAQAccordionProps) => (
  <Accordion defaultExpanded={index === 0}>
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
);

export default FAQAccordion;
