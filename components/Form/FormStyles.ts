import {SxProps} from '@mui/material/styles'

type getStyles = (error: boolean) => SxProps
type getFileName = (photo: boolean) => SxProps

export const Container: SxProps = {
    textAlign: 'center',
    pb: '100px !important'
}

export const Title: SxProps = {
    mb: '50px'
}

export const Form: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '380px',
    mx: 'auto',
}


export const InputBox: SxProps = {
    mb: '23px',
}

export const getTextField: getStyles = error => ({
    '&.MuiTextField-root': {
        mb: error ? '27px' : '49px',
    },

    '& .MuiOutlinedInput-root': {
        maxHeight: '54px'
    }
})

export const RadioControl: SxProps = {
    '& .MuiFormLabel-root': {
        alignSelf: 'flex-start'
    },
    mb: '37px',

    '& .MuiRadio-root': {
        p: '6px 9px'
    },

}

export const FileControl: SxProps = {
    display: 'flex',
    flexDirection: 'row',
    mb: '50px',

    '& .MuiFormControlLabel-root': {
        ml: '0'
    }
}

export const getFileInput: getStyles = (error) => ({
    border: error ? 2 : 1,
    borderColor: error ? '#cb3d40' : '#000',
    p: '14px 15px',
    maxWidth: '83px',
    borderRadius: '4px 0 0 4px',
    mr: 0
})

export const getFileNameBox: getStyles = (error) => ({
    border: error ? 2 : 1,
    borderColor: error ? '#cb3d40' : '#d0cfcf',
    borderLeft: '0',
    borderRadius: '0 4px 4px 0',
    flex: '1',
    textAlign: 'start',
    pl: '16px',

    display: 'flex',
    alignItems: 'center',
})

export const getFileName: getFileName = (photo) => ({
    color: photo ? '#000' : '#7e7e7e'
})

export const FileHelperText: SxProps = {
    color: '#cb3d40',
    position: 'absolute',
    bottom: '-20px',
    left: '14px',
    fontSize: '12px',
    lineHeight: '14px'
}

export const LoaderSpinner: SxProps = {
    alignSelf: 'center'
}

