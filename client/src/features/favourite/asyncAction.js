import { heroService } from "../../services/hero"
import { setFavourite } from "./favouriteSlice"

export const fetchFavourite = () => {
    return async (dispatch) => {
        try {
            const response = await heroService.get("/favourite", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            if (response.data !== null) {
                dispatch(setFavourite(response.data))
            }
        } catch (error) {
            throw error.response.data.message
        }
    }
}

export const addToFavourite = (id) => {
    return async (dispatch) => {
        try {
            const response = await heroService.post(`/favourite/${id}`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            console.log(response, "async")

            if (response.data !== null) {
                dispatch(setFavourite(response.data))
                dispatch(fetchFavourite())
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const removeFavourite = (id) => {
    return async (dispatch) => {
        try {
            if(id === undefined) {
                dispatch(fetchFavourite())
                return
            }
            const response = await heroService.delete(`/favourite/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            dispatch(fetchFavourite())
        } catch (error) {
            console.log(error)
        }
    }
}