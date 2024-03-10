import NavbarLink from "../elements/navbarLink"

export default function Navbar() {
    return (
        <>
            <nav className="h-11 w-full flex border-b border-gray-300 px-5">
                <div className="w-1/3 h-full flex justify-start items-center ">
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

            </nav>
        </>
    )
}