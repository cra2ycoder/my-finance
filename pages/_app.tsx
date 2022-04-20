import Header from '@components/Header'
import Footer from '@components/Footer'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import lightTheme from '@styles/lightTheme'
import { MainFlexBox } from '@components/Base/Layout'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header />
      <MainFlexBox>
        <Component {...pageProps} />
      </MainFlexBox>
      <Footer />
    </ThemeProvider>
  )
}
