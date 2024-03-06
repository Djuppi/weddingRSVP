import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  RadioGroup,
  Typography,
} from "@mui/material";
import CssTextField from "./StyledTextField";
import StyledRadio from "./StyledRadioButton";
import CustomFormLabel from "./StyledFormLabel";

const RSVP = () => {
  return (
    <Paper
      sx={{
        padding: "2rem",
        margin: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        flexDirection: "column",
        width: "40%",
      }}
    >
      <Typography variant="h2" component="h5">
        RSVP
      </Typography>
      <Typography>Vi ber deg om å svare senest d. ??.??</Typography>
      <FormControl
        sx={{
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "500px",
          gap: "2rem",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {CssTextField("Gjest 1", true)}
          </Grid>
          <Grid item xs={12}>
            {CssTextField("Gjest 2", false)}
          </Grid>
          <Grid item xs={12}>
            {CustomFormLabel(
              "Kan vi forvente deg/dere?",
              "radio-buttons-group"
            )}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                sx={{ margin: "0 auto" }}
                value="yes"
                control={StyledRadio()}
                color="#de9a348f"
                label="Jeg/vi kommer gjerne"
              />
              <FormControlLabel
                sx={{ margin: "0 auto" }}
                value="no"
                control={StyledRadio()}
                label="Jeg/vi kan desverre ikke"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            {CustomFormLabel("Har du/dere noen allergier?", "allergies")}
            {CssTextField("Gjest 1", false)}
            {CssTextField("Gjest 2", false)}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {CssTextField(
            "Ønsker du å bidra med noe (tale/underholdning)?",
            false,
            true
          )}
        </Grid>
        <Typography>
          <em>Har du spørsmål ta gjerne kontakt med oss på mail under.</em>
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#de9a348f",
            "&:hover": { backgroundColor: "#de9a34" },
          }}
          type="submit"
        >
          Send
        </Button>
      </FormControl>
    </Paper>
  );
};

export default RSVP;
