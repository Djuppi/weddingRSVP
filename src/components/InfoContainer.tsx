import { Grid, Link, Typography } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Images from "../Images";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";

const InfoContainer = () => {
  return (
    <StyledPicInfoContainer
      orderImageDesktop={2}
      orderInfoDesktop={1}
      image={Images.skodsborg}
      id="info"
    >
      <Typography variant="h4" component="h2" sx={{ marginBottom: "2rem" }}>
        Hotell
      </Typography>
      <Typography>
        <Link
          sx={{ color: "#063300a2", textDecoration: "none" }}
          href="https://skodsborg.dk"
        >
          Kurhotel Skodsborg
        </Link>
      </Typography>
      <Typography>Adresse:</Typography>
      <Link
        sx={{ color: "#063300a2", textDecoration: "none" }}
        href="https://www.google.com/maps/place/Kurhotel+Skodsborg/@55.819622,12.5715408,17z/data=!3m2!4b1!5s0x46524c0faef58cbd:0x3951a290ae3c8cd8!4m9!3m8!1s0x46524c0faebbb323:0x6892f8b47044496c!5m2!4m1!1i2!8m2!3d55.819622!4d12.5741157!16s%2Fm%2F010qk04r?entry=ttu"
        rel="noreferrer"
        target="_blank"
      >
        {" "}
        Skodsborg Strandvej 139, 2942 Skodsborg
      </Link>
      <Typography>Adkomst:</Typography>
      <ScrollLink
        to="arriving"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        style={{ cursor: "pointer", color: "#063300a2" }}
      >
        Klikk her for mer info
      </ScrollLink>
    </StyledPicInfoContainer>
  );
};

export default InfoContainer;
