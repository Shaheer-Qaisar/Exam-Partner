import React, { useState } from "react";
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import toast, { Toaster } from "react-hot-toast";

function Footer() {
  const iconData = [
    { icon: FacebookRoundedIcon, link: "https://www.facebook.com" },
    { icon: InstagramIcon, link: "https://www.instagram.com" },
    { icon: LinkedInIcon, link: "https://www.linkedin.com" },
  ];

  const linkData = [
    { name: "Home", to: "/" },
    { name: "Tutors", to: "/tutors" },
    { name: "About Us", to: "/about" },
    { name: "Curriculum", to: "/curriculum" },
    { name: "Contact Us", to: "/contact" },
  ];

  const contactData = [
    { icon: EmailIcon, data: "exampartner@gmail.com" },
    { icon: LocationOnIcon, data: "*****************" },
  ];

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Email submitted!", { position: "top-center" });
    setEmail("");
  };

  return (
    <>
      <Toaster />

      <Stack spacing={3} minWidth="100%" maxWidth="100%" mt={18}>
        {/* Divider */}
        <hr
          style={{
            backgroundColor: "var(--info-color)",
            height: "3px",
            width: "100%",
            border: "none",
          }}
        />

        <Stack
          direction={"row"}
          py={[5]}
          px={[2, 2, 3, 3, 5]}
          flexWrap="wrap"
          justifyContent="space-evenly"
          gap={[8, 5, 8, 8, 4]}
          sx={{ overflow: "hidden" }} // ensures nothing overflows horizontally
        >
          {/* first left section */}
          <Stack
            spacing={3}
            minWidth={["100%", "40%", "35%", "32%"]}
            maxWidth={["100%", "40%", "35%", "32%"]}
          >
            {/* logo and text */}
            <Stack direction="row" gap={1} alignItems="center">
              <img
                src="/images/logo.png"
                alt="Logo"
                style={{ height: 70, width: 70 }}
              />
              <Typography
                color="var(--dark-color)"
                fontSize={{ xs: 18, md: 20 }}
                fontWeight="bold"
              >
                MY EXAM PARTNER
              </Typography>
            </Stack>

            <Typography
              color="var(--text-secondary)"
              fontSize={{ xs: 16, md: 20 }}
            >
              World-Class Tutors. Personalized Lessons. Exam Techniques. All
              Curricula Covered.
            </Typography>

            {/* social icons */}
            <Stack direction="row" gap={2}>
              {iconData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <IconButton
                      sx={{ border: "2px solid var(--info-color)", p: 0.5 }}
                    >
                      <IconComponent
                        sx={{ color: "var(--info-color)", fontSize: 35 }}
                      />
                    </IconButton>
                  </a>
                );
              })}
            </Stack>
          </Stack>

          <Stack
            direction={["row", "row", "row", "row"]} // always row, even on large screens
            spacing={3}
            flexWrap="wrap"
            minWidth={["100%", "50%", "50%", "30%"]}
            maxWidth={["100%", "50%", "50%", "30%"]}
            justifyContent="space-between"
          >
            {/* site map */}
            <Stack spacing={1.3} flex={1} minWidth="45%">
              <Typography
                color="var(--dark-color)"
                fontSize={{ xs: 18, md: 22 }}
                fontWeight={550}
              >
                Site Map
              </Typography>
              {linkData.map((item, index) => (
                <Stack
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Link
                    key={index}
                    to={item.to}
                    style={{ fontSize: 16, color: "var(--text-secondary)" }}
                  >
                    {item.name}
                  </Link>
                </Stack>
              ))}
            </Stack>

            {/* contact */}
            <Stack spacing={1.5} flex={1} minWidth="45%">
              <Typography
                fontSize={{ xs: 18, md: 22 }}
                color="var(--dark-color)"
                fontWeight={550}
              >
                Contact Us
              </Typography>
              {contactData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <Stack
                    key={index}
                    direction="row"
                    gap={1}
                    alignItems="center"
                  >
                    <IconButton
                      sx={{
                        backgroundColor: "var(--info-color)",
                        "&:hover": { backgroundColor: "var(--info-color)" },
                      }}
                    >
                      <IconComponent
                        sx={{ fontSize: 18, color: "var(--text-primary)" }}
                      />
                    </IconButton>
                    <Typography
                      color="var(--text-secondary)"
                      fontSize={{ xs: 14, md: 18 }}
                    >
                      {item.data}
                    </Typography>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>

          {/* email form */}
          <Stack
            spacing={2}
            minWidth={["100%", "70%", "55%", "22%"]}
            maxWidth={["100%", "70%", "55%", "22%"]}
          >
            <Typography
              fontSize={{ xs: 18, md: 22 }}
              color="var(--dark-color)"
              fontWeight={550}
            >
              Study Steady – Be Exam Ready
            </Typography>
            <form onSubmit={handleSubmit}>
              <Stack
                direction="row"
                sx={{
                  border: "2px solid rgba(190, 190, 190, 0.64)",
                  borderRadius: "25px",
                  height: 42, // restored slimmer height
                }}
                gap={1}
              >
                <TextField
                  variant="outlined"
                  type="email"
                  required
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    "& fieldset": { border: "none" },
                    flex: 1,
                    fontSize: 12,
                    "& input": {
                      py: 1,
                      fontSize: 12,
                    },
                  }}
                />
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "var(--info-color)",
                    color: "var(--text-primary)",
                    fontSize: 12,
                    px: 2,
                    borderRadius: "25px",
                    minWidth: 90,
                    "&:hover": { backgroundColor: "var(--info-color)" },
                  }}
                >
                  Send
                </Button>
              </Stack>
            </form>
          </Stack>
        </Stack>
      </Stack>

      {/* Bottom bar */}
      <Stack
        sx={{ backgroundColor: "var(--info-color)" }}
        minWidth="100%"
        py={1.5}
        alignItems="center"
      >
        <Typography color="var(--text-primary)" fontSize={{ xs: 14, sm: 16 }}>
          © All Rights Reserved. <b>Made by Muhammad Shaheer</b>
        </Typography>
      </Stack>
    </>
  );
}

export default Footer;
