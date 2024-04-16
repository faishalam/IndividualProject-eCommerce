import { useState } from "react";
import ButtonElement from "../../elements/buttonElement";
import ModalInput from "../../elements/modalInput";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../features/user/asyncAction";
import { ToastContainer, toast } from 'react-toastify';

export default function LoginForm(props) {
    const { setAuth } = props
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('');
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(async () => {
            try {
                await dispatch(userLogin(form))
                setForm({
                    email: '',
                    password: '',
                })
                setError('')
                document.getElementById('modalAuth').close()
            
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }, 2000)
    };

    const handleClick = (e) => {
        e.preventDefault()
        setAuth('register')
    }

    return (
        <>
            <div className="flex justify-center items-center absolute">
                {loading && (
                    <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin dark:border-black-800"></div>
                )}
            </div>
            <form className="w-full h-full flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                <div className="flex justify-center mb-5">
                    <p>LOGIN</p>
                </div>

                <div className="w-full px-10">
                    {error && <p className="text-red-500 text-xs">*{error}</p>}
                    <ModalInput
                        label="Email"
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={form.email}
                    />
                </div>

                <div className="w-full px-10">
                    <ModalInput
                        label="Password"
                        type="password"
                        placeholder="Password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={form.password}
                    />
                </div>

                <div className="flex flex-col justify-center items-center ">
                    <ButtonElement
                        type={"submit"}
                        classname={"bg-black w-32 h-8 rounded text-white text-xs"}
                    >
                        LOGIN
                    </ButtonElement>

                    <p className="text-xs my-2">Don't have an account?</p>

                    <button className="text-xs text-red-400" onClick={handleClick}>
                        SIGN UP
                    </button>
                </div>
            </form>
        </>
    )
}