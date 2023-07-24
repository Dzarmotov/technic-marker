import { configureStore, combineReducers } from "@reduxjs/toolkit";
import technicReducer from '../reducers/TechnicSlice'
import Bookmarks from "../reducers/Bookmarks";

const rootState = combineReducers({
    technicReducer,
    Bookmarks
})

export const store = configureStore({
    reducer: rootState
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch