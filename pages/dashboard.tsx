import Box from '@mui/material/Box'
import Header from '@components/Header'
import DashboardGrid from '@components/DashboardGrid'
import Container from '@mui/material/Container'
// import { useRouter } from 'next/router'

function Dashboard() {
  return (
    <Box>
      <Header />
      <Container sx={{ margin: 'auto', marginTop: '3rem' }}>
        <DashboardGrid />
      </Container>
    </Box>
  )
}

export default Dashboard
