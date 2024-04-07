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
import Leaf from "./Leaf";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

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
      <Toolbar id="back-to-top-anchor" sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "end",
            gap: "3rem",
          }}
        >
          {pages.map((page, key) => (
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
        <Leaf />
        <IconButton
          size="small"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
          sx={{
            mr: 2,
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
          TransitionComponent={Fade}
        >
          {pages.map((page, key) => (
            <MenuItem key={key}>
              <Link
                to={page.ref}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                style={{ cursor: "pointer", color: "#121212" }}
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
