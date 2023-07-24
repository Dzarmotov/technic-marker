import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITechnic } from '../../models/Technica'
import { fetchTechnic } from './API'

interface Technic {
    technic: ITechnic[],
    isLoading: boolean,
    error: string
}

const initialState: Technic = {
    technic: [],
    isLoading: false,
    error: 'Error!'
}

export const technicSlice = createSlice({
    name: 'technic',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchTechnic.pending.type]: (state) => {
            state.isLoading = true
        },
        [fetchTechnic.fulfilled.type]: (state, action: PayloadAction<ITechnic[]>) => {
            state.technic = action.payload
        },
        [fetchTechnic.rejected.type]: (state) => {
            state.error = 'Server Error!'
        }
    }
})

export const technicReducer = technicSlice.actions
export default technicSlice.reducer