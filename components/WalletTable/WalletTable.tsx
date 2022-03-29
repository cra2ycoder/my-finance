import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function WalletTable(props = {}) {
  const { type = 'parent' } = props
  const [open, setOpen] = useState({})
  const [id, setId] = useState(null)

  const toggleCollapse = (t, idx) => {
    const p = `${t}-${idx}`
    const newState = {
      ...open,
      [p]: !open[p],
    }
    setOpen(newState)
    setId(idx)

    console.log({ newState, idx })
  }

  return (
    <TableContainer sx={{ marginTop: '2rem' }}>
      <Table
        sx={{ minWidth: 700 }}
        aria-label="customized table"
        size={props.size}
      >
        <TableHead>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell></TableCell>
            <TableCell>Items</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props?.list?.map((x, idx) => (
            <React.Fragment key={`wallet-table-row-${type || 'parent'}-${idx}`}>
              <TableRow>
                <TableCell>
                  {x?.groups && x?.groups?.length > 0 && (
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => toggleCollapse(type, idx)}
                    >
                      {open[`${type}-${idx}`] ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  )}
                </TableCell>
                <TableCell>{x.title}</TableCell>
                <TableCell>{x.value}</TableCell>
              </TableRow>
              {x?.groups && x?.groups?.length > 0 && (
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse
                      in={open[`${type}-${idx}`] || false}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Box sx={{ margin: 1 }}>
                        <WalletTable
                          list={x.groups}
                          type="child"
                          size="small"
                        />
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { WalletTable }
export default WalletTable
