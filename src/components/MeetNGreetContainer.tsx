
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";
import { Typography } from "@mui/material";
import IMAGES from "../Images";


const MeetNGreetContainer = () => {
  return (
    <StyledPicInfoContainer
      orderImageDesktop={1}
      orderInfoDesktop={1}
      image={IMAGES.bar}
      id={""}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{ marginBottom: { sm: "1rem", md: "2rem" } }}
      >
        Fredag 9. august
      </Typography>
      <Typography>
        Til alle våre gjester som ankommer dagen før bryllupet. Dette er en den
        perfekte anledning til å benytte seg av hotellets spa, før vi alle møtes
        til litt mingling senere på kvelden. Vi har reservert bord i baren på
        hotellet fra klokken 20:00.
      </Typography>
      <Typography>Vi gleder oss til å se dere alle sammen!</Typography>
    </StyledPicInfoContainer>
  );
};

export default MeetNGreetContainer;
