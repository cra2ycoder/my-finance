import { createTheme } from '@mui/material/styles'
// import darkScrollbar from '@mui/material/darkScrollbar'

export default createTheme({
  typography: {
    fontFamily: [
      '"IBM Plex Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#f3f6f9',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        // body: darkScrollbar(),
      },
    },
  },
})
