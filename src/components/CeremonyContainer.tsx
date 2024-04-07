import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Images from "../Images";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";

const CeremonyContainer = () => {
  return (
    <StyledPicInfoContainer
      orderImageDesktop={1}
      orderInfoDesktop={2}
      image={Images.ceremony}
      id="program"
    >
      <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem" }}>
        Vielse
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>&#128141;</ListItemIcon>
          <ListItemText primary="13:00 - Oppmøte" />
        </ListItem>
        <ListItem>
          <ListItemIcon>&#128141;</ListItemIcon>
          <ListItemText primary="13:30 - Vielse" />
        </ListItem>
        <ListItem>
          <ListItemIcon>📸</ListItemIcon>
          <ListItemText primary="14:15 - Gruppebilder/brudeparet tar bilder" />
        </ListItem>
      </List>
    </StyledPicInfoContainer>
  );
};

export default CeremonyContainer;
