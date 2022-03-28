import Box from '@mui/material/Box'
import DashboardGrid from '@components/DashboardGrid'
import Container from '@mui/material/Container'

function Dashboard() {
  return (
    <Box>
      <Container sx={{ margin: 'auto', marginTop: '3rem' }}>
        <DashboardGrid />
      </Container>
    </Box>
  )
}

export default Dashboard
