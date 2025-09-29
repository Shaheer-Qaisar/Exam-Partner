import { IconButton, Stack, Typography,Button } from '@mui/material'
import React from 'react'
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';

function Booking() {
  const pointsData=[
    {
      info:"Top Tutors – Subject experts, native speakers, and examiners."
    },
    {
      info:" Specialized Teaching – Focus on Maths, Sciences, and English."
    },
    {
      info:"Trusted Results – Proven success in boosting grades & student confidence."
    },
    {
      info:"Safe & Flexible – Secure online learning from anywhere, anytime."
    },
  ]
  return (
    <>
     <Stack my={12} direction={['column','column','column','row','row']} justifyContent={'space-between'} minWidth={'100%'} maxWidth={'100%'} sx={{backgroundImage:"url(/images/tutors.png)",backgroundAttcahment:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"400px"}}  >

      {/* left section text  */}
      <Stack spacing={3} minWidth={['100%','100%','80%','50%','40%']} maxWidth={'40%'} py={6} pl={[2,2,2,2,18]} pr={[2,2,2,2,0]} alignSelf={'center'}>
        <Typography fontSize={35} fontWeight={550} color='var(--text-primary)' >Why Choose My Exam Partner</Typography>
        <Typography fontSize={25} color='var(--text-primary)'>We are not just another tutoring service — we are your academic partners:</Typography>

        {/* points  */}
        <Stack spacing={2}>
          {
            pointsData.map((item,index)=>{
              return(
                <Stack key={index} direction={'row'} alignItems={'flex-start'} gap={1.5}>
                <IconButton sx={{backgroundColor:"white",p:0.5,mt:0.7}}>
                  <StarRoundedIcon sx={{fontSize:18}}/>
                </IconButton>
                  <Typography fontSize={22}  color='var(--text-primary)'>{item.info}</Typography>
                </Stack>
              )
            })
          }
        </Stack>
         <Button  sx={{color:"var(--text-primary)",mt:10,backgroundColor:"transparent",border:"1px solid var(--text-primary)",maxWidth:"240px",fontSize:17,px:2.5,py:1.5,borderRadius:10,"&:hover":{
      backgroundColor:"var(--info-color)",color:"var(--text-primary)"
    }}}  >Book Your Tutor</Button>
    </Stack>

    {/* right section img  */}
    <Stack
  minWidth={['100%','100%','100%','55%','55%']}
  maxWidth={['100%','100%','100%','55%','55%']}
  alignSelf="flex-end"
  sx={{
    '@media (max-width:600px)': {
      display: 'none',
    },
  }}
>
  <img
    src="/images/scholar.jpg"
    alt="img"
    style={{
      minHeight: {
        xs: "300px",
        sm: "350px",
        md: "400px",
        lg: "450px",
        xl: "600px",
      },
      maxHeight: {
        xs: "300px",
        sm: "350px",
        md: "400px",
        lg: "450px",
        xl: "600px",
      },
      borderRadius: 8,
    }}
  />
</Stack>

     
     </Stack>
    </>
  )
}

export default Booking
