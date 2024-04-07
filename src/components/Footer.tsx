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
      }}
      id="contact"
    >
      <Box>
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
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Typography fontSize="small">
          &copy; {new Date().getFullYear()} Djuppi. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
