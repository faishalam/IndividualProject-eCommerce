import { useState } from "react"
import LoginForm from "../fragments/auth/loginForm"
import RegisterForm from "../fragments/auth/registerForm"

export default function ModalAuth() {
    const [auth, setAuth] = useState('login')
    

    return (
        <>
            <dialog id="modalAuth" className="modal w-2/6 h-3/6">
                <div className="flex flex-col justify-center items-center w-full h-full">
                        {
                            auth === 'login' && (
                               <LoginForm setAuth={setAuth}/>
                            )
                        }

                        {
                            auth === 'register' && (
                                <RegisterForm setAuth={setAuth}/>
                            )
                        }

                    </div>
            </dialog>
        </>
    )
}