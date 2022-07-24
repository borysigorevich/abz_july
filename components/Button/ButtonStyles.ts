import {SxProps} from '@mui/material/styles'

type getButtonStyles = (width?: string) => SxProps

export const Button: getButtonStyles = (width) => ({
    p: '4px 0',
    borderRadius: '80px',
    boxShadow: 'unset',
    textTransform: 'unset',
    minHeight: '34px',
    minWidth: width ? width : '100px',
    maxWidth: '100px',
    alignSelf: 'center',

    '&.Mui-disabled': {
        background: '#b4b4b4',
        color: '#fff'
    },

    '&:hover': {
        background: '#ffe302',
        boxShadow: 'unset'
    }
})