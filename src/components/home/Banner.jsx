import React, { useState } from "react";
import {
  Stack,
  Typography,
  TextField,
  MenuItem,
  Button,
  Select,
  FormControl,
  Box,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";

function Banner() {
  const widgets = [
    { icon: "/images/certified.png", title: "Certified and Verified Tutors" },
    { icon: "/images/examination.png", title: "Examination Techniques" },
    { icon: "/images/progress.png", title: "Track Your Progress" },
    { icon: "/images/scheduled.png", title: "Customized Scheduled" },
    { icon: "/images/attention.png", title: "1:1 Individual Attention" },
    { icon: "/images/pricing.png", title: "Affordable Pricing" },
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

  const curriculumOptions = ["IGCSE", "IB", "GCSE", "SABIS"];
  const gradeOptions = Array.from({ length: 41 }, (_, i) => 60 + i);

  const validate = () => {
    const newErrors = {};
    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{11}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 11 digits.";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.curriculum) {
      newErrors.curriculum = "Curriculum is required.";
    }
    if (!formData.grade) {
      newErrors.grade = "Grade is required.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Booking Confirmed!", { position: "top-center" });
      setFormData({
        name: "",
        phone: "",
        email: "",
        curriculum: "",
        grade: "",
      });
      setErrors({});
    }
  };

  return (
    <>
      <Stack gap={0} minWidth="100%" maxWidth="100%">
        <Stack
  direction={{ xs: "column", lg: "row" }}
  alignItems="center"
  justifyContent={{ xs: "center", lg: "space-between" }}
  py={3}
  px={{ xs: 2, sm: 4, md: 5, lg: 10 }}
  width="100%"
  gap={[3,3,3,3]}
  sx={{
    overflow: "hidden", // prevents form overflow
    background:
      "linear-gradient(to right, #EB7D7E, #B097BE, #6FD4E6)",
    textAlign: { xs: "center", md: "center", lg: "left" }, // center content <1200
  }}
>
  {/* Left section */}
  <Stack
    gap={4}
    minWidth={{ xs: "100%", md: "60%",lg:"50%" }}
    maxWidth={{ xs: "100%", md: "60%",lg:"50%" }}
    justifyContent="center"
    alignItems={{ xs: "center", lg: "flex-start" }} // center items <1200
  >
    {/* Titles */}
    <Stack gap={-1}>
      <Typography
        fontSize={25}
        color="var(--text-primary)"
        fontWeight={550}
      >
        Study Steady-Be Exam Ready
      </Typography>
      <Typography
        fontSize={{ xs: 25, sm: 35, md: 50, lg: 65, xl: 85 }}
        color="var(--text-primary)"
       
        fontWeight={550}
        sx={{ wordSpacing: "4px" }}
      >
        As Low As $13/hr - Start Your Free Trial Class Today
      </Typography>
      <Typography
        fontSize={22}
        color="var(--text-primary)"
       
        fontWeight={550}
      >
        World-Class Tutors. Personalized Lessons.
        <br />
        Exam Techniques. All Curricula Covered.
      </Typography>
    </Stack>

    {/* Widgets */}
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)", // 2 per row below 600
          sm: "repeat(3, 1fr)", // 3 per row from 600+
        },
        justifyItems: { xs: "center", lg: "start" }, // center <1200
      }}
      gap={[2]}
    >
      {widgets.map((item, index) => (
        <Stack
          key={index}
          direction="row"
          alignItems="center"
          gap={1.5}
          sx={{
            backgroundColor: "var(--text-primary)",
            borderRadius: 3,
            p: 1.5,
              width: {xs:"180px",sm:"200px"},
          }}
        >
          <img src={item.icon} alt="Icon" style={{ height: 40, width: 40 }} />
          <Typography fontSize={{ xs: 14, sm: 16 }} fontFamily="Quicksand">
            {item.title}
          </Typography>
        </Stack>
      ))}
    </Stack>

    {/* Flags */}
    <Stack
      justifyContent="center"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(4, 1fr)",
          sm: "repeat(4, 1fr)",
          md: "repeat(8, 1fr)",
          lg: "repeat(8, 1fr)",
        },
        columnGap: 2.5,
        rowGap: 4,
      }}
    >
      {IconData.map((item, index) => (
        <Box key={index} display="flex" justifyContent="center">
          <img
            src={item.icon}
            alt="icons"
            style={{ height: 60, width: 60, borderRadius: "50%" }}
          />
        </Box>
      ))}
    </Stack>
  </Stack>

          {/* Booking form */}
          <Toaster />
          <Stack
            component="form"
    onSubmit={handleSubmit}
    spacing={3}
    sx={{
      backgroundColor: "white",
      borderRadius: 14,
      p: 5,
      boxShadow: 5,
      flexShrink: 0,
      mt: { xs: 5, md: 5, lg: 0 }, // add top space below 1200px
    }}
    width={{ xs: "100%", sm: "90%", md: "70%", lg: "40%" }}
    alignSelf={{ xs: "center", lg: "flex-start" }} // center <1200
          >
            <Typography
              fontSize={{ xs: 25, sm: 28, md: 32, lg: 36 }}
              textAlign="center"
              alignSelf="center"
              fontWeight="bold"
             
              width={['100%','90%','80%','95%','65%']}
            >
              BOOK YOUR FREE TRIAL NOW
            </Typography>

            {/* Form fields */}
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Phone Number", name: "phone", type: "text" },
              { label: "Email", name: "email", type: "text" },
            ].map((field, i) => (
              <Stack key={i} spacing={0.5}>
                <Typography
                  fontSize={16}
                  fontWeight={500}
                  fontFamily="Quicksand"
                >
                  {field.label}
                </Typography>
                <TextField
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  variant="standard"
                  InputProps={{ disableUnderline: true }}
                  sx={{
                    backgroundColor: "rgba(166, 169, 172, 0.1)",
                    p: 1,
                    borderRadius: 2,
                  }}
                />
                {errors[field.name] && (
                  <Typography color="red" fontSize={12} fontFamily="Quicksand">
                    {errors[field.name]}
                  </Typography>
                )}
              </Stack>
            ))}

            {/* Curriculum */}
            <Stack spacing={0.5}>
              <Typography fontSize={16} fontWeight={500} fontFamily="Quicksand">
                Curriculum
              </Typography>
              <FormControl
                fullWidth
                variant="standard"
                sx={{
                  "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                    display: "none",
                  },
                  backgroundColor: "rgba(166, 169, 172, 0.1)",
                  p: 1,
                  borderRadius: 2,
                }}
              >
                <Select
                  value={formData.curriculum}
                  onChange={(e) =>
                    setFormData({ ...formData, curriculum: e.target.value })
                  }
                  disableUnderline
                >
                  {curriculumOptions.map((c, index) => (
                    <MenuItem key={index} value={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {errors.curriculum && (
                <Typography color="red" fontSize={12} fontFamily="Quicksand">
                  {errors.curriculum}
                </Typography>
              )}
            </Stack>

            {/* Grade */}
            <Stack spacing={0.5}>
              <Typography fontSize={16} fontWeight={500} fontFamily="Quicksand">
                Grade (%)
              </Typography>
              <FormControl
                fullWidth
                variant="standard"
                sx={{
                  "& .MuiInput-underline:before, & .MuiInput-underline:after": {
                    display: "none",
                  },
                  backgroundColor: "rgba(166, 169, 172, 0.1)",
                  p: 1,
                  borderRadius: 2,
                }}
              >
                <Select
                  value={formData.grade}
                  onChange={(e) =>
                    setFormData({ ...formData, grade: e.target.value })
                  }
                  disableUnderline
                  MenuProps={{
                    PaperProps: { style: { maxHeight: 200 } },
                  }}
                >
                  {gradeOptions.map((g, index) => (
                    <MenuItem key={index} value={g}>
                      {g}%
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {errors.grade && (
                <Typography color="red" fontSize={12} fontFamily="Quicksand">
                  {errors.grade}
                </Typography>
              )}
            </Stack>

            <Typography color="var(--dark-color)" fontSize={20}>
              Your journey to exam success starts here —
              <br />
              request your free quote now.
            </Typography>

            <Button
              type="submit"
              sx={{
                backgroundColor: "rgba(248, 58, 24, 0.74)",
                color: "white",
                borderRadius: 2,
                py: 1,
                fontWeight: "bold",
                width: "100%",
                fontSize: 16,
              }}
            >
              Book Now
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Banner;
