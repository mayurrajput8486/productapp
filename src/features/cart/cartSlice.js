import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalAmount: 0

    },

    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find((i) => {
                return i.id === action.payload.id
            })

            if (item) {
                item.qty += 1
            } else {
                state.cartItems.push({ ...action.payload, qty: 1 })
            }
            updateTotal(state)
        },

        increaseQty: (state, action) => {
            const item = state.cartItems.find((i) =>  i.id === action.payload)

            if (item) item.qty += 1
            updateTotal(state)
        },

        decreaseQty: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload);
            if (item && item.qty > 1) item.qty -= 1;
            updateTotal(state);
        },

        removeFromCart: (state,action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
            updateTotal(state);
        }
    }
})

const updateTotal = (state) => {
    state.totalAmount = state.cartItems.reduce((total, item) => {
        return total + item.price * item.qty
    }, 0)
}

export const { addToCart, increaseQty, decreaseQty, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer