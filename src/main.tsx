import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Default MUI blue for buttons and checkboxes
      contrastText: '#ffffff', // White text for contained buttons
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff', // White for cards and surfaces
    },
    text: {
      primary: '#000000', // Normal black for text
      secondary: '#424242', // Dark gray for secondary text
    },
    divider: '#e0e0e0', // Light gray divider
    border : {
      main : "#e5e5e5",
    }
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Roboto", sans-serif',
    fontSize: 14,
    allVariants: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      textRendering: 'optimizeLegibility',
      letterSpacing: '0.02em',
      fontSmooth: 'always',
    },
    h1: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#000000',
    },
    h2: {
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#000000',
    },
    body1: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: '#000000',
    },
    body2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: '#424242',
    },
    button: {
      textTransform: 'none',
      fontWeight: 400, // Lighter font weight
      fontSize: '0.875rem',
      color: '#000000', // Black text for text buttons
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f5f5f5',
          fontSmooth: 'always',
        },
        '*': {
          boxSizing: 'border-box',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          fontWeight: 400,
          padding: '5px 16px',
          '&.MuiButton-contained': {
            backgroundColor: '#1976d2', // Blue background
            color: '#ffffff', // White text
            '&:hover': {
              backgroundColor: '#1565c0', // Darker blue on hover
            },
          },
          '&.MuiButton-outlined': {
            borderColor: '#1976d2', // Blue border
            color: '#ffffff', // White text
            backgroundColor: 'transparent',
            '&:hover': {
              borderColor: '#1565c0',
              backgroundColor: 'rgba(25, 118, 210, 0.04)', // Slight blue tint on hover
            },
          },
          '&.MuiButton-text': {
            color: '#000000', // Black text
            '&:hover': {
              color: '#000000',
              backgroundColor: 'rgba(25, 118, 210, 0.04)', // Slight blue tint on hover
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#1976d2', // Blue for checked state
          },
          '&:hover': {
            color: '#1565c0', // Darker blue on hover
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e0e0e0',
            borderRadius: '1000px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#1976d2',
            borderWidth: '2px',
          },
          '& .MuiOutlinedInput-input': {
            // height: '100%',  
            color: '#000000', // Black text for input
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          border: '1px solid #e0e0e0',
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 12,
          border: '1px solid #e0e0e0',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px',
          '&:last-child': {
            paddingBottom: '16px',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.8125rem', // 13px, slightly larger for readability
          fontWeight: 400, // Lighter font weight (Regular)
          padding: '8px',
          color: '#333333', // Softer dark gray for less stark contrast
        },
        head: {
          fontSize: '0.8125rem', // 13px for header cells
          fontWeight: 500, // Slightly bolder for headers
          color: '#333333', // Same softer gray for headers
          backgroundColor: '#f5f5f5', // Light background to distinguish headers
        },
      },
    },
    MuiTableRow : {
      styleOverrides : {
        root: {
          borderRadius: "10px"
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 8,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e0e0e0',
            },
            '&:hover fieldset': {
              borderColor: '#1976d2',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1976d2',
            },
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
