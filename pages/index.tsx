import SignIn from '@components/SignIn'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const gotoDashboard = () => {
    router.push('/dashboard', undefined, { shallow: true })
  }

  return (
    <Container>
      <Box
        justifyContent="center"
        display="flex"
        flexDirection="column"
        textAlign="center"
      >
        <SignIn onSubmit={gotoDashboard} />
      </Box>
    </Container>
  )
}

export default Home
