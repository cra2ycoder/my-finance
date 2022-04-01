import Header from '@components/Header'
import Footer from '@components/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles'
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
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main className="main-app-wrapper">
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  )
}
