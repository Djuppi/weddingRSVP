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
      <Typography fontStyle="italic">
        *Hotellet har nå mottatt liste med alle som har meldt at de vil overnatte. 
      </Typography>
    </StyledPicInfoContainer>
  );
};

export default AccommodationContainer;
