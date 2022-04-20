import Header from '@components/Header'
import Footer from '@components/Footer'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import lightTheme from '@styles/lightTheme'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header />
      <main className="main-app-wrapper">
        {/* <Component {...pageProps} /> */}
      </main>
      <Footer />
    </ThemeProvider>
  )
}
