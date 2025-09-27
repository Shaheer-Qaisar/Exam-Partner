import React, { useState } from "react";
import {
  Stack,
  Typography,
  Button,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    curriculum: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const isBelow900 = useMediaQuery("(max-width:900px)");
  const isBelow1200 = useMediaQuery("(max-width:1200px)");

  const validate = () => {
    const newErrors = {};

    if (!formData.name || formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (formData.phone) {
      if (!/^\d{11}$/.test(formData.phone)) {
        newErrors.phone = "Phone number must be exactly 11 digits.";
      }
    }

    if (!formData.curriculum) {
      newErrors.curriculum = "Curriculum is required.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("Successfully Submitted!");
      console.log("User Data:", formData);

      setFormData({
        name: "",
        email: "",
        phone: "",
        curriculum: "",
        message: "",
      });
      setErrors({});
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Stack
      direction={isBelow900 ? "column" : isBelow1200 ? "column" : "row"}
      justifyContent={"space-between"}
      maxWidth={["95%", "75%", "85%", "75%"]}
      minWidth={["95%", "75%", "85%", "75%"]}
      m={[1, 3]}
      alignItems={"center"}
      justifySelf={"center"}
      boxShadow={3}
      sx={{ backgroundColor: "white" }}
      p={[3]}
      borderRadius={10}
      spacing={isBelow1200 ? 3 : 0}
    >
      {/* Image Section (hidden below 900px) */}
      {!isBelow1200 && (
        <Stack
          alignItems={"flex-start"}
          p={[3]}
          borderRadius={4}
          maxWidth={"500px"}
          sx={{
            backgroundImage: "url(/images/contact.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "620px",
          }}
        >
          <Stack spacing={2} maxWidth={"70%"}>
            <Typography
              color="white"
              fontSize={isBelow1200 ? 28 : 35}
              fontWeight={"SemiBold"}
              fontFamily={"Poppins"}
            >
              Contact Us For Tutor
            </Typography>
            <Typography
              fontSize={16}
              fontWeight={"Medium"}
              color="rgba(204, 204, 204, 1)"
            >
              We’re Just A Message Away To Help You Get Started With The Right
              Tutor.
            </Typography>
          </Stack>
        </Stack>
      )}

      {/* Contact Form */}
      <Stack
        spacing={3}
        maxWidth={isBelow1200 ? "100%" : "50%"}
        minWidth={isBelow1200 ? "100%" : "50%"}
        textAlign={"center"}
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography color="rgba(248, 191, 5, 0.99)" fontSize={28}>
          My Exam Partner
        </Typography>

        <Stack spacing={2} maxWidth={"100%"} minWidth={"100%"}>
          <Stack
            direction={isBelow900 ? "column" : "row"}
            spacing={isBelow900 ? 2 : 0}
            justifyContent={isBelow900 ? "flex-start" : "space-between"}
            width="100%"
          >
            <Stack width={isBelow900 ? "100%" : "49%"} spacing={0.5}>
              <TextField
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Name"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px",
                  },
                }}
              />
              {errors.name && (
                <Typography color="red" fontSize={12} textAlign="left">
                  {errors.name}
                </Typography>
              )}
            </Stack>

            <Stack width={isBelow900 ? "100%" : "49%"} spacing={0.5}>
              <TextField
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "25px",
                  },
                }}
              />
              {errors.email && (
                <Typography color="red" fontSize={12} textAlign="left">
                  {errors.email}
                </Typography>
              )}
            </Stack>
          </Stack>

          <Stack spacing={0.5}>
            <TextField
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="number"
              placeholder="WhatsApp Number"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                },
              }}
            />
            {errors.phone && (
              <Typography color="red" fontSize={12} textAlign="left">
                {errors.phone}
              </Typography>
            )}
          </Stack>

          <Stack spacing={0.5}>
            <TextField
              name="curriculum"
              value={formData.curriculum}
              onChange={handleChange}
              type="text"
              placeholder="Curriculum"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                },
              }}
            />
            {errors.curriculum && (
              <Typography color="red" fontSize={12} textAlign="left">
                {errors.curriculum}
              </Typography>
            )}
          </Stack>

          <Stack spacing={0.5}>
            <TextField
              name="message"
              value={formData.message}
              onChange={handleChange}
              type="text"
              placeholder="Message"
              multiline
              minRows={5}
              maxRows={5}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "25px",
                },
              }}
            />
            {errors.message && (
              <Typography color="red" fontSize={12} textAlign="left">
                {errors.message}
              </Typography>
            )}
          </Stack>

          <Button
            type="submit"
            sx={{
              backgroundColor: "rgba(248, 191, 5, 0.99)",
              borderRadius: "20px",
              maxWidth: "180px",
              alignSelf: "center",
              px: 5,
              color: "white",
            }}
          >
            Submit Now
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ContactUs;
