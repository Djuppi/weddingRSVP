import "./App.css";
import StyledAppBar from "@components/Common/StyledAppBar";
import {
  Box,
  Divider,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InfoContainer from "@components/InfoContainer";
import CeremonyContainer from "@components/CeremonyContainer";
import IMAGES from "./Images";
import Footer from "@components/Footer";
import AccommodationContainer from "@components/AccommodationContainer";
import ReceptionContainer from "@components/ReceptionContainer";
import DinnerContainer from "@components/DinnerContainer";
import WishesContainer from "@components/WishesContainer";
import TransportContainer from "@components/TransportContainer";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

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
            margin: "10rem 0 5rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
          }}
          id="home"
        >
          <LazyLoadImage
            src={IMAGES.eucalyptus}
            alt="eucaluptus"
            effect="opacity"
            width={isLargeScreen ? 120 : 300}
            style={{
              position: "absolute",
              left: isMediumScreen ? "5px" : "70px",
              top: isMediumScreen ? "70px" : "130px",
            }}
          />
          <LazyLoadImage
            src={IMAGES.portrait}
            alt="bride and groom"
            effect="opacity"
            width={isLargeScreen ? 120 : 300}
            style={{
              position: "absolute",
              right: isMediumScreen ? "5px" : "70px",
              top: isMediumScreen ? "70px" : "130px",
            }}
          />

          <Typography
            sx={{ fontWeight: "500"}}
            variant="h4"
            color="black"
            className="calligraphy-font"
          >
            Susanne & Aske
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
          <Typography variant="h4" color="grey" className="calligraphy-font">
            10. August 2024
          </Typography>
          <Box sx={{ alignSelf: "center", width: "60%" }}>
            <Typography color="grey">
              Velkommen til vår bryllupsside!
            </Typography>
            <Typography color="grey">
              Her vil vi oppdatere med alle detaljer om dagen, samt praktisk
              informasjon fortløpende <FavoriteOutlinedIcon fontSize="inherit" />
            </Typography>
          </Box>
        </Box>
        {/* <RSVP /> */}
        <InfoContainer />
        <AccommodationContainer />
        <TransportContainer />
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
