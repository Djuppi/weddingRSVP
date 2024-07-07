import { Box, Grid, Link, Typography } from "@mui/material";
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h3">
            Kontakt
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Typography fontStyle="italic">Toastmaster</Typography>

          <Link
            sx={{ color: "#063300a2", textDecoration: "none" }}
            href="https://www.facebook.com/renoldtc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Renold T. Christopher
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography fontStyle="italic">Forlover</Typography>

          <Link
            sx={{ color: "#063300a2", textDecoration: "none" }}
            href="https://www.facebook.com/simone.bystadhagen"
            target="_blank"
            rel="noopener noreferrer"
          >
            Simone Bystadhagen
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography fontStyle="italic">Forlover</Typography>

          <Link
            sx={{ color: "#063300a2", textDecoration: "none" }}
            href="https://www.facebook.com/mikkel.t.hansen.9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mikkel T. Hansen
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography fontStyle="italic" fontSize={12}>
            For spørsmål/henvendelser til oss, send en mail:
          </Typography>
          <Link
            sx={{ color: "#063300a2", textDecoration: "none" }}
            href="mailto:askeogsus@gmail.com"
          >
            askeogsus@gmail.com
          </Link>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignSelf: { sm: "center", md: "end" },
          flexDirection: "column",
          marginTop: { xs: "1rem", sm: "0" },
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
