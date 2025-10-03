import { Stack, Typography,Button ,Box} from '@mui/material'
import React from 'react'
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

function StartingSteps() {
  const steps = [
  {
    number: 1,
    title: "Confirm & Submit Your Form",
    desc: "Once you’ve filled in your details, simply confirm and submit your form to get started. Our team will review your information and connect you with the right tutor to match your learning goals.",
  },
  {
    number: 2,
    title: "Matched with a Tutor",
    desc: "After reviewing your details, we’ll match you with a tutor who best fits your learning style and subject needs. This personalized approach ensures you get the right support.",
    image: "/images/stepsImg.jpg", // replace with your image
  },
  {
    number: 3,
    title: "Trial Lesson",
    desc: "Start your journey with a trial lesson to experience how our tutoring works. It’s a chance to meet your tutor, explore the learning approach, and see how personalized guidance can help you.",
  },
  {
    number: 4,
    title: "Start Your Journey",
    desc: "Take the first step toward smarter learning with us. Whether you’re looking to improve grades, build confidence, or master new skills, our tutors are here to guide you every step of the way.",
  },
];
  return (
    <>
      <Stack direction={['column','column','column','row']} minWidth={'100%'} maxWidth={'100%'} px={[2,3,4,5,7,20]} my={3} justifyContent={'space-evenly'} gap={4}>

        {/* left side text  */}
        <Stack spacing={3} minWidth={['100%','100%','100%','50%']} maxWidth={['100%','100%','100%','50%']} alignItems={['center','center','center','flex-start']} textAlign={['center','center','center','left']} my={3}>
          <Typography color='var(--dark-color)' fontSize={[25,30,35,45,55]} fontWeight={'bold'}>Here’s How Easy It Is to Learn with Us</Typography>
          <Typography color='var(--text-secondary)' fontSize={[20,24,26,30,35]}>Follow these simple steps to start your personalized learning journey</Typography>
          <Button  sx={{color:"rgba(7, 14, 116, 0.84)",mt:10,backgroundColor:"transparent",border:"1px solid rgba(7, 14, 116, 0.84)",maxWidth:"320px",fontSize:18,px:2.5,py:1.5,borderRadius:10,"&:hover":{
      backgroundColor:"rgba(7, 14, 116, 0.84)",color:"var(--text-primary)"
    }}}  endIcon={<Person2RoundedIcon sx={{width:25,height:25}}/>}>Let's Connect</Button>
        </Stack>

        {/* steps    */}

         <Stack
      direction="row"
      spacing={3}
      minWidth={['100%','100%','80%','47%']}
      maxWidth={['100%','100%','80%','47%']}
      sx={{ position: "relative",  mx: "auto", py: 4 }}
    >
      {/* Vertical line */}
      <Box
        sx={{
          position: "absolute",
          left: "20px",
          top: 0,
          bottom: 0,
          width: "2px",
          bgcolor: "#1e40af", // blue line
        }}
      />

      {/* Steps */}
      <Stack spacing={6} sx={{ pl: 4, width: "100%" }}>
        {steps.map((step, index) => (
          <Stack key={index} spacing={2} direction="column" sx={{ position: "relative" }}>
           {/* Bud point aligned with step */}
            <Box
              sx={{
                position: "absolute",
                left: "-45px", // aligns with line
                top: "5px", // aligns with step block
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                bgcolor: "var(--info-color)",
                border: "2px solid white", // makes a nice outline
                zIndex: 2,
              }}
              />
            {/* Number Circle */}
            <Box
              sx={{
                position: "absolute",
                left: "0px",
                top: "-18px",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                bgcolor: "var(--info-color)", // dark blue
                color: "white",
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              {step.number}
            </Box>

            {/* Text */}
            <Stack spacing={1} pt={3} maxWidth={['100%','100%','80%','100%','80%']}>
              <Typography fontWeight={600} fontSize={30}>{step.title}</Typography>
              <Typography fontSize={20} color="text.secondary">
                {step.desc}
              </Typography>
            </Stack>

            {/* image  */}
            {step.image && (
              <Box
                component="img"
                src={step.image}
                alt="step"
                sx={{
                  borderRadius: 10,
                  mt: 1,
                  maxWidth: "100%",
                  objectFit: "cover",
                  
                }}
              />
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>
      </Stack>
    </>
  )
}

export default StartingSteps
