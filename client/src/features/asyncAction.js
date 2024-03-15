import { heroService } from "../services/hero"
import { setProduct } from "./productSlice"



export const fetchProducts = (params = {}) => {
    return async (dispatch) => {
        try {
            const response = await heroService.get("/product")

            if (response.data !== null) {
                dispatch(setProduct(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}
