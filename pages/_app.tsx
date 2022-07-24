import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {ThemeProvider} from '@mui/material/styles'
import {Header} from "@components";
import {theme} from "../theme/theme";
import {store} from "../store/store";

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Header/>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    </>
}

export default MyApp
