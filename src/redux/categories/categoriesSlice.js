import { createSlice } from "@reduxjs/toolkit";
import { categories } from "../../data/Categories";


const initial_state = {
    categories: categories,
    selectedCategory: null, 
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState: initial_state,
    reducers: {

        getCategories: state => {
            return state
        },

        selectCategory: (state, action) => {
            return {
                ...state,
                selectedCategory: action.payload !== state.selectedCategory ? action.payload: null,
            }
        } 
    }
})

export const { getCategories, selectCategory } = categoriesSlice.actions
export default categoriesSlice.reducer