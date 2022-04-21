import React from 'react'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles'

interface ITypoProps {
  text: string
}

function PageHeading({ text }: ITypoProps) {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: '4rem',
        fontWeight: 700,
        color: 'rgb(24 118 209)',
        letterSpacing: -4,
        lineHeight: 1,
      }}
    >
      {text}
    </Typography>
  )
}

function PageSubHeading({ text }: ITypoProps) {
  return (
    <Typography
      variant="h3"
      sx={{
        fontSize: '1.5rem',
        fontWeight: 300,
        color: 'rgb(62, 80, 96)',
        letterSpacing: -1,
      }}
    >
      {text}
    </Typography>
  )
}

interface IMenuLinkProps {
  link: string
  text: string
  color?: string
}

function MenuLink(props: IMenuLinkProps) {
  const { link, text, color } = props
  const theme = useTheme()

  return (
    <Link href={link} underline="none">
      <Typography
        sx={{
          margin: '0.8rem',
          color: color || theme.palette.primary.dark,
          fontWeight: theme.typography.fontWeightMedium,
        }}
      >
        {text}
      </Typography>
    </Link>
  )
}

export { PageHeading, PageSubHeading, MenuLink }
