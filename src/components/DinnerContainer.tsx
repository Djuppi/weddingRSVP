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
    image={Images.weddingDinner}
    id="dinner"
  >
    <Typography
      variant="h4"
      component="h2"
      sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
    >
      Middag og fest
    </Typography>
    <List>
      <ListItem>
        <ListItemIcon>
          <img src={Images.dinner} width={20} alt="menu" />
        </ListItemIcon>
        <ListItemText primary="18:00 - Middag" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.dj} width={20} alt="disk" />
        </ListItemIcon>
        <ListItemText primary="20:00 - DJ/underholdning" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.cake} width={20} alt="cake" />
        </ListItemIcon>
        <ListItemText primary="20:30 - Bryllupskake og petit fours med avec" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.discoBall} width={20} alt="disco ball" />
        </ListItemIcon>
        <ListItemText primary="21:00 - Bar og dansegulv åpner" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.nightFood} width={20} alt="food bowl" />
        </ListItemIcon>
        <ListItemText primary="01:00 - Baren stenger og nattmat serveres" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.moon} width={20} alt="moon" />
        </ListItemIcon>
        <ListItemText primary="02:00 - Festen er slutt" />
      </ListItem>
    </List>
    {/* <Typography fontSize="small" fontStyle="italic">
      *Programmet ikke er 100% fastsatt, og endringer
      kan forekomme.
    </Typography> */}
  </StyledPicInfoContainer>
);

export default DinnerContainer;
