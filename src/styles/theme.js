import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', 'Orbitron', sans-serif",
    h1: {
      fontSize: "5rem",
      fontWeight: "bold",
      letterSpacing: 2,
      fontFamily: "'Orbitron', sans-serif",
      textShadow: "0 0 15px rgba(0, 234, 255, 0.8)",
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: "bold",
      letterSpacing: 1.5,
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: "#00eaff",
    },
    secondary: {
      main: "#00ff99",
    },
    background: {
      default: "#0a0a0a",
    },
    text: {
      primary: "#ffffff",
      secondary: "#c2f0ff",
    },
  },
});

export default theme;
