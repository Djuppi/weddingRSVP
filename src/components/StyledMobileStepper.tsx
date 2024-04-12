import { Button, MobileStepper, styled, useTheme } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { RSVPFormValues } from "./RSVP";

const StyledMobileStepper = styled(MobileStepper)<{ theme: any }>(() => ({
  root: {
    width: "50%",
    flexGrow: 1,
  },
  colorPrimary: {
    backgroundColor: "red",
  },
  progress: {
    backgroundColor: "green",
    "& *": {
      backgroundColor: "red",
    },
  },
}));

interface Props {
  activeStep: number;
  handleNext: (values: RSVPFormValues, setFieldTouched: (field: string, message: string | undefined) => void) => void;
  handleBack: () => void;
  values: RSVPFormValues;
  steps: number;
  setFieldTouched: (field: string, message: string | undefined) => void
}

const CustomMobileStepper = (props: Props) => {
  const { activeStep, steps, handleNext, handleBack, values, setFieldTouched } = props;
  const theme = useTheme();

  return (
    <StyledMobileStepper
      theme={theme}
      variant="dots"
      steps={steps}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1, margin: "0 auto" }}
      nextButton={
        <Button
          size="small"
          onClick={() => handleNext(values, setFieldTouched)}
          sx={{
            backgroundColor: activeStep === steps - 1 ? "#de9a348f" : "",
            color: activeStep === steps - 1 ? "white" : "",
          }}
        >
          {activeStep === steps - 1 ? "Fullfør" : "Neste"}
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Tilbake
        </Button>
      }
    />
  );
};

export default CustomMobileStepper;
