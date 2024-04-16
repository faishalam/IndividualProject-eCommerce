import { heroService } from "../../services/hero"
import { fetchHistory } from "../history/asyncAction"
import { setCart } from "./cartSlice"


export const fetchCart = () => {
    return async (dispatch) => {
        try {
            const response = await heroService.get("/cart", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            if (response.data !== null) {
                dispatch(setCart(response.data))

            }

        } catch (error) {
            throw error.response.data.message
        }
    }
}

export const addToCart = (id, form) => {
    return async (dispatch) => {
        try {
            const response = await heroService.post(`/cart/${id}`, form, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            if (response.data !== null) {
                dispatch(setCart(response.data))
                dispatch(fetchCart())
            }
        } catch (error) {
            throw error.response.data.message
        }
    }
}

export const removeCart = (id) => {
    return async (dispatch) => {
        try {
            if (id === undefined) {
                dispatch(fetchCart())
                return
            }
            const response = await heroService.delete(`/cart/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            dispatch(fetchCart())
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateCart = (id) => {
    return async (dispatch) => {
        try {
            const response = await heroService.patch(`/cart/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })
            dispatch(fetchCart())
            dispatch(fetchHistory())
        } catch (error) {
            console.log(error)
        }
    }
}

