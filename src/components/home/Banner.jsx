import React from "react";
import {
  Stack,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
  FormControl,
  Select,
  InputLabel,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
function Banner() {
  
  const boxData = [
    { img: "/images/certified.png", text: "Certified & Verified Tutors" },
    { img: "/images/examination.png", text: "Examination Techniques" },
    { img: "/images/progress.png", text: "Track Your Progress" },
    { img: "/images/scheduled.png", text: "Customized Scheduled" },
    { img: "/images/attention.png", text: "1:1 Individual Attention" },
    { img: "/images/pricing.png", text: "Affordable Pricing" },
  ];

const IconData = [
    { icon: "/images/canada.png" },
    { icon: "/images/logo.png" },
    { icon: "/images/uk.png" },
    { icon: "/images/canada.png" },
    { icon: "/images/logo.png" },
    { icon: "/images/uk.png" },
    { icon: "/images/logo.png" },
    { icon: "/images/uk.png" },
  ];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    curriculum: "",
    grade: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? "" : "Name is required.";
    temp.phone = /^\d{7,15}$/.test(formData.phone)
      ? ""
      : "Valid phone is required.";
    temp.email = /\S+@\S+\.\S+/.test(formData.email)
      ? ""
      : "Valid email is required.";
    temp.curriculum = formData.curriculum ? "" : "Curriculum is required.";
    temp.grade = formData.grade ? "" : "Grade is required.";
    setErrors(temp);
    return Object.values(temp).every((x) => x === "");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Form submitted!", { position: "top-center" });
      setFormData({
        name: "",
        phone: "",
        email: "",
        curriculum: "",
        grade: "",
      });
    }
  };

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent={{ xs: "flex-start", md: "space-evenly" }} // Important fix
      gap={5}
      px={3}
      py={3}
      sx={{
        width: "100%",
        height: { xs: "auto", md: "110vh" }, // Responsive height
        // overflow: "hidden",
        boxSizing: "border-box",
         background: "linear-gradient(to right, #EB7D7E, #B097BE, #6FD4E6)",
      }}
    >
      {/* LEFT SECTION */}
      <Stack
        flex={1}
        spacing={3}
        alignItems={['center','center',"flex-start"]}
        justifyContent="center"
        sx={{
          width: "100%",
          maxWidth: "700px",
          boxSizing: "border-box",
        }}
        textAlign={['center','center','left']}
      >
        {/* Heading Section */}
        <Box>
          <Typography fontSize={{ xs: 14, sm: 16, md: 18 }} color="var(--text-primary)">
            Study Steady - Be Exam Ready
          </Typography>

          <Typography
           color="var(--text-primary)"
            fontWeight="bold"
            sx={{
              fontSize: {
                xs: 24,
                sm: 30,
                md: 42,
                lg: 54,
              },
              lineHeight: 1.2,
              my: 1,
            }}
          >
            As Low As $13/hr – <br />
            Start Your Free Trial <br /> Class Today
          </Typography>

          <Typography  color="var(--text-primary)" fontSize={{ xs: 14, sm: 16, md: 18 }}>
            World-Class Tutors. Personalized Lessons.
            <br />
            Exam Techniques. All Curricula Covered.
          </Typography>
        </Box>

        {/* Feature Boxes */}
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          maxWidth={["100%",'100%','90%','80%']}
          gridTemplateColumns={{
            xs: "repeat(2, 1fr)", // 2 columns on mobile
            sm: "repeat(3, 1fr)", // 3 columns on tablet and larger
          }}
        >
          {boxData.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              gap={1}
              p={1.5}
              borderRadius={2}
              sx={{
                backgroundColor:"var(--text-primary)",
                flex: "1 1 auto",
              }}
              width={[120, 200, 150]}
            >
              <img
                src={item.img}
                alt="icon"
                style={{ height: 32, width: 32 }}
              />
              <Typography  fontSize={{ xs: 12, sm: 14 }}>{item.text}</Typography>
            </Stack>
          ))}
        </Stack>
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={2}
          maxWidth="100%"
          gridTemplateColumns={{
            xs: "repeat(3, 1fr)", // 2 columns on mobile
            md: "repeat(4, 1fr)", // 3 columns on tablet and larger
            lg: "repeat(4,1fr)",
          }}
          justifyContent={['center','center','flex-start']}
        >
          {IconData.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="center"
              gap={1}
             
              sx={{
                maxWidth: 70,
                flex: "1 1 auto",
              }}
              
            >
              <img
                src={item.icon}
                alt="icon"
                style={{ height: 52, width: 52, borderRadius:"50%"}}
              />
            </Stack>
          ))}
        </Stack>
      </Stack>

      {/* RIGHT SECTION – FORM */}
      <Box
        flex={1}
        width="100%"
        maxWidth={[400,400,400,400,500]}
        borderRadius={8}
        px={5}
        py={3}
        sx={{
          backgroundColor: "white",
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        maxHeight={'100%'}
      >
        <Typography
          fontSize={{ xs: 16, md: 20 }}
          textAlign="center"
          fontWeight={600}
          mb={2}
          maxWidth={200}
          alignSelf={'center'}
        >
          BOOK YOUR FREE TRIAL NOW
        </Typography>

         <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={1}
    >
      <Toaster />

      {/* Name */}
      <Box>
        <Typography fontSize={14} fontWeight={500}>
          Name
        </Typography>
        <TextField
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          variant="filled"
          InputProps={{
            disableUnderline: true,
            sx: { fontSize: { xs: 14, sm: 16 }, px: 1, height: 40 },
          }}
        />
        {errors.name && (
          <Typography color="error" fontSize={12}>
            {errors.name}
          </Typography>
        )}
      </Box>

      {/* Phone */}
      <Box>
        <Typography fontSize={14} fontWeight={500}>
          Phone Number
        </Typography>
        <TextField
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
          variant="filled"
          InputProps={{
            disableUnderline: true,
            sx: { fontSize: { xs: 14, sm: 16 }, px: 1, height: 40 },
          }}
        />
        {errors.phone && (
          <Typography color="error" fontSize={12}>
            {errors.phone}
          </Typography>
        )}
      </Box>

      {/* Email */}
      <Box>
        <Typography fontSize={14} fontWeight={500}>
          Email
        </Typography>
        <TextField
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          variant="filled"
          InputProps={{
            disableUnderline: true,
            sx: { fontSize: { xs: 14, sm: 16 }, px: 1, height: 40 },
          }}
        />
        {errors.email && (
          <Typography color="error" fontSize={12}>
            {errors.email}
          </Typography>
        )}
      </Box>

      {/* Curriculum Dropdown */}
      <Box>
        <Typography fontSize={14} fontWeight={500}>
          Curriculum
        </Typography>
        <FormControl fullWidth variant="filled">
          <Select
            name="curriculum"
            value={formData.curriculum}
            onChange={handleChange}
            disableUnderline
            sx={{ height: 40, fontSize: { xs: 14, sm: 16 }, px: 1 }}
          >
            <MenuItem value="IGCSE">IGCSE</MenuItem>
            <MenuItem value="IB">IB</MenuItem>
            <MenuItem value="A-Levels">A-Levels</MenuItem>
            <MenuItem value="SAT">SAT</MenuItem>
          </Select>
        </FormControl>
        {errors.curriculum && (
          <Typography color="error" fontSize={12}>
            {errors.curriculum}
          </Typography>
        )}
      </Box>

      {/* Grades Dropdown */}
      <Box>
        <Typography fontSize={14} fontWeight={500}>
          Grade (%)
        </Typography>
        <FormControl fullWidth variant="filled">
          <Select
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            disableUnderline
            MenuProps={{
              PaperProps: {
                style: { maxHeight: 150, overflowY: "auto" },
              },
            }}
            sx={{ height: 40, fontSize: { xs: 14, sm: 16 }, px: 1 }}
          >
            {Array.from({ length: 41 }, (_, i) => 60 + i).map((val) => (
              <MenuItem key={val} value={val}>
                {val}%
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {errors.grade && (
          <Typography color="error" fontSize={12}>
            {errors.grade}
          </Typography>
        )}
      </Box>

      <Typography fontSize={12} color="text.secondary">
        Your journey to exam success starts here — request your free quote now.
      </Typography>

      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#FF6A4D",
          borderRadius: 2,
          textTransform: "none",
          fontWeight: 600,
          py: 1.2,
          fontSize: { xs: 14, sm: 16 },
          "&:hover": { backgroundColor: "#ff5533" },
        }}
      >
        Book Now
      </Button>
    </Box>
      </Box>
    </Stack>
  );
}

export default Banner;
