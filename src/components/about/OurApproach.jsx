import { Stack, Typography } from "@mui/material";
import React from "react";

function OurApproach() {
    const cardData=[
        {
            number:"1",
            title:"Understand the student.",
            description:"We believe every student learns differently. That’s why we take the time to understand their strengths."
        },
         {
            number:"2",
            title:"Plan a clear path. ",
            description:"Once we understand the student, we design a clear and structured learning plan tailored to their goals."
        },
         {
            number:"3",
            title:"Teach with connection.",
            description:"We go beyond memorization by teaching in ways that truly connect with students.  Interactive methods, and explanations."
        },
         {
            number:"4",
            title:"Track & share progress.",
            description:"We believe progress should be visible and celebrated. That’s why we regularly track each student’s performance."
        },

    ]
  return (
    <>
     <Stack
  direction={["column", "column", "row"]}
  minWidth="100%"
  maxWidth="100%"
  gap={6}
  px={{ xs: 2, sm: 4, md: 2, lg: 10 }}
  alignItems="center"
>
  {/* Left section */}
  <Stack spacing={3} maxWidth={["100%", "100%", "50%", "40%"]}>
    <Stack direction="row" gap={1.5} alignItems="center">
      <svg
        width="15"
        height="17"
        viewBox="0 0 15 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5026 4.90658C14.3129 2.554 15.388 1.36174 14.8771 1.17012C14.6109 1.07432 14.4939 1.0956 14.0255 1.31915C13.1206 1.76624 9.8313 4.57658 9.8313 4.90658C9.8313 5.36432 10.9384 5.37496 11.5026 4.90658Z"
          fill="var(--info-color)"
        />
        <path
          d="M4.12574 4.99165C4.47703 4.75746 4.45574 4.71487 3.09317 3.23521C2.3693 2.43677 1.77322 1.93645 1.33677 1.74484C0.740643 1.47871 0.453215 1.84067 0.687407 2.13873C2.68865 4.71488 3.51897 5.39616 4.12574 4.99165Z"
          fill="var(--info-color)"
        />
        <path
          d="M13.5998 8.46198C12.9504 8.27037 9.62923 7.21651 9.3844 7.1207C9.2673 7.07812 9.18214 6.86522 9.13956 6.50328C8.78827 3.79943 8.23462 1.02099 7.98978 0.712285C7.80882 0.478093 7.1914 0.552609 7.02108 0.818736C6.85076 1.08486 6.06302 3.77814 5.59463 5.73684L5.28603 7.01425C-0.760427 8.93037 -1.09045 8.88779 1.64534 9.72875L4.06185 10.4739C5.43506 10.8997 5.46689 10.9102 5.54141 11.2509C5.64786 11.7406 6.33979 14.1252 6.60592 15.2642C7.17011 17.7126 8.31989 16.201 9.33117 11.6449L9.56536 10.6016C9.6931 10.5804 10.502 10.5058 13.9936 9.75004C14.792 9.56907 14.5578 8.73875 13.5998 8.46198ZM12.0881 8.98359C12.003 9.05811 9.67171 9.6223 9.21397 9.6223C8.66042 9.6223 8.53268 9.88843 7.90462 12.39C7.48946 14.04 7.45763 14.0718 7.22344 13.1138C6.93602 11.9109 6.35044 10.5058 6.27592 10.1758C6.21205 9.87778 5.61593 9.66488 3.30594 9.11133C2.14568 8.83456 1.96471 8.73876 2.4011 8.61101C2.944 8.45134 5.55205 7.59973 5.85012 7.59973C6.13753 7.59973 6.38237 7.38683 6.46753 7.06748L7.29785 3.83136C7.44688 3.26717 7.44699 3.26717 7.86215 5.47071C8.34118 7.95102 8.28785 7.84446 9.05429 8.00414C10.0124 8.20639 12.184 8.89843 12.0881 8.98359Z"
          fill="var(--info-color)"
        />
        <path
          d="M10.1506 11.8152C10.1506 12.0494 12.9609 14.8916 13.3548 15.0513C14.1851 15.3919 14.398 14.9447 13.738 14.2315C11.9603 12.2834 10.1506 11.07 10.1506 11.8152Z"
          fill="var(--info-color)"
        />
        <path
          d="M1.95398 12.4965C-0.0898746 13.8803 -0.324078 14.1997 0.697852 14.1997C1.19817 14.1997 4.35972 12.0068 4.26392 11.7194C4.11489 11.2723 3.40167 11.5065 1.95398 12.4965Z"
          fill="var(--info-color)"
        />
      </svg>
      <Typography
        color="var(--info-color)"
        fontSize={25}
        fontWeight="bold"
      >
        Our Approach
      </Typography>
    </Stack>

    <Typography fontSize={[16,18,20,22]}>
      At My Exam Partner, we go beyond helping students pass exams—we help
      them thrive. By focusing on understanding, critical thinking, and
      confidence, we prepare students with the tools they need to excel
      academically and carry those skills into every stage of life.
    </Typography>
    <Typography fontSize={[16,18,20,22]} fontWeight="bold">
      At My Exam Partner, we’re not just preparing kids for exams. We’re
      preparing them for success that lasts a lifetime.
    </Typography>
  </Stack>

  {/* Cards Section */}
  <Stack
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "repeat(2, 1fr)", 
        sm: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)", 
      },
      gap: { xs: 2, sm: 3, md: 4 },
      justifyItems: "center",
      width: "100%",
    }}
    maxWidth={['100%','100%',"55%"]}
    minWidth={['100%','100%',"55%"]}
  >
    {cardData.map((item, index) => (
      <Stack
        key={index}
        spacing={1.5}
        px={{ xs: 2, sm: 3 }}
        py={{ xs: 2, sm: 3 }}
        border={1}
        borderRadius={6}
        maxWidth={['100%','100%',330]}
        sx={{
          backgroundColor: "white",
        }}
      >
        <Typography
          fontSize={{ xs: 14, sm: 15, md: 16 }}
          color="var(--text-primary)"
          width={40}
          height={40}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="50%"
          sx={{ backgroundColor: "var(--info-color)" }}
          py={1}
        >
          {item.number}
        </Typography>

        <Typography
          fontSize={{ xs: 16, sm: 18, md: 18,lg:20 }}
          fontWeight="bold"
        >
          {item.title}
        </Typography>

        <Typography
          fontSize={{ xs: 12, sm: 13, md: 14 }}
          color="var(--text-secondary)"
        >
          {item.description}
        </Typography>
      </Stack>
    ))}
  </Stack>
</Stack>

    </>
  );
}

export default OurApproach;
