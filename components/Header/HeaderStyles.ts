import {SxProps} from '@mui/material/styles'

export const AppBar: SxProps = {
    boxShadow: 'unset',
    background: '#fff',
}

export const Toolbar: SxProps = {
    '&.MuiToolbar-root': {
        p: 0
    }
}

export const Container: SxProps = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    maxWidth: {
        xl: '1170px'
    }
}

export const ImageBox: SxProps = {
    display: 'flex',
    alignItems: 'center'
}

export const ButtonBox: SxProps = {
    display: 'flex',
    gap: '10px'
}