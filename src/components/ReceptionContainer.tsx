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
    <Typography
      variant="h4"
      component="h2"
      sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
    >
      Mottakelse/Reception
    </Typography>
    <Typography fontSize="small" fontStyle="italic">
      Der vil her bli servert kanapéer og bobler m.m.
    </Typography>
    <List>
      <ListItem>
        <ListItemIcon>
          <img src={Images.cheers} width={20} color="grey" />
        </ListItemIcon>
        <ListItemText primary="15:00 - Oppmøte på takterrassen" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.meetUp} width={20} />
        </ListItemIcon>
        <ListItemText primary="15:30 - Brudeparet ankommer" />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <img src={Images.table} width={20} />
        </ListItemIcon>
        <ListItemText primary="17:30 - Bordsetting" />
      </ListItem>
    </List>
  </StyledPicInfoContainer>
);

export default ReceptionContainer;
