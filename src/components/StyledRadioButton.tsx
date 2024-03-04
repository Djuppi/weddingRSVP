import { Radio, RadioProps, TextField, TextFieldProps } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const StyledRadioButton = styled(Radio)<RadioProps>(({ theme }) => ({
  "&.Mui-checked": {
    color: "#de9a348f",
  },
}));

export default function StyledRadio() {
  return <StyledRadioButton />;
}
