import { Grid, Paper, Typography } from "@mui/material";
import { Form, Formik, FormikErrors, FormikTouched } from "formik";
import React, { RefObject, useEffect, useState } from "react";
import submitForm from "../api/SubmitForm";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import InfoForm from "./InfoForm";
import FoodForm from "./FoodForm";
import AccommodationForm from "./AccommodationForm";
import CustomMobileStepper from "./StyledMobileStepper";
import { RSVPValidation } from "../utils/RSVPValidation";

export interface RSVPFormValues {
  guest1: string;
  guest2: string;
  expectation: string;
  email: string;
  allergies: string;
  contribution: string;
  roomType: "Dobbelrum" | "Enkeltrum" | "Ingen overnatning" | "";
  stayDuration: 0 | 1 | 2;
  mainCourse1: "Kød til hovedret" | "Fisk til hovedret" | "";
  mainCourse2: "Kød til hovedret" | "Fisk til hovedret" | "";
}

const RSVP = React.forwardRef(({}, ref) => {
  const [activeStep, setActiveStep] = useState(0);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const isLastStep = () => {
    return activeStep === steps.length - 2;
  };

  const handleNext = (
    values: RSVPFormValues,
    setFieldTouched: (field: string, message: string | undefined) => void
  ) => {
    if (activeStep === 0) {
      if (values.guest1 === "") setFieldTouched("guest1", undefined);
      else if (values.email === "") setFieldTouched("guest1", undefined);
      else if (values.expectation === "") setFieldTouched("guest1", undefined);
      else setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 1) {
      if (values.mainCourse1 === "") setFieldTouched("guest1", undefined);
      else if (values.mainCourse2 === "" && values.guest2 !== "")
        setFieldTouched("guest1", undefined);
      else setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else if (activeStep === 2) {
      if (values.roomType === "") setFieldTouched("roomType", undefined);
      else if (
        values.stayDuration === 0 &&
        values.roomType !== "Ingen overnatning"
      )
        setFieldTouched("stayDuration", undefined);
      else handleSubmit(values);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (values: RSVPFormValues) => {
    if (!isLastStep()) {
      return;
    }
    // Create the form data
    const formData = new FormData();
    formData.append("Name1", values.guest1);
    formData.append("Name2", values.guest2);
    formData.append("Attending", values.expectation);
    formData.append("Allergies", values.allergies);
    formData.append("Contribution", values.contribution);
    formData.append("Email", values.email);
    formData.append("RoomType", values.roomType);
    formData.append("StayDuration", values.stayDuration.toString());
    formData.append("MainCourse1", values.mainCourse1);
    formData.append("MainCourse2", values.mainCourse2);

    // Call the submitForm API with the form data
    try {
      submitForm(formData);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setTimeout(() => {
        window.localStorage.setItem("rsvp", "yes");
        setHasSubmitted(true);
      }, 3000);
      toast.success("Takk for ditt svar :)");
    } catch (error) {
      toast.error("Noe gikk galt, prøv igjen senere");
    }
  };

  const steps = [
    {
      component: (
        _values: RSVPFormValues,
        errors: FormikErrors<RSVPFormValues>,
        touched: FormikTouched<RSVPFormValues>
      ) => <InfoForm errors={errors} touched={touched} />,
    },
    {
      component: (
        values: RSVPFormValues,
        errors: FormikErrors<RSVPFormValues>,
        touched: FormikTouched<RSVPFormValues>
      ) => <FoodForm values={values} errors={errors} touched={touched} />,
    },
    {
      component: (
        values: RSVPFormValues,
        errors: FormikErrors<RSVPFormValues>,
        touched: FormikTouched<RSVPFormValues>
      ) => <AccommodationForm values={values} errors={errors} touched={touched} />,
    },
    {
      component: () => <Typography>Thank you for submitting</Typography>,
    }
  ];

  useEffect(() => {
    window.localStorage.getItem("rsvp") && setHasSubmitted(true);
  }, []);

  if(hasSubmitted) {
    return <></>
  }

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
              allergies: "",
              contribution: "",
              roomType: "",
              stayDuration: 0,
              mainCourse1: "",
              mainCourse2: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={RSVPValidation}
          >
            {({ values, errors, touched, setFieldError }) => (
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
                  {steps[activeStep].component(values, errors, touched)}
                </Grid>
                <Grid item xs={12} sx={{ alignItems: "center" }}>
                  <CustomMobileStepper
                    activeStep={activeStep}
                    steps={3}
                    values={values}
                    handleBack={handleBack}
                    handleNext={handleNext}
                    setFieldTouched={setFieldError}
                  />
                </Grid>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
});

export default RSVP;
