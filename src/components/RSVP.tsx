import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { TextFieldProps } from "@mui/material";
import React from "react";
import { alpha, styled } from '@mui/material/styles';
import CssTextField from "./StyledTextField";

type Props = {};

const RSVP = (props: Props) => {
  return (
    <Paper
      sx={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
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
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography>Gjæst 1</Typography>
          </Grid>
          <Grid item xs={6}>
            {CssTextField("Fornavn", true)}
          </Grid>
          <Grid item xs={6}>
          {CssTextField("Fornavn", true)}
          </Grid>
          <Grid item xs={12}>
            <Typography>Gjæst 2</Typography>
          </Grid>
          <Grid item xs={6}>
          {CssTextField("Fornavn", false)}
          </Grid>
          <Grid item xs={6}>
          {CssTextField("Fornavn", false)}
          </Grid>
          <Grid item xs={12}>
            <FormLabel id="demo-radio-buttons-group-label">
              Kan vi forvente dere?
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <FormControlLabel
                sx={{ margin: "0 auto" }}
                value="yes"
                control={<Radio />}
                label="Jeg/vi kommer gerne"
              />
              <FormControlLabel
                sx={{ margin: "0 auto" }}
                value="no"
                control={<Radio />}
                label="Jeg/vi kan desværre ikke"
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            {CssTextField("Allergener", false)}
          </Grid>
        </Grid>
      </FormControl>
    </Paper>
  );
};

export default RSVP;
