export default {
  MenuListProps: {
    'aria-labelledby': 'basic-button',
  },
  PaperProps: {
    elevation: 0,
    sx: {
      overflow: 'visible',
      mt: 1.5,
      '&.MuiAvatar-root': {
        ml: -0.5,
        mr: 1,
      },
      '&.MuiPaper-root': {
        width: '200px',
        boxShadow:
          'rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) -20px 20px 40px -4px',
      },
      '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 26,
        width: 10,
        height: 10,
        backgroundColor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  },
  transformOrigin: { horizontal: 'right', vertical: 'top' },
  anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
}
