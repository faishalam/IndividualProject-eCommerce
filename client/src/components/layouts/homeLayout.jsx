import { Link } from "react-router-dom";
import HeaderHome from "../fragments/home/HeaderHome"
import CardProduct from "../fragments/CardProduct";
import MainHome from "../fragments/home/MainHome";
import Footer from "../fragments/Footer";
import { useState } from "react";

export default function HomeLayout(props) {
    const { product } = props
    const [view, setView] = useState(false)

    return (
        <>
            <div className="flex w-full h-screen bg-white">
                <HeaderHome setView={setView} />
            </div >

            {
                view === true && (
                    <>
                        <div className="flex justify-between mx-12 mt-14 mb-10">
                            <p className="text-sm font-semibold">PRODUCTS</p>
                            <Link to={'/products'} className="text-sm font-semibold">VIEW ALL</Link>
                        </div>

                        <div className="flex justify-center gap-10 mx-10 mb-20">
                            <CardProduct product={product} type={'homeProduct'}/>
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
