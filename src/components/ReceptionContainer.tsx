import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";
import Images from "../Images";

const ReceptionContainer = () => (
  <StyledPicInfoContainer
    orderImageDesktop={2}
    orderInfoDesktop={1}
    image={Images.reception}
    id="program"
  >
    <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem" }}>
      Mottakelse/Reception
    </Typography>
    <Typography fontSize="small" fontStyle="italic">
      Der vil her bli servert kanapéer og bobler m.m.
    </Typography>
    <List>
      <ListItem>
        <ListItemIcon>🥂</ListItemIcon>
        <ListItemText primary="15:00 Mottakelse/reception på takterrassen" />
      </ListItem>
      <ListItem>
        <ListItemIcon>🍽️</ListItemIcon>
        <ListItemText primary="15:30 Brudeparet ankommer" />
      </ListItem>
      <ListItem>
        <ListItemIcon>🎂</ListItemIcon>
        <ListItemText primary="20:00 - Kake og dessert" />
      </ListItem>
    </List>
  </StyledPicInfoContainer>
);

export default ReceptionContainer;
