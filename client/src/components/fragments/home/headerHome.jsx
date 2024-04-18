import { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Typing from "../../elements/Typewriter";
import Overlay from "../../elements/Overlay";
import { motion } from "framer-motion"
import Motion from "../../elements/Motion";
import HeaderHomeImage from "../../elements/HeaderHomeImage";
import HeaderHomeVideo from "../../elements/HeaderHomeVideo";


export default function HeaderHome(props) {
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [width, setWidth] = useState('full')
    const [img, setImg] = useState('')
    const [video, setVideo] = useState('')
    const { setView } = props


    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsNavbarVisible(false)
        }, 700)

        return () => clearTimeout(timeout)
    }, [])

    const handleOnClick = () => {
        setWidth('1/2')
        setIsNavbarVisible(true)
        setView(true)
    }

    return (
        <>
            <Motion
                classname={`w-${width} h-screen flex items-center justify-center gap-60`}
                initial={{ width: '100%' }}
                animate={{ width: width === 'full' ? '100%' : '50%' }}
                transition={{ duration: 0.9 }}
            >
                {
                    img === '' ? (
                        <video
                            src={video === '' ? "https://assets.mixkit.co/videos/preview/mixkit-scary-woman-seeing-through-the-window-1987-large.mp4" : video}
                            autoPlay={true} loop muted
                            className={`w-full object-cover h-full`}
                        />
                    ) : (
                        <img
                            src={img}
                            className={`w-${width} h-screen object-cover absolute top-0 bottom-0`}
                        />
                    )
                }

                <Overlay opacity='98' width={width} />

                <div className="h-full w-full flex justify-center items-center absolute">
                    <div className="w-80 h-20 flex justify-start items-center cursor ">
                        <Typing classname="text-white text-sm font-light " words="THINKING ABOUT THE FUTURE.." />
                    </div>

                    <div className="w-20 h-20 flex justify-start items-center " onClick={handleOnClick} >
                        <Typing classname="text-white text-xs font-light" words="ENTER TERMINAL.." />
                    </div>
                </div>
            </Motion>

            <div className="w-full h-12 absolute top-0 bottom-0 none"
                onMouseEnter={() => setIsNavbarVisible(true)}
                onMouseLeave={() => setIsNavbarVisible(width === 'full' ? false : true)}>
                <Navbar isNavbarVisible={isNavbarVisible} />
            </div>

            {
                width === '1/2' && (
                    <motion.div
                        className="absolute inset-y-0 right-0 w-1/2 mt-12 overflow-y-auto"
                        initial={{ x: '100%' }}
                        animate={width === '1/2' ? { width: "50%", x: "0%" } : { width: 0 }}
                        transition={{ duration: 0.9 }}
                    >

                        <div className="w-full p-5">
                            <HeaderHomeImage
                                title={'NEW ARRIVALS'}
                                src1={'https://i.ibb.co/HphF7JC/Snapinsta-app-372026332-18231808030239714-6724752178803577171-n-1080.jpg'}
                                src2={'https://i.ibb.co/QncKJt1/Snapinsta-app-373296139-18231808006239714-838281677577833706-n-1080.jpg'}
                                setImg={setImg}
                                typing={'JAPANESE DOMESTIC MARKET'}
                                desc={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, accusamus, molestias dolore possimus, quo ducimus deleniti quos molestiae eius autem sit nihil nulla similique soluta rerum iusto neque facilis asperiores.'}
                            />
                        </div>

                        <div className="w-full p-5 mt-10">
                            <HeaderHomeImage
                                title={'NEW ARRIVALS'}
                                src1={'https://i.pinimg.com/564x/90/3a/74/903a744fcac7b4e927fbdfd5a2539ac5.jpg'}
                                setImg={setImg}
                                typing={'PORCHE 911 MIDNIGHT CLUB'}
                                desc={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, accusamus, molestias dolore possimus, quo ducimus deleniti quos molestiae eius autem sit nihil nulla similique soluta rerum iusto neque facilis asperiores.'}
                            />
                        </div>

                        <div className="w-full p-5 mt-10">
                            <HeaderHomeVideo
                                title={'JDM CULTURE'}
                                src1={'https://v1.pinimg.com/videos/mc/720p/3b/79/b7/3b79b74b0ebeb07a4a8c585e71b66207.mp4'}
                                setVideo={setVideo}
                                typing={'HISTORY OF JDM CULTURE'}
                                desc={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, accusamus, molestias dolore possimus, quo ducimus deleniti quos molestiae eius autem sit nihil nulla similique soluta rerum iusto neque facilis asperiores.'}
                            />
                        </div>
                    </motion.div>
                )
            }

            {/* <div className="bg-black bg-cover bg-center bg-no-repeat bg-fixed h-65vh m-20 rounded-lg bg-[url('https://res.cloudinary.com/de2dlumua/image/upload/v1702139425/gncwyyoh6oledbcrfitc.jpg')]" >
            </div> */}

          


        </>
    );
}
