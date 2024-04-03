import { AppBar, Box, Toolbar, styled } from "@mui/material";
import Leaf from "./Leaf";
import { Link } from "react-scroll";

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

  const pages = [
    { id: 1, Title: "Home", ref: "home" },
    { id: 2, Title: "RSVP", ref: "rsvp" },
    { id: 3, Title: "Info", ref: "info" },
    { id: 4, Title: "Program", ref: "program" },
  ];

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
            <Link
              to={page.ref}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ cursor: "pointer" }}
              >
            
              {page.Title}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </StyledAppBarComponent>
  );
};

export default StyledAppBar;
