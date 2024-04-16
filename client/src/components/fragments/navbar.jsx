import NavbarLink from "../elements/navbarLink"
import { motion } from "framer-motion"
import ModalAuth from "../layouts/modalAuthLayout"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ToggleCartLayout from "../layouts/toggleCartLayout"
import ToggleFavouriteLayout from "../layouts/toggleFavouriteLayout"
import Search from "./search"
import { useDispatch, useSelector } from "react-redux"
import { userLogin, userLogout } from "../../features/user/asyncAction"
import { fetchFavourite } from "../../features/favourite/asyncAction"
import { fetchCart } from "../../features/cart/asyncAction"
import { fetchHistory } from "../../features/history/asyncAction"

export default function Navbar(props) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
    const favourite = useSelector((state) => state.favourite.favourite)
    const cart = useSelector((state) => state.cart.cart)
    const history = useSelector((state) => state.history.history)
    const { isNavbarVisible } = props
    const [cartToggle, setCartToggle] = useState(false)
    const [favouriteToggle, setFavouriteToggle] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem('access_token')
    const [search, setSearch] = useState(false)
    const navItemsMid = [
        {
            title: 'EVENTS',
            action: () => { },
        }, {
            title: 'EDITORIAL',
            action: () => { },
        }, {
            title: 'SEARCH',
            action: () => {
                // setSearch(true)
                setSearch(!search)
            },
        },
    ]
    const navItemsRight = [
        {
            title: 'FAVOURITE',
            action: () => {
                isLoggedIn ?
                    (
                        setFavouriteToggle(!favouriteToggle),
                        setSearch(false),
                        setCartToggle(false)
                    )
                    :
                    document.getElementById('modalAuth').showModal()
            },
            isVisible: true
        },
        {
            title: 'CART',
            action: () => {
                isLoggedIn ?
                    (
                        setCartToggle(!cartToggle),
                        setSearch(false),
                        setFavouriteToggle(false)
                    )
                    :
                    document.getElementById('modalAuth').showModal()
            },
            isVisible: true
        },
        {
            title: 'LOGOUT',
            action: () => {
                localStorage.getItem('access_token') && localStorage.removeItem('access_token')

                dispatch(userLogout())
            },
            isVisible: isLoggedIn
        },
        {
            title: 'LOGIN',
            action: () => {
                document.getElementById('modalAuth').showModal()
            },
            isVisible: !isLoggedIn
        },
    ]

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchFavourite());
                await dispatch(fetchCart());
                await dispatch(fetchHistory());
            } catch (error) {
                // setError(error)
            }
        };
        fetchData();
    }, [dispatch]);

    useEffect(() => {
        setIsLoggedIn(token && token?.length ? true : false)
    }, [user])

    // const price = cart?.reduce((total, item) => {
    //     return total + item.Product.price * item.jumlah
    // }, 0)

    // console.log(cart)

    return (
        <>
            <div className="flex flex-col">
                <motion.nav
                    className={`bg-white h-11 w-full flex border-b border-gray-300 px-5 z-10 fixed`}
                    initial={{ opacity: 0, y: -100 }}
                    animate={isNavbarVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-1/3 h-full flex justify-start items-center">
                        <Link to={'/'}>
                            <NavbarLink
                                text="TERMINAL"
                                classname="text-2xl"
                            />
                        </Link>
                    </div>

                    <div className="w-1/3 h-full flex justify-center items-center gap-6 ">
                        <Link to={'/products'}>
                            <NavbarLink
                                text="SHOP"
                                classname="text-sm font-normal transition-transform duration-300 transform hover:translate-x-2 relative"
                            />
                        </Link>

                        {
                            navItemsMid?.map((nav, i) => (
                                <NavbarLink
                                    key={i}
                                    text={nav.title}
                                    classname="text-sm font-normal transition-transform duration-300 transform hover:translate-x-2 relative"
                                    handleClick={() => nav.action()}
                                />
                            ))
                        }
                    </div>

                    <div className="w-1/3 h-full flex justify-end items-center gap-6">
                        {
                            navItemsRight?.map((nav, i) => (
                                <NavbarLink
                                    key={i}
                                    text={nav.title}
                                    classname={`text-sm font-normal transition-transform duration-300 transform hover:translate-x-2 relative ${!nav.isVisible ? 'hidden' : ''}`}
                                    handleClick={() => nav.action()}
                                />
                            ))
                        }
                    </div>
                </motion.nav>

                <div className={`bg-white w-full h-12 border-b border-gray-300 transition-all duration-300 ${search ? 'translate-y-0 mt-10' : '-translate-y-full'} fixed`}
                    style={{ zIndex: 1 }}
                >
                    <Search search={search} setSearch={setSearch} />

                </div>
            </div>

            <ModalAuth />

            <div className={`flex w-full h-screen justify-end items-end fixed transition-all duration-700 z-20 ${cartToggle ? 'translate-x-0' : 'translate-x-full'}`}>
                {
                    cartToggle ? (
                        <ToggleCartLayout
                            cartToggle={cartToggle}
                            setCartToggle={setCartToggle}
                            cart={cart}
                            history={history}
                        />
                    ) : (
                        <ToggleCartLayout
                            cartToggle={cartToggle}
                            setCartToggle={setCartToggle}
                            history={history}
                        />
                    )
                }
            </div>


            <div className={`flex w-full h-screen justify-end items-end fixed transition-all duration-700 z-20  ${favouriteToggle ? 'translate-x-0' : 'translate-x-full'}`} >
                {
                    favouriteToggle ? (
                        <ToggleFavouriteLayout
                            favouriteToggle={favouriteToggle}
                            setFavouriteToggle={setFavouriteToggle}
                            favourite={favourite}
                        />
                    ) : (
                        <ToggleFavouriteLayout
                            favouriteToggle={favouriteToggle}
                            setFavouriteToggle={setFavouriteToggle}
                        />
                    )
                }
            </div>
        </>
    )
}
