import React from 'react'
import Box from '@mui/material/Box'
import { PageHeading, PageSubHeading } from '@components/Base/Typography'
import { FluidFlexBox } from '@components/Base/Layout'
import { IPageTitleProps } from './typings'

function PageTitle(props: IPageTitleProps) {
  const { title, desc, children } = props

  return (
    <FluidFlexBox marginBottom="2rem" flexWrap="wrap" gap="2rem">
      <Box flexGrow={1}>
        <PageHeading text={title} />
        <PageSubHeading text={desc} />
      </Box>
      <Box flexGrow={1}>{children}</Box>
    </FluidFlexBox>
  )
}

export { PageTitle }
export default PageTitle
