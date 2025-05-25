import React from "react";
import { PatientRegistrationForm } from "./FormComponents/PatientRegistrationForm";


import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";

// App Component
const PatientRegistrationApp: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      minHeight="100vh"
      sx={{
        background: "linear-gradient(to right top, #f0f4ff, #f9fbff)",
        py: 8,
        px: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          width: "100%",
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          backgroundColor: "#ffffffdd",
          backdropFilter: "blur(6px)",
        }}
      >
        <Box mb={4}>
          <Typography
            variant={isMobile ? "h4" : "h3"}
            component="h1"
            fontWeight="bold"
            mb={1}
            color="primary"
          >
            Patient Registration System
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Manage patient records with real-time synchronization across tabs
          </Typography>
        </Box>

        <PatientRegistrationForm />
      </Container>
    </Box>
  );
};

export default PatientRegistrationApp;
