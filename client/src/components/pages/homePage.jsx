import { useState } from "react";
import Navbar from "../layouts/navbar";


export default function HomePage() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    return (
        <>
            <Navbar isNavbarVisible={isNavbarVisible}/>
            <div>
                <div
                    className="w-full h-12 absolute top-0 bottom-0 none" 
                    onMouseEnter={() => setIsNavbarVisible(true)}
                    onMouseLeave={() => setIsNavbarVisible(false)}>

                </div>
                <video src="https://assets.mixkit.co/videos/preview/mixkit-scary-woman-seeing-through-the-window-1987-large.mp4"
                    autoPlay={true} loop muted
                    className="w-full h-screen object-cover absolute top-0 bottom-0"
                    style={{ zIndex: -1 }}
                />
            </div>
        </>
    );
}
