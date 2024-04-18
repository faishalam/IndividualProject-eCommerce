import { useEffect, useState } from "react"
import LoginForm from "../fragments/auth/loginForm"
import RegisterForm from "../fragments/auth/registerForm"
import { googleLogin } from "../../features/user/asyncAction"
import { useDispatch } from "react-redux"

export default function ModalAuth() {
    const [auth, setAuth] = useState('login')
    const dispatch = useDispatch()

    async function handleCredentialResponse(response) {
        try {
            await dispatch(googleLogin(response))
            document.getElementById('modalAuth').close()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        google.accounts.id.initialize({
            client_id: process.env.G_CLIENT,
            callback: handleCredentialResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "medium" }
        );
        google.accounts.id.prompt();
    }, [])

    return (
        <>
        
            <dialog id="modalAuth" className="modal w-2/6 h-3/6">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    {
                        auth === 'login' && (
                            <LoginForm setAuth={setAuth} googleButton={<div id="buttonDiv"></div>}/>
                        )
                    }

                    {
                        auth === 'register' && (
                            <RegisterForm setAuth={setAuth} googleButton={<div id="buttonDiv"></div>}/>
                        )
                    }

                </div>
            </dialog>

        </>
    )
}