import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: [],
    productById: {},
}


export const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload
        },
        setProductById: (state, action) => {
            state.productById = action.payload
        }
    }
})

export const { setProduct, setProductById } = productSlice.actions

export default productSlice.reducer