import { Button, Grid, Paper, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React, { RefObject, useState } from "react";
import submitForm from "../api/SubmitForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InfoForm from "./InfoForm";
import FoodForm from "./FoodForm";
import AccommodationForm from "./AccommodationForm";
import CustomMobileStepper from "./StyledMobileStepper";

export interface RSVPFormValues {
  guest1: string;
  guest2: string;
  expectation: string;
  allergies1: string;
  allergies2: string;
  contribution: string;
  roomType: "Dobbelrum" | "Enkeltrum" | "Ingen overnatning" | "";
  stayDuration: 0 | 1 | 2;
  mainCourse: "Kød til hovedret" | "Fisk til hovedret" | "";
}

const RSVP = React.forwardRef(({}, ref) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (values: RSVPFormValues) => {
    console.log(values);
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

  const steps = [
    {
      component: () => <InfoForm />,
    },
    {
      component: (values: RSVPFormValues) => <FoodForm values={values} />,
    },
    {
      component: (values: RSVPFormValues) => (
        <AccommodationForm values={values} />
      ),
    },
  ];

  return (
    <Grid container xs={12} justifyContent="center">
      <Grid item xs={12} md={4} alignItems="center" justifyContent="center">
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
          <Formik
            initialValues={{
              guest1: "",
              guest2: "",
              email: "",
              expectation: "",
              allergies1: "",
              allergies2: "",
              contribution: "",
              roomType: "",
              stayDuration: 0,
              mainCourse: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
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
                  {steps[activeStep].component(values)}
                </Grid>
                <Grid item xs={12} sx={{ alignItems: "center" }}>
                  <CustomMobileStepper
                    activeStep={activeStep}
                    steps={3}
                    handleBack={handleBack}
                    handleNext={handleNext}
                  />
                  {/* <MobileStepper
                    variant="dots"
                    steps={3}
                    position="static"
                    activeStep={activeStep}
                    sx={{
                      maxWidth: 400,
                      flexGrow: 1,
                      color: "#de9a34",
                      margin: "0 auto",
                    }}
                    nextButton={
                      <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === 2}
                      >
                        Next
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        Back
                      </Button>
                    }
                  /> */}
                </Grid>
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
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
});

export default RSVP;
