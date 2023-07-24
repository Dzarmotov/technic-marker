import { createSlice } from '@reduxjs/toolkit'
import { ITechnic } from '../../models/Technica'

interface IBookmarks {
    items: ITechnic[],
    item: number
}

const initialState: IBookmarks = {
    items: [],
    item: 0,
}

const bookMarksSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addToBookmarks: (state, action) => {
            let item = action.payload

            let itemsInBookMarks = state.items.find((cartItem) => cartItem.id === item.id)

            if (!itemsInBookMarks) {
                state.items.push(item)
                state.item++
            } else {
                alert('Товар уже существует в закладках')
            }

        },
        removeToBookmarks: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload.id)
            state.item--
        }
    }
})

export const { addToBookmarks, removeToBookmarks } = bookMarksSlice.actions
export default bookMarksSlice.reducer