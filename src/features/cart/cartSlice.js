import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            state.cart.push(action.payload)
        },
        removeItem(state, action) {
            state.cart = state.cart.filter(
                (item) => item.pizzaId !== action.payload
            )
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item) => (item.pizzaId === action.payload) === action.payload
            )
            item.quantity++
            item.totalPrice = item.unitPrice * item.quantity
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item) => (item.pizzaId === action.payload) === action.payload
            )
            item.quantity--
            item.totalPrice = item.unitPrice * item.quantity
        },
        clearCart(state, action) {
            state.cart = []
        },
    },
})

export const {
    addItem,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = (state) => state.cart.cart

export const getTotalQuantity = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)

export const getTotalPrice = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0)

export const getCurrenttQuantityById = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0
