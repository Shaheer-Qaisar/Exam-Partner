import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  useMediaQuery,
  Stack
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [curriculumOpen, setCurriculumOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const location = useLocation();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/pricing", label: "Pricing" },
  ];

  return (
    <AppBar position="static">
      <Toolbar sx={{ backgroundColor: "white", py: 2 }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          {/* Logo */}
          <Box display="flex" alignItems="center" gap={1}>
            <img src="/images/logo.png" alt="Logo" style={{ height: 50, width: 50 }} />
            <Typography color="var(--dark-color)" fontSize={20} fontWeight="bold">
              MY EXAM PARTNER
            </Typography>
          </Box>

          {/* Desktop Nav */}
          {!isMobile && (
            <Box display="flex" gap={6} alignItems="center">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  style={{
                    color: "black",
                    fontWeight: 600,
                    fontSize: 18,
                    backgroundColor:
                      location.pathname === link.to ? "rgba(239, 246, 255, 1)" : "transparent",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                endIcon={<KeyboardArrowDownIcon />}
                style={{ color: "black", fontWeight: 600, fontSize: 18 }}
              >
                Curriculum
              </Button>
            </Box>
          )}

          {/* Right Button */}
          {!isMobile && (
            <Button
              sx={{
                px: 3,
                py: 1,
                color: "var(--dark-color)",
                backgroundColor: "transparent",
                border: "2px solid black",
                borderRadius: "50px",
                fontWeight: 550,
              }}
            >
              Contact Us
            </Button>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <List>
            {navLinks.map((link, idx) => (
              <ListItem
                key={idx}
                button
                component={Link}
                to={link.to}
                onClick={toggleDrawer(false)}
                sx={{
                  color: "black",
                  backgroundColor:
                    location.pathname === link.to ? "rgba(239, 246, 255, 1)" : "transparent",
                  borderRadius: 1,
                }}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}

            {/* Curriculum Dropdown */}
            <ListItem
              button
              onClick={() => setCurriculumOpen(!curriculumOpen)}
              sx={{ color: "black" }}
            >
              <ListItemText primary="Curriculum" />
              {curriculumOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </ListItem>
            <Collapse in={curriculumOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {["Option 1", "Option 2", "Option 3", "Option 4"].map((opt, idx) => (
                  <ListItem
                    key={idx}
                    button
                    sx={{ pl: 4, color: "black" }}
                    onClick={toggleDrawer(false)}
                  >
                    <ListItemText primary={opt} />
                  </ListItem>
                ))}
              </List>
            </Collapse>

            <ListItem>
              <Button
                fullWidth
                sx={{
                  mt: 2,
                  color: "var(--dark-color)",
                  backgroundColor: "transparent",
                  border: "2px solid black",
                  borderRadius: "50px",
                  fontWeight: 550,
                }}
              >
                Contact Us
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>

 <Stack
          direction={"row"}
          gap={2}
          sx={{ backgroundColor: "rgba(239, 246, 255, 1)" }}
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
          <Typography color="var(--dark-color)" fontSize={17} fontWeight={550} textAlign={'center'}>
            PROMOTIONAL OFFER time is running out! World-class tutoring now
            $13/hr.
          </Typography>
        </Stack>
    </AppBar>
    
  );
}
