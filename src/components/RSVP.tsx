import { Button, Grid, Paper, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React, { RefObject } from "react";
import submitForm from "../api/SubmitForm";
import CssTextField from "./StyledTextField";
import StyledRadio from "./StyledRadioButton";
import CustomFormLabel from "./StyledFormLabel";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RSVPFormValues {
  guest1: string;
  guest2: string;
  expectation: string;
  allergies1: string;
  allergies2: string;
  contribution: string;
}

interface Props {
  ref: RefObject<HTMLDivElement>;
}

const RSVP = React.forwardRef((props: Props, ref) => {
  const handleSubmit = (values: RSVPFormValues) => {
    console.log(values)
    // Create the form data
    const formData = new FormData();
    formData.append("Name1", values.guest1);
    formData.append("Name2", values.guest2);
    formData.append("Attending", values.expectation);
    formData.append("Allergies1", values.allergies1);
    formData.append("Allergies2", values.allergies2);
    formData.append("Contribution", values.contribution);

    // Call the submitForm API with the form data
    try {
      submitForm(formData);
      toast.success("Takk for ditt svar :)");
    } catch (error) {
      toast.error("Noe gikk galt, prøv igjen senere");
    }
  };

  return (
    <Grid container xs={12} justifyContent="center">
      <Grid
        item
        xs={12}
        md={6}
        lg={4}
        alignItems="center"
        justifyContent="center"
      >
        <Paper
          component="div" // Add the missing 'component' prop
          id="rsvp"
          ref={ref as RefObject<HTMLDivElement>} // Update the type of the 'ref' prop
          sx={{
            padding: "2rem",
            margin: "1rem auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" component="h5">
            RSVP
          </Typography>
          <Typography>Vi ber deg om å svare senest d. ??.??</Typography>
          <Formik
            initialValues={{
              guest1: "",
              guest2: "",
              expectation: "",
              allergies1: "",
              allergies2: "",
              contribution: "",
            }}
            onSubmit={handleSubmit}
          >
            <Form
              style={{
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
                gap: "2rem",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Field
                    name="guest1"
                    component={"input"}
                    label="Gjest 1"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="guest2"
                    component={"input"}
                    label="Gjest 2"
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <CustomFormLabel
                    label="Kan vi forvente deg/dere?"
                    name="expectation"
                  /> */}
                  <Field
                    name="expectation"
                    type={"radio"}
                    value="yes"
                    label="Jeg/vi kommer gjerne"
                  />
                  <Field
                    name="expectation"
                    type={"radio"}
                    value="no"
                    label="Jeg/vi kan dessverre ikke"
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <CustomFormLabel
                    label="Har du/dere noen allergier?"
                    name="allergies"
                  /> */}
                  <Field
                    name="allergies1"
                    component={"input"}
                    label="Gjest 1"
                  />
                  <Field
                    name="allergies2"
                    component={"input"}
                    label="Gjest 2"
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="contribution"
                  component={"input"}
                  label="Ønsker du å bidra med noe (tale/underholdning)?"
                  multiline
                />
              </Grid>
              <Typography>
                <em>
                  Har du spørsmål ta gjerne kontakt med oss på mail under.
                </em>
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
            </Form>
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
});

export default RSVP;
