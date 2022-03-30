import Header from '@components/Header'
import Footer from '@components/Footer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import '../styles/global.css'

const theme = createTheme({
  typography: {
    fontFamily: [
      'IBM Plex Sans',
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
})

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box marginTop="6rem">
        <Container sx={{ margin: 'auto' }}>
          <Box>
            <Typography
              sx={{
                fontSize: '4.5vh',
                margin: '2rem 0',
                fontWeight: 800,
              }}
            >
              {Component.name || 'Component Name'}
            </Typography>
            <Typography
              sx={{
                fontSize: '1.5vh',
                margin: '2rem 0',
                fontWeight: 400,
                color: 'rgb(62, 80, 96)',
              }}
            >
              Where your all spendings will be maintained here.
            </Typography>
          </Box>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
