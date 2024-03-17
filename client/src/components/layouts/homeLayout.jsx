import { Link } from "react-router-dom";
import Overlay from "../elements/overlay";
import Footer from "../fragments/footer";
import HeaderHome from "../fragments/home/headerHome";
import MainHome from "../fragments/home/mainHome";
import { useState } from "react";
import CardProduct from "../fragments/cardProduct";

export default function HomeLayout(props) {
    const [view, setView] = useState(false)

    return (
        <>
            <div className="flex w-full h-screen bg-white">
                <HeaderHome setView={setView} />
            </div >


            {
                view === true && (
                    <>
                        <div className="flex justify-between mx-10 mt-14 mb-10">
                            <p className="text-sm font-semibold">PRODUCTS</p>
                            <p className="text-sm font-semibold">VIEW ALL</p>
                        </div>

                        <div className="flex justify-center gap-10 mx-10 mb-20">
                            <CardProduct width="1/6"/>
                        </div>

                        <div className="relative w-full h-[800px]">
                            <MainHome />
                        </div>

                        <div className="w-full h-80">
                            <Footer />
                        </div>
                    </>
                )
            }

        </>
    );
}
