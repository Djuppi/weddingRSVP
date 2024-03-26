import { AppBar, Box, Button, Toolbar, styled } from "@mui/material";
import { useState } from "react";
import Leaf from "./Leaf";
import { RefreshSharp } from "@mui/icons-material";
import "scroll-behavior-polyfill";

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

interface Props {
  refs: {
    programContainerRef: React.RefObject<HTMLDivElement>;
    infoContainerRef: React.RefObject<HTMLDivElement>;
    homeContainerRef: React.RefObject<HTMLDivElement>;
    rsvpContainerRef: React.RefObject<HTMLDivElement>;
  };
}

const StyledAppBar = (props: Props) => {
  const { refs } = props;
  const [achorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const pages = [
    { id: 1, Title: "Home", ref: refs.homeContainerRef },
    { id: 2, Title: "Info", ref: refs.infoContainerRef },
    { id: 3, Title: "RSVP", ref: refs.rsvpContainerRef },
  ];

  const handleClick = (ref: React.RefObject<HTMLDivElement>) => {
    const element = ref.current;
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <StyledAppBarComponent position="fixed">
      <Toolbar id="back-to-top-anchor">
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
              key={page.id}
              onClick={() => handleClick(page.ref)}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              {page.Title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </StyledAppBarComponent>
  );
};

export default StyledAppBar;
