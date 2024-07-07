import {
  Link,
  Typography,
} from "@mui/material";
import StyledPicInfoContainer from "./Common/StyledPicInfoContainer";
import Images from "../Images";

const TransportContainer = () => (
  <StyledPicInfoContainer
    orderImageDesktop={2}
    orderInfoDesktop={1}
    image={Images.transport}
    id={"arriving"}
  >
    <Typography variant="h4" component="h2" sx={{ marginBottom: {sm: "1rem", md: "2rem"} }}>
      Adkomst
    </Typography>
    <Typography>
      <strong>Bil: </strong>Parkering på Kurhotel Skodsborg er gratis, men det er viktig at ditt
      registreringsnummer blir notert via QR-koden som du finner i det aktuelle
      selskapslokalet, eller på nettbrettene ved hotellets resepsjon.  Planlegg din reisevei{" "}
        <Link
          sx={{ color: "#063300a2", textDecoration: "none" }}
          target="_blank"
          rel="nopener noreferrer"
          href="https://www.google.com/maps?q=Kurhotel+Skodsborg"
        >
          her
        </Link>
    </Typography>
    <Typography>
      <strong>Tog: </strong>Hotellet ligger i kort gangavstand fra Skodsborg Station. Transporttiden
      med tog er ca. 20 minutter fra Københavns Hovedbanegård/Nørreport st. Fra
      CPH lufthavn kan man enkelt ta regionaltog eller Metro inn til
      hovedbanegården, og bytte til neste tog mot Helsingør. Reisetid ca 40 min
      til sammen. Finn din reise, og bestill billetter via DSB app eller på hjemmesiden{" "}
        <Link
          sx={{ color: "#063300a2", textDecoration: "none" }}
          target="_blank"
          rel="nopener noreferrer"
          href="http://www.dsb.dk"
        >
          her
        </Link>
    </Typography>
  </StyledPicInfoContainer>
);

export default TransportContainer;
