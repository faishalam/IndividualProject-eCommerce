import NavbarLink from "../elements/navbarLink"
import { motion } from "framer-motion"

export default function Navbar(props) {
    const { isNavbarVisible } = props


    return (
        <>
            <motion.nav
                className={`bg-white h-11 w-full flex border-b border-gray-300 px-5 absolute`}
                initial={{ opacity: 0, y: -100 }}
                animate={isNavbarVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
            >
                <div className="w-1/3 h-full flex justify-start items-center">
                    <NavbarLink
                        text="TERMINAL"
                        classname="text-2xl"
                    />
                </div>

                <div className="w-1/3 h-full flex justify-center items-center gap-10 ">
                    <NavbarLink
                        text="SHOP"
                        classname="text-sm font-normal"
                    />
                    <NavbarLink
                        text="EVENTS"
                        classname="text-sm font-normal"
                    />
                    <NavbarLink
                        text="EDITORIAL"
                        classname="text-sm font-normal"
                    />
                    <NavbarLink
                        text="ART STUDIO"
                        classname="text-sm font-normal"
                    />
                </div>

                <div className="w-1/3 h-full flex justify-end items-center gap-10">
                    <NavbarLink
                        text="SEARCH"
                        classname="text-sm font-normal"
                    />
                    <NavbarLink
                        text="LOGIN"
                        classname="text-sm font-normal"
                    />
                    <NavbarLink
                        text="CART"
                        classname="text-sm font-normal"
                    />
                </div>
            </motion.nav>
        </>
    )
}