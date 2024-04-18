import { configureStore } from '@reduxjs/toolkit'
import productReducer from './features/product/productSlice'
import userReducer from './features/user/userSlice'
import cartReducer from './features/cart/cartSlice'
import favouriteReducer from './features/favourite/favouriteSlice'
import historyReducer from './features/history/historySlice'
import stockReducer from './features/stock/stockSlice'


export default configureStore({
    reducer: {
        user: userReducer,
        product: productReducer,
        stock: stockReducer,
        cart: cartReducer,
        favourite: favouriteReducer,
        history: historyReducer
    }
})