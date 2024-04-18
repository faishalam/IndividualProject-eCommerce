import { heroService } from "../../services/hero"
import { setHistory } from "./historySlice"


export const fetchHistory = () => {
    return async (dispatch) => {
        try {
            const response = await heroService.get("/history", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            if (response.data !== null) {
                dispatch(setHistory(response.data))
            }
        } catch (error) {
            throw error.response.data.message
        }
    }
}
