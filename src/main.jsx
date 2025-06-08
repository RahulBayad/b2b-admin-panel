import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { barElementClasses, pieArcLabelClasses } from '@mui/x-charts';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2e2e33', // Dark gray for icons/texts when needed
    },
    background: {
      default: '#f7f9fc', // Body background (very light gray-blue)
      paper: '#ffffff',   // Card/box background
    },
    border: {
      main: '#e3e3e3', // Body background (very light gray-blue)
    },
    text: {
      primary: '#1e293b',    // Main text: dark slate gray
      secondary: '#64748b',  // Light gray text
    },
    divider: '#e2e8f0', // Light gray divider,
    sidebar : {
      background : "#00041b",
      foreground : "white",
    }
  },

  typography: {
    // fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
    fontSize: 14,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f7f9fc',
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
          border: '1px solid #e2e8f0',
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 12,
          border: '1px solid #e2e8f0',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          borderRadius: 8,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#e2e8f0',
            },
            '&:hover fieldset': {
              borderColor: '#cbd5e1',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#94a3b8',
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
  },
  MuiChart: {
      styleOverrides: {
        root: {
          fontFamily: '"Inter", "Roboto", sans-serif',
        },
      },
    },
    MuiBarChart: {
      styleOverrides: {
        root: {
          [`& .${barElementClasses.root}`]: {
            fillOpacity: 0.9,
            stroke: '#ffffff',
            strokeWidth: 1,
            transition: 'all 0.3s ease',
            '&:hover': {
              fillOpacity: 1,
              transform: 'scale(1.02)',
            },
          },
        },
      },
    },
    MuiPieChart: {
      styleOverrides: {
        root: {
          [`& .${pieArcLabelClasses.root}`]: {
            fill: '#ffffff',
            fontWeight: 'bold',
            fontSize: '12px',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
          },
          '& .MuiChartsLegend-root': {
            fontSize: '0.875rem',
            color: '#1f2a44',
          },
        },
      },
    },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>  
      <App />
    </ThemeProvider>
  </StrictMode>,
)
