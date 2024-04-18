import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favourite: [],
}

export const favouriteSlice = createSlice({
    name: 'favourite',
    initialState: initialState,
    reducers: {
        setFavourite: (state, action) => {
            state.favourite = action.payload
        },
       
    }
})

export const { setFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer