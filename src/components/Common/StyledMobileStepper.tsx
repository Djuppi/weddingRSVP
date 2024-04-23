import {
  Button,
  MobileStepper,
  ThemeProvider,
  styled,
  useTheme,
} from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { RSVPFormValues } from "../RSVP";
import { FormikErrors } from "formik";

const StyledMobileStepper = styled(MobileStepper)<{ theme: any }>((theme) => ({
  "& .MuiMobileStepper-dot": {
    "&Active": {
      backgroundColor: "#de9a348f",
    },
  },
  "& .MuiButton-root": {
    color: "#de9a348f",
    fontWeight: "600",
    letterSpacing: "1px",
    "&.Mui-disabled": {
      color: "grey",
      filter: "none",
    },
    "&:focus": {
      outline: "none",
    },
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
  handleNext: (
    values: RSVPFormValues,
    setFieldTouched: (
      field: string,
      isTouched?: boolean | undefined,
      shouldValidate?: boolean | undefined
    ) => Promise<void | FormikErrors<RSVPFormValues>>
  ) => void;
  handleBack: () => void;
  values: RSVPFormValues;
  steps: number;
  setFieldTouched: (
    field: string,
    isTouched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<RSVPFormValues>>;
}

const CustomMobileStepper = (props: Props) => {
  const { activeStep, steps, handleNext, handleBack, values, setFieldTouched } =
    props;
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
