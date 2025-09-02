import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    orders: null,
    loading: false,
    error: null,
}

const orderSlice = createSlice({
    name: 'orders',
    initialState: initial_state,
    reducers: {
        // si falla
        createOrderFail: (state = initial_state, action) => {
            return {
                ...state,
                error: action.payload
            }
        },

        // si sale todo bien
        fetchOrderSuccess: (state, action) => {
            return {
                ...state,
                loading: false,
                error: null,
                orders: [
                    ...action.payload
                ]
            }
        },

        fetchOrderFail: (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        },

        fetchOrdersStart: (state) => {
            return {
                ...state,
                loading: true,
            }
        },

        clearError: (state) => {
            return {
                ...state,
                error: null,
            }
        },

        clearOrder: (state) => {
            return {
                ...state,
                orders: null,
            }
        }
    }
})

export const {
    createOrderFail,
    fetchOrderSuccess,
    fetchOrdersStart,
    fetchOrderFail, 
    clearError,
    clearOrder
} = orderSlice.actions

export default orderSlice.reducer