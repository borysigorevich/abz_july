import {SxProps} from '@mui/material/styles'

export const Container: SxProps = {
    textAlign: 'center',
    mb: '140px',
    maxWidth: {
        xl: '1170px'
    }
}

export const Title: SxProps = {
    mb: '50px'
}

export const Grid: SxProps = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: {
        xs: 'center',
        md: 'flex-start'
    },
    gap: {
        xs: '20px',
        md: '16px',
        lg: '29px'
    },
    mb: '50px'
}