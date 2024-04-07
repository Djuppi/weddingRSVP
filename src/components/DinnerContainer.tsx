import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";
import Images from "../Images";

const DinnerContainer = () => (
  <StyledPicInfoContainer
    orderImageDesktop={1}
    orderInfoDesktop={2}
    image={Images.paviljong}
    id="dinner"
  >
    <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem" }}>
      Middag og fest
    </Typography>
    <List>
      <ListItem>
        <ListItemIcon>🎂</ListItemIcon>
        <ListItemText primary="17:30 - Bordsetting" />
      </ListItem>
      <ListItem>
        <ListItemIcon>💃</ListItemIcon>
        <ListItemText primary="18:00 - Middag" />
      </ListItem>
      <ListItem>
        <ListItemIcon>💃</ListItemIcon>
        <ListItemText primary="20:00 - DJ/underholdning" />
      </ListItem>
      <ListItem>
        <ListItemIcon>💃</ListItemIcon>
        <ListItemText primary="20:30 - Bryllupskake og petit fours med avec" />
      </ListItem>
      <ListItem>
        <ListItemIcon>💃</ListItemIcon>
        <ListItemText primary="21:00 - Bar og dansegulv åpner" />
      </ListItem>
      <ListItem>
        <ListItemIcon>💃</ListItemIcon>
        <ListItemText primary="01:00 - Baren stenger og nattmat serveres" />
      </ListItem>
      <ListItem>
        <ListItemIcon>💃</ListItemIcon>
        <ListItemText primary="02:00 - Festen er slutt" />
      </ListItem>
    </List>
  </StyledPicInfoContainer>
);

export default DinnerContainer;
