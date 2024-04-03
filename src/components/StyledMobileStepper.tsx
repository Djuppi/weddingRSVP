// import { useTheme } from "@emotion/react";
// import { MobileStepper, styled } from "@mui/material";

// const StyledMobileStepper = styled(MobileStepper)<{ theme: any }>((props) => ({
//   root: {
//     width: "50%",
//     flexGrow: 1,
//   },
//   colorPrimary: {
//     backgroundColor: "red",
//   },
//   progress: {
//     backgroundColor: "green",
//     "& *": {
//       backgroundColor: "red",
//     },
//   },
// }));

// export default CustomMobileStepper = () => {
//   const theme = useTheme();
//   return (
//     <StyledMobileStepper
//       theme={theme}
//       variant="text"
//       steps={6}
//       position="static"
//       activeStep={activeStep}
//       sx={{ maxWidth: 400, flexGrow: 1 }}
//       nextButton={
//         <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
//           Next
//           {theme.direction === "rtl" ? (
//             <KeyboardArrowLeft />
//           ) : (
//             <KeyboardArrowRight />
//           )}
//         </Button>
//       }
//       backButton={
//         <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//           {theme.direction === "rtl" ? (
//             <KeyboardArrowRight />
//           ) : (
//             <KeyboardArrowLeft />
//           )}
//           Back
//         </Button>
//       }
//     />
//   );
// };
