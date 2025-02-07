import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    edit: false,
    selectedId: null,
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
                (item) => item.pizzaId === action.payload
            )
            item.quantity++
            item.totalPrice = item.unitPrice * item.quantity
        },
        decreaseItemQuantity(state, action) {
            const item = state.cart.find(
                (item) => item.pizzaId === action.payload
            )
            item.quantity--
            item.totalPrice = item.unitPrice * item.quantity
            if (item.quantity === 0)
                cartSlice.caseReducers.removeItem(state, action)
        },
        addIngredients: {
            prepare(id, ingredient) {
                return {
                    payload: {
                        id,
                        ingredient,
                    },
                }
            },
            reducer(state, action) {
                const item = state.cart.find(
                    (item) => item.pizzaId === action.payload.id
                )

                item.otherIngredients.push(action.payload.ingredient)
            },
        },

        removeIngredients: {
            prepare(id, ingredient) {
                return {
                    payload: {
                        id,
                        ingredient,
                    },
                }
            },
            reducer(state, action) {
                const item = state.cart.find(
                    (item) => item.pizzaId === action.payload.id
                )

                item.otherIngredients = item.otherIngredients.filter(
                    (el) => el !== action.payload.ingredient
                )
            },
        },
        setEdit(state, action) {
            state.edit = !state.edit
            state.selectedId = action.payload
        },

        clearCart(state) {
            state.cart = []
        },
    },
})

export const {
    addItem,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    addIngredients,
    removeIngredients,
    setEdit,
    clearCart,
} = cartSlice.actions

export default cartSlice.reducer

export const getCart = (state) => state.cart.cart
export const getIngredients = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.ingredients ?? []

export const getOtherIngredients = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.otherIngredients ?? []

export const getTotalQuantity = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.quantity, 0)

export const getTotalPrice = (state) =>
    state.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0)

export const getCurrenttQuantityById = (id) => (state) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0

export const getEditMode = (state) => state.cart.edit
export const getSelectedId = (state) => state.cart.selectedId
