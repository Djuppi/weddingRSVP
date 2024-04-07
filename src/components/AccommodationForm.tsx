import {
  FormControlLabel,
  FormLabel,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { RadioGroup } from "formik-material-ui";
import { Field } from "formik";
import StyledRadio from "./StyledRadioButton";
import { RSVPFormValues } from "./RSVP";

type Props = {
  values: RSVPFormValues;
};

const AccommodationForm = (props: Props) => {
  const { values } = props;
  return (
    <>
      <Grid item xs={12}>
        <FormLabel htmlFor="roomType">Overnatting:</FormLabel>
        <Field
          component={RadioGroup}
          style={{ alignItems: "center" }}
          name="roomType"
          aria-labelledby="roomType"
        >
          <FormControlLabel
            control={<StyledRadio />}
            label="Dobbeltrom (1.700 DKK per natt)"
            value="Dobbelrum"
          />
          <FormControlLabel
            control={<StyledRadio />}
            label="Enkeltrom (1.400 DKK per natt)"
            value="Enkeltrum"
          />
          <FormControlLabel
            control={<StyledRadio />}
            label="Jeg/vi finner selv overnatting"
            value="Ingen overnatning"
          />
        </Field>
      </Grid>
      {values.roomType !== "Ingen overnatning" && (
        <Grid item xs={12}>
          <FormLabel htmlFor="roomType">Varighet:</FormLabel>
          <Field
            component={RadioGroup}
            style={{ alignItems: "center" }}
            name="stayDuration"
            aria-labelledby="stayDuration"
          >
            <FormControlLabel
              control={<StyledRadio />}
              label="1 natt (lørdag-søndag)"
              value={1}
            />
            <FormControlLabel
              control={<StyledRadio />}
              label="2 netter (fredag-søndag)"
              value={2}
            />
          </Field>
        </Grid>
      )}
      <Grid item xs={12}>
        <Typography fontStyle="italic">
          Spørsmål? Ta gjerne kontakt med oss på{" "}
          <Link href="mailto:askeogsus@gmail.com">mail</Link>
        </Typography>
      </Grid>
    </>
  );
};

export default AccommodationForm;
