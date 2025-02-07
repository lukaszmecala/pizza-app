import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favourites: [],
}

const favouriteSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        addFavourite(state, action) {
            state.favourites.push(action.payload)
        },
        removeFavourite(state, action) {
            state.favourites = state.favourites.filter(
                (favourite) => favourite.id !== action.payload
            )
        },
    },
})

export const { addFavourite, removeFavourite } = favouriteSlice.actions

export default favouriteSlice.reducer
