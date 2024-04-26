import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  styled,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useEffect, useState } from "react";


const StyledAppBarComponent = styled(AppBar)`
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #121212; /* You can change the text color */
  box-shadow: none;
  width: 100vw;
`;

const StyledAppBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    window.localStorage.getItem("rsvp") && setHasSubmitted(true);
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const pages = [
    { id: 1, Title: "Top", ref: "home" },
    { id: 2, Title: "RSVP", ref: "rsvp" },
    { id: 3, Title: "Info", ref: "info" },
    { id: 4, Title: "Program", ref: "program" },
    { id: 5, Title: "Gaveønsker", ref: "wishes" },
    { id: 6, Title: "Kontakt", ref: "contact" },
  ];

  return (
    <StyledAppBarComponent position="fixed">
      <Toolbar id="back-to-top-anchor" sx={{ justifyContent: "end" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "end",
            gap: "3rem",
          }}
        >
          {pages.map((page, key) => (hasSubmitted && page.id !== 2) && (
            <Link
              to={page.ref}
              key={key}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              style={{ cursor: "pointer", color: "#de9a348f" }}
            >
              {page.Title}
            </Link>
          ))}
        </Box>
        <IconButton
          size="small"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
          sx={{
            mr: 2rem,
            justifyContent: "center",
            display: { xs: "flex", md: "none" },
            "&:focus": {
              outline: "none",
            },
          }}
        >
          {open ? (
            <CloseOutlinedIcon style={{ color: "#de9a348f" }} />
          ) : (
            <MenuIcon style={{ color: "#de9a348f" }} />
          )}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          disableScrollLock={true}
          TransitionComponent={Fade}
        >
          {pages.map((page, key) => (hasSubmitted && page.id !== 2) && (
            <MenuItem key={key}>
              <Link
                to={page.ref}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{ cursor: "pointer", color: "#de9a348f" }}
                onClick={handleClose}
              >
                {page.Title}
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </StyledAppBarComponent>
  );
};

export default StyledAppBar;
