import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Images from "../Images";

const ProgramContainer = () => {
  return (
    <Grid
      container
      sx={{
        color: "white",
      }}
      id="program"
    >
      <Grid item xs={12} sm={6}>
        <img
          src={Images.paviljong}
          alt="hotel"
          width="100%"
          height="100%"
          style={{ filter: "opacity(.5)" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundColor: "#496c52",
          padding: "1rem 2rem",
          borderRadius: "5px 0 0 5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem" }}>
          Program
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>&#128141;</ListItemIcon>
            <ListItemText primary="12:30 - Oppmøte" />
          </ListItem>
          <ListItem>
            <ListItemIcon>&#128141;</ListItemIcon>
            <ListItemText primary="13:00 - Vielse" />
          </ListItem>
          <ListItem>
            <ListItemIcon>📸</ListItemIcon>
            <ListItemText primary="13:40 - Photoshoot" />
          </ListItem>
          <ListItem>
            <ListItemIcon>🥂</ListItemIcon>
            <ListItemText primary="15:30 - Resepsjon" />
          </ListItem>
          <ListItem>
            <ListItemIcon>🍽️</ListItemIcon>
            <ListItemText primary="18:00 - Dinner" />
          </ListItem>
          <ListItem>
            <ListItemIcon>🎂</ListItemIcon>
            <ListItemText primary="20:00 - Kake og dessert" />
          </ListItem>
          <ListItem>
            <ListItemIcon>💃</ListItemIcon>
            <ListItemText primary="21:00 - Dance" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default ProgramContainer;
