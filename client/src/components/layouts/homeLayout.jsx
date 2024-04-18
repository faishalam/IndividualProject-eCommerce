import Footer from "../fragments/footer";
import HeaderHome from "../fragments/home/headerHome";
import MainHome from "../fragments/home/mainHome";
import { useState } from "react";
import CardProduct from "../fragments/cardProduct";
import { Link } from "react-router-dom";

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
