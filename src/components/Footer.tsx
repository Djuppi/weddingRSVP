import { Box, Link, Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: "2rem",
        backgroundColor: "#6f7863",
        color: "white",
        gap: "1rem",
      }}
      id="contact"
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
        <Typography variant="h5" component="h3">
          Kontakt
        </Typography>
        <Typography fontStyle="italic">
          For spørsmål/henvendelser, send oss en mail
        </Typography>
        <Link
          sx={{ color: "#063300a2", textDecoration: "none" }}
          href="mailto:askeogsus@gmail.com"
        >
          askeogsus@gmail.com
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignSelf: { sm: "center", md: "end" },
          flexDirection: "column",
          marginTop: "1rem",
        }}
      >
        <Typography fontSize="small">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/Djuppi"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            Djuppi.
          </a>{" "}
          All rights reserved.
        </Typography>
        <Typography fontSize={8}>
          Uicons by{" "}
          <a
            style={{ color: "white" }}
            color="white"
            href="https://www.flaticon.com/uicons"
          >
            Flaticon
          </a>
        </Typography>
        <Typography fontSize={8}>
          Photos from{" "}
          <a style={{ color: "white" }} href="https://www.Skodsborg.dk">
            Skodsborg.dk
          </a>
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
