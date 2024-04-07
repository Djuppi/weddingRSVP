import "./App.css";
import StyledAppBar from "@components/StyledAppBar";
import {
  Box,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RSVP from "@components/RSVP";
import InfoContainer from "@components/InfoContainer";
import CeremonyContainer from "@components/CeremonyContainer";
import { styled } from "@mui/system";
import IMAGES from "./Images";
import Footer from "@components/Footer";
import AccommodationContainer from "@components/AccommodationContainer";
import ReceptionContainer from "@components/ReceptionContainer";
import DinnerContainer from "@components/DinnerContainer";
import WishesContainer from "@components/WishesContainer";
import TransportContainer from "@components/TransportContainer";

const CalligraphyText = styled(Typography)`
  font-family: "CalligraphyFont", cursive;
`;

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <StyledAppBar />
        <Box
          sx={{
            margin: "7rem 0 5rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
          }}
          id="home"
        >
          <img
            src={IMAGES.portrait}
            alt="bride and groom"
            width={isLargeScreen ? 120 : 300}
            style={{
              position: "absolute",
              right: isMediumScreen ? "5px" : "70px",
              top: isMediumScreen ? "70px" : "130px",
            }}
          />

          <CalligraphyText
            sx={{ fontWeight: "500" }}
            variant="h6"
            color="black"
          >
            Susanne & Aske
          </CalligraphyText>
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
          <Box sx={{ alignSelf: "center", width: "60%" }}>
            <Typography color="grey">
              Velkommen til vår bryllupsside!
            </Typography>
            <Typography color="grey">
              Her vil vi oppdatere med alle detaljer om dagen, samt praktisk
              informasjon fortløpende. Vi setter stor pris på om dere i første
              omgang vil fylle ut RSVP skjemaet, og svare på vår invitasjon så
              snart som mulig ❤
            </Typography>
          </Box>
        </Box>
        <RSVP />
        <InfoContainer />
        <AccommodationContainer />
        <TransportContainer />
        <Box sx={{ margin: "2rem 0" }}>
          <Typography variant="h3" component="h3">
            Program for dagen
          </Typography>
        </Box>
        <CeremonyContainer />
        <ReceptionContainer />
        <DinnerContainer />
        <WishesContainer />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
