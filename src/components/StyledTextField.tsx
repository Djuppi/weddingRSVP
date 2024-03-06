import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export default function CssTextField(
  label: string,
  required: boolean,
  multiline: boolean = false
) {
  return (
    <StyledTextField
      variant="standard"
      label={label}
      required={required}
      multiline={multiline}
      rows={multiline ? 3 : 1}
    />
  );
}
