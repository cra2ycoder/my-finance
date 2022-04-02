import React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

function YearlyPicker(props = {}) {
  const { list = [], id = '', label = '' } = props
  const [value, setValue] = React.useState('')

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
  }

  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-picker-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-picker-label`}
        id={`${id}-picker-select`}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {list.map(x => (
          <MenuItem key={`${id}-picker-${x}`} value={x}>
            {x}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export { YearlyPicker }
export default YearlyPicker
