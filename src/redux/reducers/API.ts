import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { ITechnic } from '../../models/Technica'

export const fetchTechnic = createAsyncThunk(
    'technic/fetchTechnic',
    async () => {
        try {

            const { data } = await axios.get<ITechnic>('https://c2f5c7e22c49b5a8.mokky.ru/technica')
            return data

        } catch (e) {
            console.error(e);

        }
    }
)