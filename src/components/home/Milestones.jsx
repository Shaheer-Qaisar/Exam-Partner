import React from "react";
import {
  Stack,
  Typography,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import AssignmentIcon from "@mui/icons-material/Assignment";
import CalculateIcon from "@mui/icons-material/Calculate";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function Milestones() {
  const SvgIcon = () => (
    <svg
      fill="white"
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      id="Camada_1"
      version="1.1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path d="M29.7,16c0-1.9-2.2-3.5-5.7-4.5C24.9,8,24.6,5.3,23,4.3C22.6,4.1,22.2,4,21.7,4c-1.5,0-3.5,1.1-5.5,3c-2-1.9-3.9-3-5.5-3   c-0.5,0-0.9,0.1-1.3,0.3C7.9,5.3,7.6,8,8.4,11.5c-3.4,1-5.7,2.7-5.7,4.5c0,1.9,2.2,3.5,5.7,4.5c-0.8,3.5-0.5,6.3,1.1,7.2   c0.4,0.2,0.8,0.3,1.3,0.3c1.5,0,3.5-1.1,5.5-3c2,1.9,3.9,3,5.5,3c0.5,0,0.9-0.1,1.3-0.3c1.6-0.9,1.9-3.7,1.1-7.2   C27.5,19.5,29.7,17.8,29.7,16z M21.7,5.3c0.3,0,0.5,0,0.6,0.2c0.8,0.4,1.1,2,0.8,4.1c-0.1,0.5-0.2,1.1-0.3,1.6   c-1.1-0.3-2.2-0.4-3.5-0.6c-0.7-1-1.4-1.9-2.2-2.7C18.9,6.2,20.6,5.3,21.7,5.3z M19.9,18.1c-0.4,0.7-0.8,1.4-1.3,2   c-0.8,0.1-1.6,0.1-2.4,0.1c-0.8,0-1.6,0-2.4-0.1c-0.4-0.6-0.8-1.3-1.3-2c-0.4-0.7-0.8-1.4-1.1-2.1c0.3-0.7,0.7-1.4,1.1-2.1   c0.4-0.7,0.9-1.4,1.3-2.1c0.8-0.1,1.6-0.1,2.4-0.1c0.8,0,1.6,0,2.4,0.1c0.4,0.6,0.9,1.3,1.3,2.1c0.4,0.7,0.8,1.4,1.1,2.1   C20.7,16.7,20.3,17.4,19.9,18.1z M21.7,17.5c0.3,0.7,0.5,1.4,0.7,2c-0.7,0.2-1.4,0.3-2.1,0.4c0.2-0.4,0.5-0.8,0.7-1.2   C21.3,18.4,21.5,17.9,21.7,17.5L21.7,17.5z M16.2,23.2c-0.5-0.5-1-1.1-1.4-1.7c0.5,0,1,0,1.4,0c0.5,0,1,0,1.4,0   C17.2,22.1,16.7,22.7,16.2,23.2z M12.1,20c-0.7-0.1-1.4-0.2-2.1-0.4c0.2-0.7,0.5-1.4,0.7-2c0.2,0.4,0.4,0.8,0.7,1.2   C11.7,19.2,11.9,19.6,12.1,20L12.1,20z M10.7,14.5c-0.3-0.7-0.5-1.4-0.8-2.1c0.7-0.2,1.4-0.3,2.2-0.4c-0.3,0.4-0.5,0.8-0.8,1.2   C11.2,13.7,11,14.1,10.7,14.5z M16.2,8.8c0.5,0.5,0.9,1.1,1.4,1.6c-0.5,0-0.9,0-1.4,0c-0.5,0-0.9,0-1.4,0   C15.3,9.9,15.8,9.3,16.2,8.8z M21,13.2c-0.3-0.4-0.5-0.8-0.8-1.2c0.8,0.1,1.5,0.2,2.2,0.4c-0.2,0.7-0.5,1.4-0.8,2.1   C21.5,14.1,21.3,13.7,21,13.2z M9.4,9.5c-0.3-2.1,0-3.6,0.8-4.1c0.2-0.1,0.4-0.2,0.6-0.2c1.1,0,2.7,0.9,4.5,2.6   c-0.7,0.8-1.5,1.7-2.2,2.7c-1.2,0.1-2.4,0.3-3.5,0.6C9.5,10.6,9.4,10,9.4,9.5z M7.2,18.7C5.3,17.9,4,16.8,4,16   c0-0.9,1.2-1.9,3.1-2.7c0.5-0.2,1-0.4,1.6-0.5c0.3,1.1,0.7,2.2,1.3,3.3c-0.5,1.1-0.9,2.2-1.2,3.2C8.2,19.1,7.7,18.9,7.2,18.7   L7.2,18.7z M10.1,26.6c-0.8-0.4-1.1-2-0.8-4.1c0.1-0.5,0.2-1.1,0.3-1.7c1.1,0.2,2.2,0.4,3.4,0.5c0.7,1,1.5,1.9,2.2,2.7   c-1.8,1.7-3.4,2.6-4.5,2.6C10.5,26.7,10.3,26.6,10.1,26.6L10.1,26.6z M23.1,22.5c0.3,2.1,0,3.6-0.8,4.1c-0.2,0.1-0.4,0.2-0.6,0.2   c-1.1,0-2.7-0.9-4.5-2.6c0.8-0.8,1.5-1.7,2.2-2.7c1.2-0.1,2.4-0.3,3.4-0.5C22.9,21.4,23,21.9,23.1,22.5L23.1,22.5z M25.3,18.7   c-0.5,0.2-1,0.4-1.6,0.5c-0.3-1-0.7-2.1-1.2-3.2c0.5-1.1,0.9-2.2,1.3-3.3c0.5,0.2,1.1,0.3,1.6,0.5c1.9,0.8,3.1,1.8,3.1,2.7   C28.4,16.8,27.2,17.9,25.3,18.7L25.3,18.7z" />

        <path d="M16.3,18.5c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5S14.9,18.5,16.3,18.5z" />
      </g>
    </svg>
  );
  const cardData = [
    {
      icon: AssignmentIcon,
      title: " Canadian Curriculum",
      descrip1: "Grades K–12 across all provinces.",
      descrip2: "Math, Science, English & French experts.",
      descrip3: " Aligned with provincial standards.",
    },
    {
      icon: SvgIcon,
      title: "IB Curriculum Tutoring",
      descrip1: "Support for IB DP, MYP & PYP.",
      descrip2: "Guidance in Extended Essay & TOK.",
      descrip3: "Subject experts for HL & SL courses.",
    },
    {
      icon: AssignmentIcon,
      title: "SABIS, Canadian & More",
      descrip1: "Core focus on Maths, English & Science.",
      descrip2: "Lesson-by-lesson tutoring support.",
      descrip3: "Targeted help for school assessments.",
    },
    {
      icon: CalculateIcon,
      title: " British Curriculum",
      descrip1: "Covers IGCSE, O-Levels & A-Levels.",
      descrip2: "Expert support for Maths, Sciences & English.",
      descrip3: " Exam-focused prep with past papers.",
    },
    {
      icon: SvgIcon,
      title: "HKDSE",
      descrip1: "Intensive prep for HKDSE core subjects.",
      descrip2: "Mock exams & past paper practice",
      descrip3: "Tailored strategies to boost final scores.",
    },
    {
      icon: CalculateIcon,
      title: "CBSE",
      descrip1: "Classes 6–12 with NCERT guidance.",
      descrip2: "Strong prep for board exams.",
      descrip3: "Maths, Physics, Chemistry & Bio focus.",
    },
  ];
  return (
    <>
      <Stack spacing={8} minWidth={"100%"} maxWidth={"100%"} mt={10} mb={5}>
        {/* top text  */}
        <Stack
          spacing={2}
          textAlign={"center"}
          alignSelf={"center"}
          minWidth={["100%", "70%", "70%", "55%"]}
          maxWidth={["100%", "70%", "70%", "55%"]}
          
        >
          <Typography fontSize={32} fontWeight={550}>
            Explore Our Expertise
          </Typography>
          <Typography fontSize={22} color="rgba(61, 61, 61, 0.88)">
            Our 1-to-1 online tutoring is designed to give every student the
            confidence, clarity, and skills they need to succeed in their exams
            and beyond
          </Typography>
        </Stack>

        <Stack
          direction={["column", "row"]}
          gap={4}
          minWidth={["100%", "100%", "100%", "100%", "95%"]}
          flexWrap={"wrap"}
          flexGrow={3}
          maxWidth={["100%", "100%", "100%", "100%", "95%"]}
          justifyContent={"center"}
          alignSelf={"center"}
          px={[2, 0]}
        >
          {cardData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Stack
                spacing={3}
                key={index}
                boxShadow={12}
                p={4}
                minWidth={["100%", "60%", "42%", "30%", "26%"]}
                maxWidth={["100%", "60%", "42%", "30%", "26%"]}
                borderRadius={8}
                sx={{
                  minHeight: "450px", // fix card height (adjust as needed)
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {/* Top content */}
                <Stack spacing={3}>
                  <IconButton
                    sx={{
                      backgroundColor: "var(--info-color)",
                      borderRadius: 4,
                      p: 1.3,
                      width: 60,
                      height: 60,
                      "&:hover": {
                        backgroundColor: "var(--info-color)",
                      },
                    }}
                  >
                    <IconComponent sx={{ color: "white", fontSize: 35 }} />
                  </IconButton>
                  <Typography
                    color="var(--info-color)"
                    fontSize={24}
                    fontWeight={550}
                  >
                    {item.title}
                  </Typography>

                  {/* list points */}
                  <Stack spacing={2} maxWidth="100%" flexGrow={1}>
                    <Stack direction="row" gap={0.5} alignItems="flex-start">
                      <DoubleArrowIcon
                        sx={{ color: "rgba(58, 56, 56, 0.88)" }}
                      />
                      <Typography mt={-0.3} fontSize={20}>
                        {item.descrip1}
                      </Typography>
                    </Stack>
                    <Stack direction="row" gap={0.5} alignItems="flex-start">
                      <DoubleArrowIcon
                        sx={{ color: "rgba(58, 56, 56, 0.88)" }}
                      />
                      <Typography mt={-0.3} fontSize={20}>
                        {item.descrip2}
                      </Typography>
                    </Stack>
                    <Stack direction="row" gap={0.5} alignItems="flex-start">
                      <DoubleArrowIcon
                        sx={{ color: "rgba(58, 56, 56, 0.88)" }}
                      />
                      <Typography mt={-0.3} fontSize={20}>
                        {item.descrip3}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                {/* Bottom aligned Read More */}
                <Stack direction="row" gap={1} alignItems="center">
                  <Typography color="var(--info-color)" fontSize={22}>
                    Read More
                  </Typography>
                  <ArrowForwardIcon sx={{ color: "var(--info-color)" }} />
                </Stack>
              </Stack>
            );
          })}
        </Stack>
         <Button  sx={{backgroundColor:"var(--info-color)",color:"var(--text-primary)",maxWidth:"320px",fontSize:18,alignSelf:"center",px:2.5,py:1.5,borderRadius:10,border:"1px solid transparent","&:hover":{
              color:"var(--info-color)",backgroundColor:"transparent",border:"1px solid var(--info-color)"
            }}}  endIcon={<Person2RoundedIcon sx={{width:25,height:25}}/>}>Request A Tutor</Button>
      </Stack>
    </>
  );
}

export default Milestones;
