import "./App.css";
import StyledAppBar from "@components/StyledAppBar";
import {
  Box,
  Button,
  Divider,
  Fab,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RSVP from "@components/RSVP";
import MyDrawer from "@components/InfoDrawer";
import { useRef, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import InfoContainer from "@components/InfoContainer";
import ProgramContainer from "@components/ProgramContainer";
import { ScrollTop } from "@components/ScrollToTop";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/system";

const CalligraphyText = styled(Typography)`
  font-family: "CalligraphyFont", cursive;
`;

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [open, toggleDrawer] = useState<boolean>(false);

  const programContainerRef = useRef<HTMLDivElement>(null);
  const infoContainerRef = useRef<HTMLDivElement>(null);
  const homeContainerRef = useRef<HTMLDivElement>(null);
  const rsvpContainerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const closeDrawer = () => {
    toggleDrawer(false);
  };

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <StyledAppBar
          refs={{
            homeContainerRef: homeContainerRef,
            programContainerRef: programContainerRef,
            infoContainerRef: infoContainerRef,
            rsvpContainerRef: rsvpContainerRef,
          }}
        />
        <Box
          sx={{
            margin: "7rem 0 5rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <img
            src="src/assets/Us_b_w.png"
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
              Her vil vi oppdatere dere om program for dagen og annen praktisk
              informasjon så fort vi har alle detaljer på plass. Vi setter stor
              pris på om dere i første omgang vil fylle ut skjemaet under og
              svare på vår invitasjon så snart som mulig, og senest innen XX.XX.
            </Typography>
            <Typography color="grey">
              Vi gleder oss utrolig mye til å feire dagen sammen med dere ❤{" "}
            </Typography>
          </Box>
        </Box>
        <RSVP ref={rsvpContainerRef} />
        <InfoContainer />
        <ProgramContainer ref={programContainerRef} />
        <ScrollTop window={() => window}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </ThemeProvider>
    </>
  );
}

export default App;
