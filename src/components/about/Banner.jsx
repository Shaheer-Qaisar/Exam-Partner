import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

function Banner() {
  return (
    <>
      <Stack
        sx={{
          background: "linear-gradient(135deg, #EB7D7E, #B097BE, #6FD4E6)",
        }}
        px={[2,5]}
        minWidth={"100%"}
        maxWidth={"100%"}
        alignItems={'center'}
        alignSelf={'center'}
        justifySelf={'center'}
        spacing={3}
        py={[8,12,15,20]}
      >
        <Typography fontSize={[30,40,50,75]} fontWeight={550} color="var(--text-primary)" textAlign={'center'}>About Us</Typography>
        <Typography fontSize={[16,18]} color="var(--text-primary)" maxWidth={'700px'} textAlign={'center'}>At our platform, we connect students with skilled tutors who are passionate about teaching. We focus on creating a personalized learning experience that fits every student’s pace and goals. </Typography>
        <Button  sx={{backgroundColor:"rgba(255, 96, 74, 1)",color:"var(--text-primary)",py:{xs:1.5,sm:1.5,md:2},px:{xs:1.5,sm:2,md:3},borderRadius:10,fontSize:{xs:13,sm:15,md:18}}} endIcon={<Person2RoundedIcon sx={{height:{xs:20,sm:22,md:25},width:{xs:20,sm:22,md:25}}}/>}>Let's Connect</Button>
      </Stack>
    </>
  );
}

export default Banner;
