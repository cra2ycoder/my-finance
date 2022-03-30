import React from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import Box from '@mui/material/Box'

function YearPicker() {
  const [value, setValue] = React.useState(new Date())

  return (
    <Box className="year-picker-parent">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={['month']}
          label="Choose your month"
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} helperText={null} />}
        />
        <DatePicker
          views={['year']}
          label="Choose your year"
          value={value}
          onChange={newValue => {
            setValue(newValue)
          }}
          renderInput={params => <TextField {...params} helperText={null} />}
        />
      </LocalizationProvider>
    </Box>
  )
}

export { YearPicker }
export default YearPicker
