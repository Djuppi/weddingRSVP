import { List, ListItem, Typography } from "@mui/material";
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
      <Typography variant="h4" component="h2" sx={{ marginBottom: {sm: "1rem", md: "2rem"} }}>
        Overnatting
      </Typography>
      <Typography>
        Skal du overnatte? Se pris per rom under (inkludert frokost og inngang til Spa & Fitness). Innsjekk på hotellet er fra kl. 15.00 begge dager.
      </Typography>
      <List>
        <ListItem>
          <Typography>Kr. 1.400,- DKK per enkeltrom</Typography>
        </ListItem>
        <ListItem sx={{ marginTop: "-1rem" }}>
          <Typography>Kr. 1.700,- DKK per dobbeltrom</Typography>
        </ListItem>
      </List>
    </StyledPicInfoContainer>
  );
};

export default AccommodationContainer;
