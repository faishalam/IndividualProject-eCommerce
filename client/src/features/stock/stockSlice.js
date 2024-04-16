import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stock: [],
    stockById: []
}

export const stockSlice = createSlice({
    name: 'stock',
    initialState: initialState,
    reducers: {
        setStock: (state, action) => {
            state.stock = action.payload
        },
        setStockById: (state, action) => {
            state.stockById = action.payload
        }
    }
})

export const { setStock, setStockById } = stockSlice.actions

export default stockSlice.reducer