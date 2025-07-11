import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQSection = () => {
  const faqItems = [
    {
      question: 'Where are AirBridge files hosted?',
      answer: 'All your files are securely hosted on our encrypted cloud servers located in trusted data centers.'
    },
    {
      question: 'Is my personal data safe?',
      answer: 'Yes, we comply with strict data protection regulations and use encryption to ensure your data remains private and secure.'
    },
    {
      question: 'Do you open and/or use my files?',
      answer: 'No, your files remain private. We never view, analyze, or share your files with third parties.'
    },
    {
      question: 'Are my files safe?',
      answer: 'Absolutely! We use end-to-end encryption and secure storage to protect your files during transfer and while stored on our servers.'
    },
  ];

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', py: 8, px: 2 }}>
      <Typography
        variant="h3"
        sx={{ mb: 4, fontWeight: 'bold', textAlign: 'center' }}
      >
        Frequently Asked Questions
      </Typography>

      {faqItems.map((item, index) => (
        <Accordion key={index} sx={{ mb: 2, borderRadius: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`faq-content-${index}`}
            id={`faq-header-${index}`}
          >
            <Typography sx={{ fontWeight: 800 }}>
              {item.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              {item.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQSection;
