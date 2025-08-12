import { createSlice } from "@reduxjs/toolkit"
import { pickRandomProducts } from "../../utils/pickRandomProducts"


const initial_state = {
    recommended: pickRandomProducts(4),
    // Array(4)
    // .fill(0)
    // .reduce((acc, _item) => {
    //   const IDs = acc.map(value => value.id);
    //   let newRecommended;
    //   do {
    //     newRecommended = {
    //       ...products[Math.floor(Math.random() * products.length)],
    //     };
    //   } while (IDs.includes(newRecommended.id));

    //   return [...acc, newRecommended];
    // }, []),
}

export const recommendedSlice = createSlice({
    name: "recommended",
    initialState: initial_state,
    reducers: {
        getRandomRecommended: state => {
            return state
        }
    }
})

export const getRandomRecommended = recommendedSlice.actions
export default recommendedSlice.reducer