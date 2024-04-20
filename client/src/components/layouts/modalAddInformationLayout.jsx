import { useEffect, useState } from "react"
import LoginForm from "../fragments/auth/LoginForm"
import RegisterForm from "../fragments/auth/RegisterForm"
import ModalInput from "../elements/ModalInput"
import ButtonElement from "../elements/ButtonElement"
import { useDispatch, useSelector } from "react-redux"
import { fetchCart } from "../../features/cart/asyncAction"
import { heroService } from "../../services/hero"
import AddInformationForm from "../fragments/payment/AddInformationForm"
import { fetchStock, fetchStockById } from "../../features/stock/asyncAction"
import { useParams } from "react-router-dom"
import { fetchHistory } from "../../features/history/asyncAction"

export default function ModalAddInformationLayout() {
    const idStock = useParams()
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: '',
        phone: '',
        address: '',
    })


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             await dispatch(fetchCart())
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     fetchData()
    // }, [dispatch])

    const cartId = Array.isArray(cart) ? cart.map(item => item.id) : [];


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        try {
            const { data } = await heroService.get('/payment/midtrans/token', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
            })

            document.getElementById('modalAddInformation').close()

            window.snap.pay(data.transaction_token, {
                onSuccess: async function (result) {
                    const orderId = data.orderId

                    await heroService.patch('/payment/midtrans', { form, orderId, cartId }, {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("access_token")}`
                        }
                    })
                    await dispatch(fetchCart())
                    await dispatch(fetchHistory())
                    await dispatch(fetchStockById(idStock.id))
                },
                onPending: function (result) {
                    /* You may add your own implementation here */
                    alert("wating your payment!"); console.log(result);
                },
                onError: function (result) {
                    /* You may add your own implementation here */
                    alert("payment failed!"); console.log(result);
                },
                onClose: function () {
                    /* You may add your own implementation here */
                    alert('you closed the popup without finishing the payment');
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <dialog id="modalAddInformation" className="modal w-2/6 h-3/6">
                <div className="flex flex-col justify-center items-center w-full h-full">
                    <AddInformationForm
                        form={form}
                        handleChange={handleChange}
                        handleOnSubmit={handleOnSubmit}
                    />
                </div>
            </dialog>

        </>
    )
}