import Header from '@components/Header'
import Footer from '@components/Footer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { pageItems } from '@model/config'
import '../styles/global.css'

const theme = createTheme({
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
})

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  const componentName = Component.name
  const { title = '', desc = '' } = pageItems[componentName.toLowerCase()] || {}

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box marginTop="6rem">
        <Container sx={{ margin: 'auto', display: 'flex', flexWrap: 'wrap' }}>
          <Box width="50%" className="page-title">
            <Typography
              sx={{
                fontSize: '4.5vh',
                fontWeight: 700,
                color: 'rgb(19, 47, 76)',
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: '2vh',
                fontWeight: 300,
                marginBottom: '2rem',
                color: 'rgb(62, 80, 96)',
              }}
            >
              {desc}
            </Typography>
          </Box>
          <Component {...pageProps} />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
