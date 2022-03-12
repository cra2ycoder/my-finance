import Header from '@components/Header'
import Box from '@mui/material/Box'

function Dashboard() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        height: 64,
        alignItems: 'center',
        display: 'flex',
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      <Header />
    </Box>
  )
}

export default Dashboard
