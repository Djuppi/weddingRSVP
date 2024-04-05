import { Button, MobileStepper, styled, useTheme } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

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
  handleNext: () => void;
  handleBack: () => void;
  steps: number;
}

const CustomMobileStepper = (props: Props) => {
  const { activeStep, steps, handleNext, handleBack } = props;
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
          onClick={handleNext}
          disabled={activeStep === steps - 1}
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
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
};

export default CustomMobileStepper;
