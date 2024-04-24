import {
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
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
      >
        Program
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <img src={Images.meetUp} width={20} alt="Brides couple" />
          </ListItemIcon>
          <ListItemText primary="13:00 - Oppmøte" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <img src={Images.rings} width={20} alt="Wedding rings" />
          </ListItemIcon>
          <ListItemText primary="13:30 - Vielse" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <img src={Images.camera} width={20} alt="camera" />
          </ListItemIcon>
          <ListItemText primary="14:15 - Gruppebilder/brudeparet tar bilder" />
        </ListItem>
      </List>
      <Typography fontSize={"small"} fontStyle={"italic"}>
        Vi ber om at telefoner blir i lommen under vielsen. Der vil bli mulighet
        for å ta bilder av oss etter vielsen.
      </Typography>
    </StyledPicInfoContainer>
  );
};

export default CeremonyContainer;
