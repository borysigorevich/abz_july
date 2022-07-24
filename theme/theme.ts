import {createTheme} from '@mui/material/styles'

export let theme = createTheme({
    palette: {
        primary: {
            main: '#f4e041'
        },
        secondary: {
            main: '#00bdd3'
        },
        background: {
            default: '#f8f8f8'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 360,
            md: 768,
            lg: 1024,
            xl: 2560
        }
    },
    mixins: {
        toolbar: {
            minHeight: 60
        }
    },
    typography: {
        fontFamily: "Nunito, sans-serif",

        h1: {
            fontSize: '40px',
            lineHeight: '40px',
            letterSpacing: 'unset'
        },
        body1: {
            fontSize: '16px',
            lineHeight: '26px',
            letterSpacing: 'unset'
        }
    }
})

theme = {
    ...theme,
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    [theme.breakpoints.up('xs')]: {
                        padding: '0 16px'
                    },
                    [theme.breakpoints.up('md')]: {
                        padding: '0 32px'
                    },
                    [theme.breakpoints.up('lg')]: {
                        padding: '0 60px'
                    },
                    [theme.breakpoints.up('xl')]: {
                        padding: '0'
                    }
                }
            }
        }
    }
}