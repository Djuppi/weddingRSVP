import {
  enUS as coreEnUS,
  nbNO as coreNbNO,
  daDK as coreDaDX,
} from "@mui/material/locale";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#fff",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          900: "#c2dfff",
          800: "#94c2ff",
          700: "#66a6ff",
          600: "#3d8eff",
          500: "#2555d4",
          400: "#0060cc",
          300: "#0050a3",
          200: "#004072",
          100: "#002641",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#fff",
        },
        primary: {
          100: "#e5efe5",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0", // manually changed
          500: "#191819",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        greenAccent: {
          100: "#0f2922",
          200: "#1e5245",
          300: "#2e7c67",
          400: "#3da58a",
          500: "#4cceac",
          600: "#70d8bd",
          700: "#94e2cd",
          800: "#b7ebde",
          900: "#dbf5ee",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          50: "#f0f5ff",
          100: "#c2dfff",
          200: "#94c2ff",
          300: "#66a6ff",
          400: "#3d8eff",
          500: "#2555d4",
          600: "#0060cc",
          700: "#0050a3",
          800: "#004072",
          900: "#002641",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    overrides: {
      
    },
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            info: {
              main: colors.blueAccent[400],
            },
            error: {
              main: colors.redAccent[400],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            info: {
              main: colors.blueAccent[500],
            },
            error: {
              main: colors.redAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
      h1: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 40,
        background: "linear-gradient(to left, transparent, green, green, transparent)"
      },
      h2: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Oleo Script", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const useMode = () => {
  const [mode, setMode] = useState("light");
  const { _, data: user } = useFetchActiveUser();

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  // Assigns localization for MUI components when language setting from backend changes
  const locale = useMemo(
    () => ({
      dataGrid:
        user?.Company?.LanguageId === "no"
          ? nbNO
          : user?.Company?.LanguageId === "pt"
          ? ptBR
          : enUS,
      datePickers:
        user?.Company?.LanguageId === "no"
          ? pickersNbNO
          : user?.Company?.LanguageId === "pt"
          ? pickersPtBR
          : pickersEnUS,
      core:
        user?.Company?.LanguageId === "no"
          ? coreNbNO
          : user?.Company?.LanguageId === "pt"
          ? corePtBR
          : coreEnUS,
    }),
    [user?.Company?.LanguageId]
  );

  const theme = useMemo(
    () =>
      createTheme(
        themeSettings(mode),
        locale.dataGrid,
        locale.datePickers,
        locale.core
      ),
    [mode, locale]
  );
  return [theme, colorMode];
};
