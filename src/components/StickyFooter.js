import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Button, Stack } from "@mui/material";
import "../App.css";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="http://hrithikchandrashekar.in/"> Hrithik C </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box className="box"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          I'm Hrithik <br /> React Developer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"I love to design and build interactive websites and user interfaces."}
        </Typography>
        <Stack direction="row" spacing={{ md: "15px", xs: "10px" }}>
          <a href="https://www.linkedin.com/in/hrithik-chandrashekar-397b43177/">
            <LinkedInIcon sx={{ width: 40, height: 40 }} />
          </a>
          <a href="https://github.com/Apocryphon06">
            <GitHubIcon sx={{ width: 40, height: 40 }} />
          </a>
          <a href="mailto:hrithikchandrashekar@gmail.com">
            <EmailIcon sx={{ width: 40, height: 40 }} />
          </a>
        </Stack>
      </Container>
      
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          
        }}
      >
      
        <Container maxWidth="lg">
          <Typography variant="body1">hrithikchandrashekar@gmail </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
