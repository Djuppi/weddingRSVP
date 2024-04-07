import { Grid } from "@mui/material";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
  orderImageDesktop: 1 | 2;
  orderInfoDesktop: 1 | 2;
  image: string;
  id: string;
}

const StyledPicInfoContainer: FC<Props> = ({
  children,
  orderImageDesktop,
  orderInfoDesktop,
  image,
  id
}) => (
  <Grid
    container
    sx={{
      color: "white",
    }}
    id={id}
  >
    <Grid item xs={12} sm={6} order={{ xs: 2, sm: orderImageDesktop }}>
      <img
        src={image}
        alt="hotel"
        width="100%"
        height="100%"
        style={{ filter: "opacity(.5)" }}
      />
    </Grid>
    <Grid
      item
      xs={12}
      sm={6}
      order={{ xs: 1, sm: orderInfoDesktop }}
      sx={{
        backgroundColor: "#6f7863",
        padding: "1rem 2rem",
        borderRadius: " 0 5px 5px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {children}
    </Grid>
  </Grid>
);

export default StyledPicInfoContainer;
