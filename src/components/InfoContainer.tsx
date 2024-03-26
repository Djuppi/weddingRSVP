import { Grid, Link, Typography } from "@mui/material";

const InfoContainer = () => {
  return (
    <Grid
      container
      sx={{
        margin: "1rem 0 0 0",
        color: "white",
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          backgroundColor: "#496c52",
          padding: "1rem 2rem",
          borderRadius: " 0 5px 5px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem" }}>
          Info
        </Typography>
        <Typography component="p">Hotel:</Typography>
        <Typography>
          <Link sx={{ color: "#de9a348f" }} href="https://skodsborg.dk">
            Kurhotel Skodsborg
          </Link>
        </Typography>
        <Typography>Adresse:</Typography>
        <Link
          sx={{ color: "#de9a348f" }}
          href="https://www.google.com/maps/place/Kurhotel+Skodsborg/@55.819622,12.5715408,17z/data=!3m2!4b1!5s0x46524c0faef58cbd:0x3951a290ae3c8cd8!4m9!3m8!1s0x46524c0faebbb323:0x6892f8b47044496c!5m2!4m1!1i2!8m2!3d55.819622!4d12.5741157!16s%2Fm%2F010qk04r?entry=ttu"
          rel="noreferrer"
          target="_blank"
        >
          {" "}
          Skodsborg Strandvej 139, 2942 Skodsborg
        </Link>
        <Typography>Kontakt:</Typography>
        <Link sx={{ color: "#de9a348f" }} href="mailto:susogaske@gmail.com">
          SusogAske@gmail.com
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <img
          src="src/assets/Skodsborg.png"
          alt="hotel"
          width="100%"
          height="100%"
          style={{ filter: "opacity(.5)" }}
        />
      </Grid>
    </Grid>
  );
};

export default InfoContainer;
