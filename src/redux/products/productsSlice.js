import { createSlice } from "@reduxjs/toolkit";

import {Products, TotalProducts } from "../../data/Products"


const initial_state = {
    products: Products, 
    totalProducts: TotalProducts
}

export const productsSlice = createSlice({
    name: "products",
    initialState: initial_state,
    reducers: {
        getProducts: state => {
            return state
        }
    }
})

export const { getProducts } = productsSlice.actions
export default productsSlice.reducer