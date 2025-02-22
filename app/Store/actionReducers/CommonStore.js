import { createSlice } from '@reduxjs/toolkit'

let inputSearch = null
if (typeof window !== 'undefined') {
    inputSearch = localStorage.getItem('input_search_header');
}

export const CommonStore = createSlice({
    name: 'CommonStore',
    initialState: {
        valueInput: inputSearch,
    },
    reducers: {
        InputSearchValue: (state, actions) => {
            localStorage.setItem('input_search_header', actions.payload)
            state.valueInput = actions.payload
        },
    }
})

export const {
    InputSearchValue,
} = CommonStore.actions

export default CommonStore.reducer