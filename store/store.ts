import {configureStore} from '@reduxjs/toolkit'
import {userApi} from "../services/UserService";

export const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware)
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch