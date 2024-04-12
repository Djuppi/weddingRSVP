import * as yup from "yup";

export const RSVPValidation = yup.object().shape({
  guest1: yup.string().required("Vi må vite hva du heter"),
  email: yup
    .string()
    .email("Ugyldig e-post")
    .required("Vi trenger e-posten din"),
  expectation: yup.string().required("Vi må vite om du kommer eller ikke"),
  mainCourse1: yup.string().required("Vi trenger å vite hva du ønsker å spise"),
  mainCourse2: yup.string().required("Vi trenger å vite hva du ønsker å spise"),
});
