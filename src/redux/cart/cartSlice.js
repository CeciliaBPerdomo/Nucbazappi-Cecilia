import { createSlice } from "@reduxjs/toolkit";
import { SHIPPING_COST } from "../../utils";
import { addItemToCard, removeItemFromCart, resetShippingCost } from "./cart-utils";

const inital_state = {
    hidden: true,
    cartItems: [],
    shippingCost: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState: inital_state,

    reducers: {
        addToCart: (state, actions) => {
            return {
                ...state,
                shippingCost: SHIPPING_COST,
                cartItems: addItemToCard(state.cartItems, actions.payload)
            }
        },

        removeFromCart: (state, actions) => {
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, actions.payload),
                shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
            }
        },

        clearCart: (state) => {
            return {
                ...state,
                shippingCost: 0,
                cartItems: []
            }
        },

        toggleHiddenCart: (state) => {
            return {
                ...state,
                hidden: !state.hidden,
            }
        }
    }
})

export const {
    addToCart,
    clearCart,
    removeFromCart,
    toggleHiddenCart,
} = cartSlice.actions

export default cartSlice.reducer; 