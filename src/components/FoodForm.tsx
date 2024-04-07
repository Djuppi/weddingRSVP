import {
  FormControlLabel,
  FormLabel,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { RadioGroup } from "formik-material-ui";
import CssTextField from "./StyledTextField";
import { RSVPFormValues } from "./RSVP";
import { Field } from "formik";
import StyledRadio from "./StyledRadioButton";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

type Props = {
  values: RSVPFormValues;
};

const FoodForm = (props: Props) => {
  const { values } = props;
  console.log(values);
  return (
    <>
      <Grid item xs={12}>
        <FormLabel id="main-course-label">Menyvalg - hovedrett</FormLabel>
      </Grid>
      <Grid item xs={12}>
        <FormLabel>{values.guest1 || "Gjest 1"}</FormLabel>
        <Field
          component={RadioGroup}
          style={{ alignItems: "center" }}
          name="mainCourse1"
          aria-labelledby="main-course-label"
        >
          <FormControlLabel
            control={<StyledRadio />}
            label="Jeg ønsker kjøtt"
            value="Kød til hovedret"
          />
          <FormControlLabel
            control={<StyledRadio />}
            label={<Typography>Jeg ønsker fisk</Typography>}
            value="Fisk til hovedret"
          />
        </Field>
      </Grid>
      {values.guest2 && (
        <Grid item xs={12}>
          <FormLabel>{values.guest2 || "Gjest 2"}</FormLabel>
          <Field
            component={RadioGroup}
            style={{ alignItems: "center" }}
            name="mainCourse2"
            aria-labelledby="main-course-label"
          >
            <FormControlLabel
              control={<StyledRadio />}
              label="Jeg ønsker kjøtt"
              value="Kød til hovedret"
            />
            <FormControlLabel
              control={<StyledRadio />}
              label="Jeg ønsker fisk"
              value="Fisk til hovedret"
            />
          </Field>
        </Grid>
      )}
      <Grid item xs={12}>
        <FormLabel id="allergies-label">Allergier/spesielle hensyn:</FormLabel>
        <CssTextField name="allergies1" control={"textarea"} />
      </Grid>
    </>
  );
};

export default FoodForm;
