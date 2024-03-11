import { useEffect, useState } from "react";
import Navbar from "../fragments/navbar";
import Typing from "../elements/typewriter";
import Overlay from "../elements/overlay";
import { motion } from "framer-motion"

export default function HomeLayout() {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [width, setWidth] = useState('full')

    useEffect(() => {
        const timeout = setTimeout(() => {

            setIsNavbarVisible(false)
        }, 700)

        return () => clearTimeout(timeout)
    }, [])

    const handleOnClick = () => {
        setWidth('1/2')
        setIsNavbarVisible(true)
    }

    return (
        <>
            <div className="flex w-full h-screen overflow-y-auto">

                <motion.div
                    className={`w-${width} h-screen flex items-center justify-center gap-60 `}
                    initial={{ width: '100%' }}
                    animate={{ width: width === 'full' ? '100%' : '50%' }}
                    transition={{ duration: 0.9 }}
                >
                    <motion.video
                        src="https://assets.mixkit.co/videos/preview/mixkit-scary-woman-seeing-through-the-window-1987-large.mp4"
                        autoPlay={true} loop muted
                        className={`w-${width} h-screen object-cover absolute top-0 bottom-0`}
                        initial={{ width: '100%' }}
                        animate={{ width: width === 'full' ? '100%' : '50%' }}
                        transition={{ duration: 0.9 }}
                    />

                    <Overlay opacity='50' width={width} />
                    <div className="h-full w-full flex justify-center items-center absolute">
                        <div className="w-80 h-20 flex justify-start items-center cursor ">
                            <Typing classname="text-white text-sm font-light " words="THINKING ABOUT THE FUTURE.." />
                        </div>

                        <div className="w-20 h-20 flex justify-start items-center " onClick={handleOnClick} >
                            <Typing classname="text-white text-xs font-light" words="ENTER TERMINAL.." />
                        </div>
                    </div>
                </motion.div>

                <div className="w-full h-12 absolute top-0 bottom-0 none"
                    onMouseEnter={() => setIsNavbarVisible(true)}
                    onMouseLeave={() => setIsNavbarVisible(width === 'full' ? false : true)}>
                    <Navbar isNavbarVisible={isNavbarVisible} />
                </div>

                {
                    width === '1/2' && (
                        <div className="my-10 ">
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>

                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>

                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>

                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>

                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>


                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>

                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>

                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>


                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >hahah</p>
                            <p >crot</p>
                            
                        </div>
                    )
                } 



            </div >
        </>
    );
}
