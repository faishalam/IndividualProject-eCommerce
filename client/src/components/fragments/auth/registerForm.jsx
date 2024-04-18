import { useDispatch, useSelector } from "react-redux"
import ButtonElement from "../../elements/buttonElement"
import ModalInput from "../../elements/modalInput"
import { useState } from "react"
import { userRegister } from "../../../features/user/asyncAction"

export default function RegisterForm(props) {
    const { setAuth, googleButton } = props
    const dispatch = useDispatch()
    const [loading, isLoading] = useState(false)
    const [error, setError] = useState('');
    const [form, setForm] = useState({
        name: '',
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
        isLoading(true)
        setTimeout(async () => {
            try {
                await dispatch(userRegister(form))
                setForm({
                    name: '',
                    email: '',
                    password: '',
                });
                setError('')
                document.getElementById('modalAuth').close()
            } catch (error) {
                setError(error);
            } finally {
                isLoading(false)
            }
        }, 2000)
    };

    const handleClick = (e) => {
        e.preventDefault()
        setAuth('login')
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
                    <p>SIGN UP</p>
                </div>

                <div className="w-full px-10">
                    {error && <p className="text-red-500 text-xs">*{error}</p>}
                    <ModalInput
                        label="Name"
                        type="name"
                        placeholder="your name"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        value={form.name}
                    />
                </div>

                <div className="w-full px-10">
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
                        SIGN UP
                    </ButtonElement>

                    <p className="text-xs my-2">Have an account?</p>

                    <button className="text-xs text-blue-400" onClick={handleClick}>LOGIN</button>

                    {googleButton}
                </div>

            </form>
        </>
    )
}