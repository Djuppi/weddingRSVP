import "./App.css";
import StyledAppBar from "@components/StyledAppBar";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Drawer,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import RSVP from "@components/RSVP";
import MyDrawer from "@components/InfoDrawer";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [open, toggleDrawer] = useState<boolean>(false);

  const closeDrawer = () => {
    toggleDrawer(false);
  };

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <StyledAppBar />
        <Box
          sx={{
            height: "50vh",
            margin: "7rem 0 5rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => toggleDrawer(true)}
            sx={{ alignSelf: "start" }}
          >
            <MenuOutlinedIcon />
          </Button>
          <MyDrawer open={open} onClose={closeDrawer} />
          <img
            src="src/assets/Us_b_w.png"
            alt="bride and groom"
            width={300}
            style={{ position: "absolute", right: "70px", top: "130px" }}
          />
          <Typography sx={{ fontWeight: "500" }} variant="h6" color="black">
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
        <RSVP />
      </ThemeProvider>
    </>
  );
}

export default App;
