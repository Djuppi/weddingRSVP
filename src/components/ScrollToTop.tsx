import { Box, Fade, useScrollTrigger } from "@mui/material";
import { Link } from "react-scroll";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
  }

export const ScrollTop = (props: Props) => {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        offset={-1000}
        style={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Link>
  );
};
