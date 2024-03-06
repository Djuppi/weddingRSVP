import {
  AppBar,
  Box,
  Button,
  Toolbar,
  styled,
} from "@mui/material";
import { useState } from "react";
import Leaf from "./Leaf";

const StyledAppBarComponent = styled(AppBar)`
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #121212; /* You can change the text color */
  box-shadow: none;
`;

const StyledAppBar = () => {
  const [, setAnchorElNav] = useState<null | HTMLElement>(null);

  const pages = ["Home", "Info", "RSVP"];
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBarComponent position="fixed">
      <Toolbar>
        <Leaf />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "end",
            gap: "3rem",
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </StyledAppBarComponent>
  );
};

export default StyledAppBar;
