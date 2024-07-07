'use strict';

import { Box, Typography, useTheme } from "@mui/material";
import { FC } from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { tokens } from "../theme.js";

const WishesContainer: FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        alignSelf: "center",
        width: { xs: "90%", sm: "50%" },
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
      <Typography>
        Tusen takk for at dere vil feire denne spesielle dagen
        med oss. Vi vet at mange har kostnader knyttet til reise og overnatting,
        og vi vil derfor understreke at den største gaven for oss er deres
        tilstedeværelse på dagen. Vi forventer ingenting utover dette{" "}
        <FavoriteOutlinedIcon fontSize="inherit" />
      </Typography>
      <Typography>
        Dersom noen ønsker å gi en gave, setter vi stor pris på tilskudd til
        bryllupsreise.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "1rem auto",
          padding: "1rem",
          width: {xs: "80%", md: "60%"},
          border: `1px solid ${colors.goldAccent[500]}`,
          position: "relative",
          "&:before, &:after": {
            backgroundColor: "#ededed",
            content: "''",
            display: "block",
            height: "10px",
            position: "absolute",
            width: "10px",
          },
          "&:after": {
            bottom: "-1px",
            right: "-1px",
          },
          "&:before": {
            top: "-1px",
            left: "-1px",
          },
        }}
      >
        <Typography><strong>Vipps:</strong> 5872CB</Typography>
        <Typography><strong>MobilePay:</strong> +4748509057</Typography>
        {/* <Typography><strong>Kontonummer:</strong> 3030 38 01444</Typography> */}
        <Typography>IBAN: NO66 3030 3801 444</Typography>
        <Typography sx={{ marginTop: "-1rem" }}>BIC/SWIFT: FLEKNO21XXX</Typography>
      </Box>
    </Box>
  );
};

export default WishesContainer;
