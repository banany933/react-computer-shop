import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    itemsCount: 0,
    totalPrice: 0,
    

}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    }
})

export const {  } = cartSlice.actions

export default cartSlice.reducer