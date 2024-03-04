import "./App.css";
import StyledAppBar from "@components/StyledAppBar";
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import RSVP from "@components/RSVP";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <StyledAppBar />
        <Box
          sx={{
            height: "50vh",
            margin: "10rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ fontWeight: "500" }} variant="h6" color="grey">
            Susanne & Aske
          </Typography>
          <Typography variant="h1" component="h1" className="header">
            Vi gifter oss
          </Typography>
          <Divider
            variant="middle"
            sx={{
              background:
                "linear-gradient(45deg, transparent, #de9a348f, transparent)",
              height: "2px",
              borderColor: "transparent",
              borderRadius: "30%",
              margin: "5px 0",
            }}
          />
          <Typography variant="h4" component="h2" color="grey">
            10. August 2024
          </Typography>
        </Box>
        <RSVP />
        <Grid
          container
          spacing={4}
          sx={{
            backgroundColor: "#496c52",
            padding: "1rem 2rem",
            color: "white",
          }}
        >
          <Grid item xs={12} justifyContent="start">
            <Typography variant="h4" component="h4">
              Info
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ backgroundColor: "#6db17f00", padding: "2rem" }}>
              <CardHeader title="Hotel" />
              <Typography>Kurhotel Skodsborg</Typography>
              <Link sx={{ color: "#de9a348f" }} href="https://skodsborg.dk">
                Book her
              </Link>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ background: "#6db17f00", padding: "2rem" }}>
              <CardHeader title="Program" />
              <Typography>Kommer senere</Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ background: "#bd002900", padding: "2rem" }}>
              <CardHeader title="Kontakt" />
              <Typography>Mail@test.no</Typography>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default App;
