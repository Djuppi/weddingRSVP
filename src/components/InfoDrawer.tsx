import {
  Card,
  CardHeader,
  Drawer,
  Grid,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const drawerWidth = 240;

// const useStyles = {
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//     backgroundColor: "rgba(64, 128, 0, 0.8)", // Dark olive green with transparency
//     padding: "1rem 2rem",
//         color: "white",
//         position: "fixed",
//         top: "100px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         borderRadius: "0 10px 10px 0",
//         gap: "1rem",
//         overflow: "visible",
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     backgroundColor: "rgba(64, 128, 0, 0.8)", // Dark olive green with transparency
//   },
// }));

interface Props {
  open: boolean;
  onClose: () => void;
}

const MyDrawer = (props: Props) => {
  const { open, onClose } = props;

  //const classes = useStyles();

  return (
    <Drawer
      open={open}
      onClose={onClose}
      //className={classes.drawer}
      //   classes={{
      //     paper: classes.drawerPaper,
      //   }}
      anchor="left"
      sx={{ marginTop: "70px", overflow: "scroll" }}
    >
      <MenuOutlinedIcon style={{ alignSelf: "end" }} />
      <Typography variant="h5" color="white" sx={{ marginBottom: "1rem" }}>
        Praktisk informasjon
      </Typography>

      <Card
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          background: "rgba( 255, 255, 255, 0.25 )",
          width: "60%",
          backdropFilter: "blur( 2px )",
          borderRadius: "10px",
        }}
      >
        <CardHeader title="Hotel" />
        <Typography>Kurhotel Skodsborg</Typography>
        <Link sx={{ color: "#de9a348f" }} href="https://skodsborg.dk">
          Book her
        </Link>
        <Link
          sx={{ color: "#de9a348f" }}
          href="https://www.google.com/maps/place/Kurhotel+Skodsborg/@55.819622,12.5715408,17z/data=!3m2!4b1!5s0x46524c0faef58cbd:0x3951a290ae3c8cd8!4m9!3m8!1s0x46524c0faebbb323:0x6892f8b47044496c!5m2!4m1!1i2!8m2!3d55.819622!4d12.5741157!16s%2Fm%2F010qk04r?entry=ttu"
          rel="noreferrer"
          target="_blank"
        >
          Map
        </Link>
      </Card>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            padding: "2rem",
            background: "rgba( 255, 255, 255, 0.25 )",

            backdropFilter: "blur( 2px )",
            borderRadius: "10px",
          }}
        >
          <CardHeader title="Program" />
          <List>
            <ListItem>
              <ListItemIcon>&#128141;</ListItemIcon>
              <ListItemText primary="13:00 - Ceremony" />
            </ListItem>
            <ListItem>
              <ListItemIcon>📸</ListItemIcon>
              <ListItemText primary="14:00 - Photoshoot" />
            </ListItem>
            <ListItem>
              <ListItemIcon>🥂</ListItemIcon>
              <ListItemText primary="15:00 - Reception" />
            </ListItem>
            <ListItem>
              <ListItemIcon>🍽️</ListItemIcon>
              <ListItemText primary="18:00 - Dinner" />
            </ListItem>
            <ListItem>
              <ListItemIcon>💃</ListItemIcon>
              <ListItemText primary="20:00 - Dance" />
            </ListItem>
          </List>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            padding: "2rem",
            background: "rgba( 255, 255, 255, 0.25 )",

            backdropFilter: "blur( 2px )",
            borderRadius: "10px",
          }}
        >
          <CardHeader title="Kontakt" />
          <Typography>Mail@test.no</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            padding: "2rem",
            background: "rgba( 255, 255, 255, 0.25 )",

            backdropFilter: "blur( 2px )",
            borderRadius: "10px",
          }}
        >
          <CardHeader title="Kontakt" />
          <Typography>Mail@test.no</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            padding: "2rem",
            background: "rgba( 255, 255, 255, 0.25 )",

            backdropFilter: "blur( 2px )",
            borderRadius: "10px",
          }}
        >
          <CardHeader title="Kontakt" />
          <Typography>Mail@test.no</Typography>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            padding: "2rem",
            background: "rgba( 255, 255, 255, 0.25 )",

            backdropFilter: "blur( 2px )",
            borderRadius: "10px",
          }}
        >
          <CardHeader title="Kontakt" />
          <Typography>Mail@test.no</Typography>
        </Card>
      </Grid>
    </Drawer>
  );
};

export default MyDrawer;
