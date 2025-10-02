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
        p={5}
        minWidth={"100%"}
        maxWidth={"100%"}
        alignItems={'center'}
        alignSelf={'center'}
        justifySelf={'center'}
        spacing={3}
        py={25}
      >
        <Typography fontSize={75} fontWeight={550} color="var(--text-primary)">About Us</Typography>
        <Typography fontSize={18} color="var(--text-primary)" maxWidth={'700px'} textAlign={'center'}>At our platform, we connect students with skilled tutors who are passionate about teaching. We focus on creating a personalized learning experience that fits every student’s pace and goals. </Typography>
        <Button sx={{backgroundColor:"rgba(255, 96, 74, 1)",color:"var(--text-primary)",py:2,px:3,borderRadius:10,fontSize:18}} endIcon={<Person2RoundedIcon sx={{height:25,width:25}}/>}>Let's Connect</Button>
      </Stack>
    </>
  );
}

export default Banner;
