import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import cartReducer from './features/cart/cartSlice'
import favouritesReducer from './features/favourites/favouritesSlice'
const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        favourites: favouritesReducer,
    },
})

export default store
