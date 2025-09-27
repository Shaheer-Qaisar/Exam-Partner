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
     <Stack my={3} direction={'row'} justifyContent={'space-between'} sx={{backgroundImage:"url(/images/tutors.png)",backgroundPosition:"fixed",backgroundSize:"cover",backgroundRepeat:"no-repeat",minHeight:"500px"}} py={8} px={18}>

      {/* left section text  */}
      <Stack spacing={3} minWidth={'40%'} maxWidth={'40%'} >
        <Typography fontSize={40} fontWeight={550} color='var(--text-primary)' >Why Choose My Exam Partner</Typography>
        <Typography fontSize={30} color='var(--text-primary)'>We are not just another tutoring service — we are your academic partners:</Typography>

        {/* points  */}
        <Stack spacing={2}>
          {
            pointsData.map((item,index)=>{
              return(
                <Stack key={index} direction={'row'} alignItems={'flex-start'} gap={1.5}>
                <IconButton sx={{backgroundColor:"white",p:0.5,mt:0.7}}>
                  <StarRoundedIcon sx={{fontSize:18}}/>
                </IconButton>
                  <Typography fontSize={23}  color='var(--text-primary)'>{item.info}</Typography>
                </Stack>
              )
            })
          }
        </Stack>
         <Button  sx={{color:"var(--text-primary)",mt:10,backgroundColor:"transparent",border:"1px solid var(--text-primary)",maxWidth:"290px",fontSize:18,px:2.5,py:1.5,borderRadius:10,"&:hover":{
      backgroundColor:"rgba(7, 14, 116, 0.84)",color:"var(--text-primary)"
    }}}  endIcon={<Person2RoundedIcon sx={{width:25,height:25}}/>}>Book Your Tutors</Button>
    </Stack>

    {/* right section img  */}
    <Stack minWidth={'55%'} maxWidth={'55%'}  >
       <img src='/images/scholar.jpg' alt='img' style={{minHeight:"600px",borderRadius:8}}/>
    </Stack>
     
     </Stack>
    </>
  )
}

export default Booking
