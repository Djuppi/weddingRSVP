import { styled } from "@mui/material/styles";
import { FormLabelProps, FormLabel } from "@mui/material";

const StyledFormLabel = styled(FormLabel)<FormLabelProps>(() => ({
  "&.Mui-focused": {
    // increase the specificity for the pseudo class
    color: "#de9a348f",
  },
}));

export default function CustomFormLabel(label: string, id: string) {
  return <StyledFormLabel id={id}>{label}</StyledFormLabel>;
}
