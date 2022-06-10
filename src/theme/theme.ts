import { createTheme } from '@mui/material';

const blue = '#0c5696';

const theme = createTheme({
  typography: {
    fontFamily: ['Inter'].join(','),
  },
  palette: {
    primary: {
      main: blue,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          borderRadius: 4,
          letterSpacing: 0.4,
          textTransform: 'none',
          boxShadow: 'none',
          height: 40,
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: '#fff',
            backgroundColor: 'primary.main',
            '&&:hover': {
              backgroundColor: blue,
              boxShadow: 'none',
            },
          },
        },
      ],
    },
  },
});

export default theme;
