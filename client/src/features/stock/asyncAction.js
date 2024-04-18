import { heroService } from "../../services/hero"
import { setStock, setStockById } from "./stockSlice"


export const fetchStock = () => {
    return async (dispatch) => {
        try {
            const response = await heroService.get("/productstock", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            if (response.data !== null) {
                dispatch(setStock(response.data))
            }
        } catch (error) {
            throw error.response.data.message
        }
    }
}

export const fetchStockById = (id) => {
    return async (dispatch) => {
        try {
            const response = await heroService.get(`/productstock/${id}`)

            if (response.data !== null) {
                dispatch(setStockById(response.data))
            }
        } catch (error) {
            throw error.response.data.message
        }
    }
}
