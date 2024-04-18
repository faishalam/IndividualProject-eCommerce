import { heroService } from "../../services/hero"
import { setProduct, setProductById } from "./productSlice"


export const fetchProducts = (params) => {
    return async (dispatch) => {
        try {
            let response;

            if (!params) {
                response = await heroService.get("/product")
            }

            if (params) {
                response = await heroService.get(`/product/?${params.filter}`)
            }


            if (response.data !== null) {
                dispatch(setProduct(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const getProductById = (id) => {
    return async (dispatch) => {
        try {
            const response = await heroService.get(`/product/${id}`)

            if (response.data !== null) {
                dispatch(setProductById(response.data))
            }
        } catch (error) {
            console.log(error)
        }
    }
}
