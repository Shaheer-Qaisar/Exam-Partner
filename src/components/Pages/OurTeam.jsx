import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
function OurTutors() {
  const theme = useTheme();
  const isBelow900 = useMediaQuery(theme.breakpoints.down("md"));

  const cardData = [
    {
      image: "/images/tutor1.png",
      name: "Mr. James",
      field: "– IGCSE/GCSE Math Specialist ",
      experience: "(+10 years exp.)",
    },
    {
      image: "/images/tutor2.png",
      name: "Ms. Sarah",
      field: "IB English & TOK Teacher  ",
      experience: "(Native English Speaker)",
    },
    {
      image: "/images/tutor1.png",
      name: "Dr. Ahmed",
      field: "Chemistry Examiner ",
      experience: "(PhD, 12+ years exp.)",
    },
  ];

  return (
    <>
    <Stack spacing={15} my={8}>
    <Button  sx={{backgroundColor:"var(--info-color)",color:"var(--text-primary)",maxWidth:"320px",fontSize:18,alignSelf:"center",px:2.5,py:1.5,borderRadius:10,border:"1px solid transparent","&:hover":{
      color:"var(--info-color)",backgroundColor:"transparent",border:"1px solid var(--info-color)"
    }}}  endIcon={<Person2RoundedIcon sx={{width:25,height:25}}/>}>Request A Tutor</Button>
       <Stack
        spacing={4}
        p={3}
        minWidth={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
        maxWidth={"100%"}
        sx={{
          backgroundImage: "url(/images/tutors.png)",
          backgroundPosition: isBelow900 ? "top center" : "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Typography fontSize={30} color="white" fontWeight={"SemiBold"}>
          Meet Our Tutors
        </Typography>

        {/* Cards container */}
        <Stack
          direction={"row"}
          justifyContent={"center"}
          gap={[3,3,3,5,8]}
          flexWrap={"wrap"} // makes responsive
        >
          {cardData.map((item, index) => {
            return (
              <Stack
                key={index}
                spacing={2}
                px={2}
                py={4}
                minWidth={"290px"} // keeps card readable
                maxWidth={"360px"}
                flexGrow={1}
                borderRadius={5}
                alignItems={"center"}
                sx={{ backgroundColor: "white" }}
                mb={[0,0,-10]}
                boxShadow={6}
              >
                <img
                  src={item.image}
                  alt="tutor"
                  height={140}
                  width={140}
                  style={{ borderRadius: "50%" }}
                />
                <Typography fontSize={25} color="black" fontWeight={"SemiBold"}>
                  {item.name}
                </Typography>
                <Stack spacing={0} textAlign={"center"}>
                  <Typography fontSize={16} color="rgba(0, 0, 0, 0.7)">
                    {item.field}
                  </Typography>
                  <Typography fontSize={15} fontWeight={"bold"} color="black">
                    {item.experience}
                  </Typography>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
      </Stack>

      <Button  sx={{color:"var(--info-color)",mt:10,backgroundColor:"transparent",border:"1px solid var(--info-color)",maxWidth:"320px",fontSize:18,alignSelf:"center",px:2.5,py:1.5,borderRadius:10,"&:hover":{
      backgroundColor:"var(--info-color)",color:"var(--text-primary)"
    }}}  endIcon={<Person2RoundedIcon sx={{width:25,height:25}}/>}>See More Tutors</Button>
    </Stack>
     
    </>
  );
}

export default OurTutors;
