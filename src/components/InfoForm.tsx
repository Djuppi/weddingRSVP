import { FormControlLabel, FormLabel, Grid } from "@mui/material";
import { RadioGroup } from "formik-material-ui";
import { Field } from "formik";
import StyledRadio from "./StyledRadioButton";
import CssTextField from "./StyledTextField";

const InfoForm = () => {
  return (
    <>
      <Grid item xs={12}>
        <CssTextField
          name="guest1"
          id="guest1"
          label="Gjest 1"
          control="input"
        />
      </Grid>
      <Grid item xs={12}>
        <CssTextField
          name="guest2"
          id="guest2"
          label="Gjest 2"
          control="input"
        />
      </Grid>
      <Grid item xs={12}>
        <FormLabel id="demo-radio-buttons-group-label">
          Kan vi forvente dere?
        </FormLabel>
        <Field
          component={RadioGroup}
          style={{ alignItems: "center" }}
          name="expectation"
          aria-labelledby="demo-radio-buttons-group-label"
        >
          <FormControlLabel
            control={<StyledRadio />}
            label="Ja, vi kommer gjerne!"
            value="yes"
          />
          <FormControlLabel
            control={<StyledRadio />}
            label="Nei, vi kan desverre ikke!"
            name="expectation"
            value="no"
          />
        </Field>
      </Grid>
      <Grid item xs={12}>
        <CssTextField
          name="contribution"
          control={"input"}
          label="Ønsker du å bidra med noe (tale/underholdning)?"
          multiline
        />
      </Grid>
    </>
  );
};

export default InfoForm;
