import { createTheme } from '@mui/material/styles';

// Fashion Store Custom Theme
const fashionTheme = createTheme({
  palette: {
    primary: {
      main: '#E8B4B8',
      dark: '#D4949A',
      light: '#F5F1ED',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D4AF37',
      dark: '#B8941F',
      light: '#E6C866',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
    text: {
      primary: '#4A4A4A',
      secondary: '#6C757D',
    },
    grey: {
      50: '#F8F9FA',
      100: '#F5F1ED',
      200: '#E9ECEF',
      300: '#DEE2E6',
      400: '#CED4DA',
      500: '#ADB5BD',
      600: '#6C757D',
      700: '#495057',
      800: '#343A40',
      900: '#212529',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.1,
      '@media (max-width:768px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.2,
      '@media (max-width:768px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.25rem',
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.75rem',
      lineHeight: 1.3,
      '@media (max-width:768px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: '#4A4A4A',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      color: '#6C757D',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 2px 8px rgba(232, 180, 184, 0.1)',
    '0 4px 12px rgba(232, 180, 184, 0.15)',
    '0 6px 16px rgba(232, 180, 184, 0.2)',
    '0 8px 20px rgba(232, 180, 184, 0.25)',
    '0 10px 24px rgba(232, 180, 184, 0.3)',
    '0 12px 28px rgba(232, 180, 184, 0.35)',
    '0 14px 32px rgba(232, 180, 184, 0.4)',
    '0 16px 36px rgba(232, 180, 184, 0.45)',
    '0 18px 40px rgba(232, 180, 184, 0.5)',
    '0 20px 44px rgba(232, 180, 184, 0.55)',
    '0 22px 48px rgba(232, 180, 184, 0.6)',
    '0 24px 52px rgba(232, 180, 184, 0.65)',
    '0 26px 56px rgba(232, 180, 184, 0.7)',
    '0 28px 60px rgba(232, 180, 184, 0.75)',
    '0 30px 64px rgba(232, 180, 184, 0.8)',
    '0 32px 68px rgba(232, 180, 184, 0.85)',
    '0 34px 72px rgba(232, 180, 184, 0.9)',
    '0 36px 76px rgba(232, 180, 184, 0.95)',
    '0 38px 80px rgba(232, 180, 184, 1)',
    '0 40px 84px rgba(232, 180, 184, 1)',
    '0 42px 88px rgba(232, 180, 184, 1)',
    '0 44px 92px rgba(232, 180, 184, 1)',
    '0 46px 96px rgba(232, 180, 184, 1)',
    '0 48px 100px rgba(232, 180, 184, 1)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #E8B4B8 0%, #D4949A 100%)',
          color: '#FFFFFF',
          boxShadow: '0 4px 20px rgba(232, 180, 184, 0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #D4949A 0%, #C08086 100%)',
            boxShadow: '0 8px 30px rgba(232, 180, 184, 0.4)',
          },
        },
        outlined: {
          borderColor: '#E8B4B8',
          color: '#D4949A',
          borderWidth: '2px',
          '&:hover': {
            borderColor: '#D4949A',
            backgroundColor: 'rgba(232, 180, 184, 0.1)',
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(232, 180, 184, 0.15)',
          border: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 8px 30px rgba(232, 180, 184, 0.25)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(232, 180, 184, 0.1)',
          color: '#4A4A4A',
          boxShadow: '0 2px 8px rgba(232, 180, 184, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
        filled: {
          backgroundColor: '#E8B4B8',
          color: '#FFFFFF',
        },
        outlined: {
          borderColor: '#E8B4B8',
          color: '#D4949A',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover fieldset': {
              borderColor: '#E8B4B8',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#D4949A',
            },
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgba(232, 180, 184, 0.1)',
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        elevation1: {
          boxShadow: '0 2px 8px rgba(232, 180, 184, 0.1)',
        },
        elevation2: {
          boxShadow: '0 4px 12px rgba(232, 180, 184, 0.15)',
        },
        elevation3: {
          boxShadow: '0 6px 16px rgba(232, 180, 184, 0.2)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '16px',
          paddingRight: '16px',
          '@media (min-width: 600px)': {
            paddingLeft: '24px',
            paddingRight: '24px',
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default fashionTheme;

