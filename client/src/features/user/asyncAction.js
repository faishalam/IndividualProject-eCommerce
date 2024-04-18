import { heroService } from "../../services/hero"
import { setUser } from "./userSlice"


export const userLogin = (form) => {
    return async (dispatch) => {
        try {
            const response = await heroService.post("/login", form, {})
            localStorage.setItem("access_token", response.data.access_token)

            if (response.data !== null) {
                dispatch(setUser(response.data.access_token))
            }

        } catch (error) {
            throw error.response.data.message
        }
    }
}

export const userRegister = (form) => {
    return async (dispatch) => {
        try {
            const response = await heroService.post("/register", form, {})

            if (response.data !== null) {
                dispatch(setUser(response.data))
            }
        } catch (error) {
            throw error.response.data.message
        }
    }
}

export const googleLogin = (response) => {
    return async (dispatch) => {
        try {
            const res = await heroService.post('/login/auth/google', {}, {
                headers: {
                    g_token: `${response.credential}`
                }
            })
            localStorage.setItem("access_token", res.data.access_token)

            if (res.data !== null) {
                dispatch(setUser(res.data.access_token))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const userLogout = () => {
    return async (dispatch) => {
        dispatch(setUser({}))
    }
}