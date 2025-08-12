import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories";


const initial_state = {
    categories: categories,
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: initial_state,
    reducers: {
        getCategories: state => {
            return state
        }
    }
})

export const {getCategories} = categoriesSlice.actions
export default categoriesSlice.reducer