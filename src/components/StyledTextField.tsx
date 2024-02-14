import { TextField, TextFieldProps } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
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

export default function CssTextField(label: string, required: boolean) {
  return <StyledTextField variant="standard" label={label} required={required} />;
}
