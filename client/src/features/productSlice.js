import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: [],
}


export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
       setProduct: (state, action) => {
           state.product = action.payload
       }
    }
})

// Action creators are generated for each case reducer function
export const { setProduct} = productSlice.actions

export default productSlice.reducer