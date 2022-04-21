import React from 'react'
import Box from '@mui/material/Box'
import { PageHeading, PageSubHeading } from '@components/Base/Typography'
import { FluidFlexBox } from '@components/Base/Layout'

interface IPageTitleProps {
  title: string
  desc?: string
  children?: React.ReactNode
}

function PageTitle(props: IPageTitleProps) {
  const { title, desc, children } = props

  return (
    <FluidFlexBox marginBottom="2rem">
      <Box>
        <PageHeading text={title} />
        <PageSubHeading text={desc} />
      </Box>
      <Box>{children}</Box>
    </FluidFlexBox>
  )
}

export { PageTitle }
export default PageTitle
