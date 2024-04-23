import { Radio, RadioProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledRadioButton = styled(Radio)<RadioProps>(() => ({
  "&.Mui-checked": {
    color: "#de9a348f",
  },
}));

export default function StyledRadio(props: any) {
  const { name, label, ...rest } = props;
  return <StyledRadioButton {...rest} />;
}
