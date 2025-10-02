import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'

import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Quicksand, Arial, sans-serif",
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
