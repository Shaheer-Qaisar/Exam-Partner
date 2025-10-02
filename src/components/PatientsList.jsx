import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LanguageIcon from "@mui/icons-material/Translate";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function PatientsList() {
  // sample dummy patients
  const patientsData = [
    {
      id: 1,
      title: "John Doe - Checkup",
      date: "2025-09-27",
      time: "10:30 AM",
      language: "English",
      status: "Completed",
    },
    {
      id: 2,
      title: "Sarah Smith - Therapy",
      date: "2025-09-26",
      time: "2:00 PM",
      language: "Spanish",
      status: "Pending",
    },
    {
      id: 3,
      title: "Ali Khan - Follow-up",
      date: "2025-09-25",
      time: "9:15 AM",
      language: "Urdu",
      status: "Ongoing",
    },
  ];

  return (
    <Box sx={{ padding: 5, mt: 3 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          textAlign: "center",
          color: "primary.main",
        }}
      >
        🩺 Patient Records
      </Typography>

      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 3,
          border: "1px solid",
          borderColor: "divider",
          background: "var(--bg-dark)",
          overflowX: "auto", // horizontal scroll if needed
          "&::-webkit-scrollbar": { height: "6px" },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#0b1020",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#1976d2",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-button": { display: "none" },
        }}
      >
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
              >
                <LocalHospitalIcon sx={{ verticalAlign: "middle", mr: 1 }} />{" "}
                Title
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
              >
                <CalendarMonthIcon sx={{ verticalAlign: "middle", mr: 1 }} />{" "}
                Date
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
              >
                <AccessTimeIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Time
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
              >
                <LanguageIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Language
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
              >
                <DonutLargeIcon sx={{ verticalAlign: "middle", mr: 1 }} /> Status
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
              >
                <PlayCircleOutlineIcon
                  sx={{ verticalAlign: "middle", mr: 1 }}
                />{" "}
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {patientsData.map((patient) => (
              <TableRow
                key={patient.id}
                sx={{
                  "&:hover": {
                    transform: "scale(1.01)",
                    backgroundColor: "action.hover",
                    transition: "all 0.2s ease-in-out",
                  },
                }}
              >
                <TableCell sx={{ textAlign: "center",color:"white" }}>
                  {patient.title}
                </TableCell>
                <TableCell sx={{ textAlign: "center",color:"white" }}>
                  {patient.date}
                </TableCell>
                <TableCell sx={{ textAlign: "center",color:"white" }}>
                  {patient.time}
                </TableCell>
                <TableCell sx={{ textAlign: "center",color:"white" }}>
                  {patient.language}
                </TableCell>
                <TableCell sx={{ textAlign: "center",color:"white" }}>
                  <Chip
                    label={patient.status}
                    size="small"
                    sx={{
                      px: 1,
                      py: 1,
                      fontSize: 14,
                      borderRadius: "3px",
                      width: "100px",
                      fontWeight: "bold",
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                      backgroundColor:
                        patient.status === "Completed"
                          ? "success.main"
                          : patient.status === "Pending"
                          ? "warning.main"
                          : "info.main",
                      color: "#fff",
                    }}
                  />
                </TableCell>
                <TableCell sx={{ textAlign: "center" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<PlayCircleOutlineIcon />}
                    sx={{
                      borderRadius: 5,
                      boxShadow: 0,
                      textTransform: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    View Video
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PatientsList;
