import React from "react";
import { Box, Typography, Container, CircularProgress } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const MaintenancePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        bgcolor: "#0a0a0a",
        color: "#00eaff",
        px: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 3D Animated Background */}
      <Box sx={{ position: "absolute", width: "100%", height: "100%", zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Stars radius={100} depth={50} count={5000} factor={4} fade speed={2} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </Box>

      {/* Content Section */}
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          backdropFilter: "blur(10px)",
          borderRadius: "12px",
          p: { xs: 2, sm: 3 },
          textAlign: "center",
          maxWidth: "90%",
        }}
      >
        {/* Glitch Effect Title */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            mb: 2,
            letterSpacing: 1,
            fontFamily: "'Orbitron', sans-serif",
            background: "linear-gradient(90deg, #00eaff, #00ff99)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 15px rgba(0, 234, 255, 0.8)",
            animation: "glitch 1.5s infinite alternate",
            fontSize: { xs: "2rem", sm: "3rem" },
          }}
        >
          Triserge Technologies
        </Typography>

        {/* Animated Loader */}
        <CircularProgress size={60} sx={{ color: "#00ff99", mb: 3 }} />

        {/* Maintenance Message */}
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 500,
            color: "#ffffff",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
        >
          <span style={{ color: "#00eaff" }}>We're upgrading our systems</span> to bring you the
          future.<br/>
        </Typography>
        <Typography
          sx={{ fontSize: { xs: "0.9rem", sm: "1.1rem" }, color: "#c2f0ff", mb: 3 }}
        >
          Our tech team is working on new enhancements. Stay tuned for an
          <span style={{ color: "#00ff99", fontWeight: "bold" }}> optimized experience.</span>
        </Typography>

        {/* Contact Email */}
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem" },
            fontWeight: "bold",
            mt: 2,
            color: "#ffffff",
            textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
            wordBreak: "break-word",
          }}
        >
          For queries, reach us at: {" "}
          <span
            style={{
              color: "#00ff99",
              textDecoration: "underline",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            trisergeofficial@gmail.com
          </span>
        </Typography>
      </Container>

      {/* Glitch Effect Animation */}
      <style>
        {`
          @keyframes glitch {
            0% { text-shadow: 0 0 15px #00eaff, 0 0 25px #00eaff; }
            50% { text-shadow: 2px -2px 20px #00ff99, -2px 2px 20px #00ff99; }
            100% { text-shadow: -2px 2px 20px #00eaff, 2px -2px 20px #00ff99; }
          }
        `}
      </style>
    </Box>
  );
};

export default MaintenancePage;
