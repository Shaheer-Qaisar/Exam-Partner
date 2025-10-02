import React from "react";
import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
function FAQs() {
  const accordionData = [
    {
      title: "Which curriculums do you cover?",
      answer: "IGCSE, GCSE, IB, SABIS, Canadian, and more.",
    },
    {
      title: "Which curriculums do you cover?",
      answer: "IGCSE, GCSE, IB, SABIS, Canadian, and more.",
    },
    {
      title: "Which curriculums do you cover?",
      answer: "IGCSE, GCSE, IB, SABIS, Canadian, and more.",
    },
    {
      title: "Which curriculums do you cover?",
      answer: "IGCSE, GCSE, IB, SABIS, Canadian, and more.",
    },
  ];
  const [expanded, setExpanded] = useState(0); // first one open by default

  const handleChange = (index) => (_, isExpanded) => {
    setExpanded(isExpanded ? index : null); // open clicked, close previous
  };

  return (
    <>
      <Stack
        direction={{ xs: "column", md: "row" }} // column on small, row on desktop
        justifyContent="space-between"
        alignItems="center"
        p={{ xs: 2, md: 4 }}
        spacing={{ xs: 4, md: 0 }}
         minWidth={{ xs: "100%", md: "90%",lg:"80%",xl:"75%" }}
          maxWidth={{ xs: "100%", md: "90%",lg:"80%",xl:"75%" }}
          justifySelf={'center'}
          my={12}
      >
        {/* Left text section */}
        <Stack
          spacing={2}
          color="black"
          minWidth={{ xs: "100%", md: "40%",lg:"35%",xl:"30%" }}
          maxWidth={{ xs: "100%", md: "40%",lg:"35%",xl:"30%" }}
          textAlign={{ xs: "center", md: "left" }}
        >
          <Typography
            fontSize={{ xs: 28, sm: 32, md: 35,lg:42 }}
            fontFamily="Quicksand"
            fontWeight={550}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            fontSize={{ xs: 16, md: 20 }}
            fontFamily="Poppins"
            color="rgba(0, 0, 0, 0.7)"
          >
            We’ve gathered the most common questions to make your experience
            smooth and stress-free.
          </Typography>
          <Link to={"#"}>
            <Stack
              direction="row"
              color="rgba(33, 59, 156, 1)"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={0.5}
            >
              <Typography fontSize={{ xs: 16, md: 20 }}>More Faqs</Typography>
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </Stack>
          </Link>
        </Stack>

        {/* FAQs */}
          <Stack
      spacing={2}
      py={2}
      minWidth={{ xs: "100%", md: "50%" }}
      maxWidth={{ xs: "100%", md: "50%" }}
    >
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          disableGutters
           sx={{
              border: "none !important",
              outline: "none !important",
              boxShadow: "none !important",
              "&.Mui-focusVisible": {
                outline: "none !important",
                boxShadow: "none !important",
                border: "none !important",
                backgroundColor: "transparent !important",
              },
              "& .MuiAccordionSummary-expandIconWrapper.Mui-focusVisible": {
                outline: "none !important",
                boxShadow: "none !important",
              },
            }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <RemoveIcon sx={{ color: "var(--info-color)" }} />
              ) : (
                <AddIcon sx={{ color: "var(--info-color)" }} />
              )
            }
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              border: "none !important",
              outline: "none !important",
              boxShadow: "none !important",
              "&.Mui-focusVisible": {
                outline: "none !important",
                boxShadow: "none !important",
                border: "none !important",
                backgroundColor: "transparent !important",
              },
              "& .MuiAccordionSummary-expandIconWrapper.Mui-focusVisible": {
                outline: "none !important",
                boxShadow: "none !important",
              },
            }}
          >
            <Typography component="span" fontWeight="bold">
              {item.title}
            </Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
      </Stack>
    </>
  );
}

export default FAQs;
