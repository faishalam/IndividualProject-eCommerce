import Typing from "./Typewriter"

export default function HeaderHomeVideo(props) {
    const { title, src1, typing, desc, setVideo } = props

    return (
        <>
            <p className="text-sm">{title}</p>
            <div className="flex justify-center items-center">
                <video
                    className="object-cover w-full h-auto"
                    style={{ maxHeight: "550px" }}
                    src={src1}
                    autoPlay muted loop
                    onMouseEnter={() => setVideo(src1)}
                    onMouseLeave={() => setVideo('')}
                />

            </div>
            <div className="flex justify-center my-6">
                <Typing classname="text-black text-4xl font-normal w-1/2" words={typing} />
                <p className="w-1/2 text-sm font-light">{desc}</p>
            </div>
        </>
    )
}