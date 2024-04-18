import { Link } from "react-router-dom";

export default function MainHome() {
    return (
        <>
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <img src="https://i.ibb.co/XFZzVMK/Portfolio-Faishal-Software-Engineer.jpg" className="w-full h-full" />

            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center p-12">
                <p className="text-white text-6xl font-normal mb-6">JAPANESE DOMESTIC <br /> MARKET</p>
                <p className="text-white text-[10px]">LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DOLOR EXERCITATIONEM RATIONE <br />INCIDUNT DISTINCTIO TOTAM MOLESTIAE SED PARIATUR AUTEM REICIENDIS MOLESTIAS HIC,  <br /> AUT REPUDIANDAE VERITATIS VOLUPTATES EIUS AT, UT OFFICIIS MODI!M <br />LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. DOLOR EXERCITATIONEM RATIONE  <br />INCIDUNT DISTINCTIO TOTAM MOLESTIAE SED PARIATUR AUTEM REICIENDIS MOLESTIAS HIC,  <br /> AUT REPUDIANDAE VERITATIS VOLUPTATES EIUS AT, UT OFFICIIS MODI!</p>
                <Link className="w-32 h-6 bg-white rounded-full flex justify-center items-center mt-20">
                    <p className="text-black text-sm">LEARN MORE</p>
                </Link>
            </div>
        </>
    )
}