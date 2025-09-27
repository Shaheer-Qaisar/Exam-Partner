import React from "react";
import {
  Stack,
  Typography,
  TextField,
  MenuItem,
  Button,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
function Banner() {
  const widgets = [
    {
      icon: "/images/certified.png",
      title: "Certified and Verified Tutors",
    },
    {
      icon: "/images/examination.png",
      title: "Examination Techniques",
    },
    {
      icon: "/images/progress.png",
      title: "Track Your Progress",
    },
    {
      icon: "/images/scheduled.png",
      title: "Customized Scheduled",
    },
    {
      icon: "/images/attention.png",
      title: "1:1 Individual Attention",
    },
    {
      icon: "/images/pricing.png",
      title: "Affordable Pricing",
    },
  ];
  const IconData = [
    {
      icon: "/images/canada.png",
    },
    {
      icon: "/images/logo.png",
    },
    {
      icon: "/images/uk.png",
    },
    {
      icon: "/images/canada.png",
    },
    {
      icon: "/images/logo.png",
    },
    {
      icon: "/images/uk.png",
    },
    {
      icon: "/images/logo.png",
    },
    {
      icon: "/images/uk.png",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    curriculum: "",
    grade: "",
  });

  const [errors, setErrors] = useState({});

  // options
  const curriculumOptions = ["IGCSE", "IB", "GCSE", "SABIS"];
  const gradeOptions = Array.from({ length: 41 }, (_, i) => 60 + i); // 60–100

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Booking Confirmed!", {
        position: "top-center",
      });

      // Reset form
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
      <Stack gap={0} minWidth={"100%"} maxWidth={"100%"}>
        <Stack
          direction={"row"}
          gap={2}
          sx={{ backgroundColor: "rgba(48, 178, 243, 0.15)" }}
          p={1}
          alignItems={"center"}
          justifyContent={"center"}
          maxWidth={"100%"}
        >
          <img
            src="/images/siren.png"
            alt="SirenImg"
            style={{ height: 40, width: 40 }}
          />
          <Typography color="var(--dark-color)" fontSize={17} fontWeight={550}>
            PROMOTIONAL OFFER time is running out! World-class tutoring now
            $13/hr.
          </Typography>
        </Stack>

        {/* baneer starting  */}
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          py={3}
          px={15}
          minWidth={"100%"}
          maxWidth={"100%"}
          sx={{
            background:
              "linear-gradient(to right, rgb(238, 174, 202), rgb(148, 187, 233), rgb(69, 206, 252))",
          }}
        >
          {/* left section  */}
          <Stack gap={4} minWidth={"55%"} maxWidth={"55%"}>
            <Stack gap={-1} minWidth={"100%"} maxWidth={"100%"}>
              <Typography fontSize={25} color="var(--text-primary)">
                Study Steady-Be Exam Ready
              </Typography>
              <Typography
                fontSize={85}
                color="var(--text-primary)"
                fontWeight={550}
                sx={{ wordSpacing: "8px" }}
              >
                As Low As $13/hr - Start Your Free Trail Class Today
              </Typography>
              <Typography fontSize={27} color="var(--text-primary)">
                World-Class Tutors. Personalized Lessons.<br></br> Exam
                Techniques. All Curricula Covered.
              </Typography>
            </Stack>

            <Stack
              direction={"row"}
              gap={2}
              flexGrow={3}
              flexWrap={"wrap"}
              minWidth={"100%"}
              maxWidth={"100%"}
            >
              {widgets.map((item, index) => {
                return (
                  <Stack
                    key={index}
                    gap={2}
                    minWidth={"245px"}
                    maxWidth={"245px"}
                    justifyContent={"center"}
                    direction={"row"}
                    sx={{
                      backgroundColor: "var(--text-primary)",
                      borderRadius: 3,
                      p: 3,
                    }}
                  >
                    <img
                      src={item.icon}
                      alt="Icon"
                      style={{ height: 60, width: 60 }}
                    />
                    <Typography fontSize={18} color="var(--dark-color)">
                      {item.title}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>

            <Stack direction={"row"} gap={3}>
              {IconData.map((item, index) => {
                return (
                  <Stack key={index}>
                    <img
                      src={item.icon}
                      alt="icons"
                      style={{ height: 75, width: 75, borderRadius: "50%" }}
                    />
                  </Stack>
                );
              })}
            </Stack>
          </Stack>

          {/* booking form  */}
          <Toaster />
          <Stack
            autoComplete="off"
            component="form"
            onSubmit={handleSubmit}
            spacing={3}
            sx={{
              backgroundColor: "white",
              borderRadius: 14,
              p: 5,
              boxShadow: 5,
              maxWidth: "35%",
              minWidth: "35%",
              height: "max-content",
            }}
          >
            <Typography
              fontSize={36}
              maxWidth={"70%"}
              textAlign={"center"}
              alignSelf={"center"}
              fontWeight="bold"
            >
              BOOK YOUR FREE TRIAL NOW
            </Typography>

            {/* Name */}
            <Stack spacing={0.5}>
              <Typography fontSize={16} fontWeight={500}>
                Name
              </Typography>
              <TextField
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="standard"
                InputProps={{
                  disableUnderline: true, // removes border even on focus
                }}
                sx={{
                  backgroundColor: "rgba(166, 169, 172, 0.1)",
                  p: 1,
                  borderRadius: 2,
                }}
              />
              {errors.name && (
                <Typography color="red" fontSize={12}>
                  {errors.name}
                </Typography>
              )}
            </Stack>

            {/* Phone */}
            <Stack spacing={0.5}>
              <Typography fontSize={16} fontWeight={500}>
                Phone Number
              </Typography>
              <TextField
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  backgroundColor: "rgba(166, 169, 172, 0.1)",
                  p: 1,
                  borderRadius: 2,
                }}
              />
              {errors.phone && (
                <Typography color="red" fontSize={12}>
                  {errors.phone}
                </Typography>
              )}
            </Stack>

            {/* Email */}
            <Stack spacing={0.5}>
              <Typography fontSize={16} fontWeight={500}>
                Email
              </Typography>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  backgroundColor: "rgba(166, 169, 172, 0.1)",
                  p: 1,
                  borderRadius: 2,
                }}
              />
              {errors.email && (
                <Typography color="red" fontSize={12}>
                  {errors.email}
                </Typography>
              )}
            </Stack>

            {/* Curriculum Dropdown */}
            <Stack spacing={0.5}>
              <Typography fontSize={16} fontWeight={500}>
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
                <Typography color="red" fontSize={12}>
                  {errors.curriculum}
                </Typography>
              )}
            </Stack>

            {/* Grades Dropdown with scroll */}
            <Stack spacing={0.5}>
              <Typography fontSize={16} fontWeight={500}>
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
                    PaperProps: {
                      style: {
                        maxHeight: 200, // scroll inside dropdown
                      },
                    },
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
                <Typography color="red" fontSize={12}>
                  {errors.grade}
                </Typography>
              )}
            </Stack>
            <Typography color="var(--dark-color)" fontSize={20}>
              Your journey to exam success starts here — <br></br>
              request your free quote now.
            </Typography>

            {/* Submit Button */}
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
