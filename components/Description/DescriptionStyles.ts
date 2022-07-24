import {SxProps} from '@mui/material/styles'

export const Box: SxProps = {
    position: 'relative',
    mb: '140px',
    maxWidth: {
        xl: '1170px'
    },
    mx: 'auto',

    '.bg-image': {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
}

export const Background: SxProps = {
    backgroundColor: 'rgba(0,0,0, .5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
}

export const Container: SxProps = {
    maxWidth: {
        xs: '328px',
        md: '380px'
    },
    color: '#fff',
    textAlign: {
      xs: 'center'
    },
    p: {
      xs: '40px 0px 71px',
      md: '88px 0px 89px',
        lg: '164px 0 163px'
    },
    position: 'relative',
    zIndex: 2
}

export const Title: SxProps = {
    mb: '21px',
}

export const Text: SxProps = {
    mb: '32px',
}