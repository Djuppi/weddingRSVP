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
      orderImageDesktop={2}
      orderInfoDesktop={1}
      image={Images.ceremony}
      id="program"
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
      >
        Program 10. august
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <img src={Images.meetUp} width={20} alt="Brides couple" />
          </ListItemIcon>
          <ListItemText primary="13:00 - Oppmøte ved vannet" />
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
      {/* <Typography fontSize={"small"} fontStyle={"italic"}>
        Vi ber om at telefoner blir i lommen under vielsen. Det blir mulighet for å ta bilder i etterkant.
    
      </Typography> */}
    </StyledPicInfoContainer>
  );
};

export default CeremonyContainer;
