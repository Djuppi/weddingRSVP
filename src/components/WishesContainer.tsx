import { Box, Typography } from "@mui/material";
import { FC } from "react";

const WishesContainer: FC = () => (
  <Box
    sx={{
      alignSelf: "center",
      width: { xs: "90%", sm: "40%"},
      margin: "3rem auto",
      gap: "1rem",
      display: "flex",
      flexDirection: "column",
    }}
    id="wishes"
  >
    <Typography variant="h2" component="h3">
      Gaveønsker
    </Typography>
    <Typography>Kjære gjester,</Typography>
    <Typography>
      Vi er utrolig takknemlige for alle som kommer og feirer denne spesielle
      dagen med oss. Vi vet også at noen har lang reisevei og ekstra kostnader
      knyttet til både dette og overnatting. Vi vil derfor understreke at den
      største gaven for oss er deres tilstedeværelse på dagen, og forventer ikke
      noe utover dette. Mest av alt ønsker vi oss en storslagen bryllupsfest, og
      å skape minner for livet med dere som vi er så glade i.
    </Typography>
    <Typography>
      Dersom noen likevel ønsker å gi en gave, setter vi pris på tilskudd til en
      bryllupsreise. Dette vil vi opprette en egen konto for.{" "}
    </Typography>
    <Typography>
      Takk igjen for at dere vil dele denne magiske dagen med oss ❤
    </Typography>
  </Box>
);

export default WishesContainer;
