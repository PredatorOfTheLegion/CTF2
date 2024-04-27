import { configureStore } from '@reduxjs/toolkit'
import { postApi } from './postApi'
import { steamApi } from './steamApi'

export const store = configureStore({
    reducer: {
        [postApi.reducerPath] : postApi.reducer,
        [steamApi.reducerPath]: steamApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware, steamApi.middleware)
})
