import React from 'react'
import Box from '@mui/material/Box'
import { PageHeading, PageSubHeading } from '@components/Base/Typography'

function PageTitle(props: any) {
  const { title, desc, children } = props

  return (
    <Box
      width="100%"
      className="page-title"
      display="flex"
      justifyContent="space-between"
      marginBottom="2rem"
    >
      <Box>
        <PageHeading text={title} />
        <PageSubHeading text={desc} />
      </Box>
      <Box>{children}</Box>
    </Box>
  )
}

export { PageTitle }
export default PageTitle
