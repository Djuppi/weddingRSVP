import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Field, useField } from "formik";

const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
  width: "80%",
  "& label.Mui-focused": {
    color: "#de9a348f",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#de9a348f",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#de9a348f",
    },
  },
}));

export default function CssTextField(props: any) {
  const { name, label, ...rest } = props;
  const [field] = useField(name);
  return (
    <Field
      variant="standard"
      label={label}
      {...field}
      {...rest}
      as={StyledTextField}
      autoComplete="off"
    />
  );
}
