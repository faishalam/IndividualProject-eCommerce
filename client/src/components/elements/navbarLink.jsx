import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function NavbarLink(props) {
    const { text, classname, handleClick } = props
    const [isHovered, setIsHovered] = useState(false); 

    return (
        <>
            {
                text === "TERMINAL" ? (
                    <button onClick={handleClick}>
                        <p className={classname}>{text}</p>
                    </button>
                ) : (
                    <button
                        onClick={handleClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={classname}
                    >
                        <div className="flex justify-center items-center w-full">

                            <span className={`${isHovered ? 'visible' : 'invisible'}`}>→</span>

                            <p className="text-sm ">{text}</p>
                        </div>
                    </button>
                )
            }



        </>
    )
}