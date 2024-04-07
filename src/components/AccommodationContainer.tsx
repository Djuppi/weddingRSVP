import { Grid, Link, List, ListItem, Typography } from "@mui/material";
import Images from "../Images";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";

const AccommodationContainer = () => {
  return (
    <StyledPicInfoContainer
      orderImageDesktop={1}
      orderInfoDesktop={2}
      image={Images.accommodation}
      id="accommodation"
    >
      <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem" }}>
        Overnatting:
      </Typography>
      <Typography>
        Hotellet tilbyr alle våre gjester overnatting 1-2 netter til en ekstra
        god pris. Prisen inkluderer frokost, samt adgang til Spa & Fitness.
      </Typography>
      <List>
        <ListItem>
          <Typography>Kr. 1.400,- DKK per enkeltrom</Typography>
        </ListItem>
        <ListItem>
          <Typography>Kr. 1.700,- DKK per dobbeltrom</Typography>
        </ListItem>
      </List>
      <Typography>
        Ta kontakt med oss på{" "}
        <Link
          sx={{ color: "#063300a2", textDecoration: "none" }}
          href="mailto:askeogsus@gmail.com"
        >
          mail
        </Link>{" "}
        for å booke rom (dersom du ikke allerede har gitt beskjed om dette i
        svarskjemaet).{" "}
      </Typography>
    </StyledPicInfoContainer>
  );
};

export default AccommodationContainer;
