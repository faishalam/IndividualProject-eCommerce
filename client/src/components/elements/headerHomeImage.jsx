import Typing from "./typewriter"

export default function HeaderHomeImage(props) {
    const { title, src1, src2, setImg, typing, desc } = props

    return (
        <>
            <p className="text-sm">{title}</p>
            <div className="flex justify-center items-center">
                {src2 === undefined ? (
                    <img
                        className="object-cover w-full h-auto"
                        style={{ maxHeight: "550px" }}
                        src={src1}
                        onMouseEnter={() => setImg(src1)}
                        onMouseLeave={() => setImg('')}
                    />
                ) : (
                    <>
                        <img
                            className="object-cover w-1/2 h-auto"
                            style={{ maxHeight: "550px" }}
                            src={src1}
                            onMouseEnter={() => setImg(src1)}
                            onMouseLeave={() => setImg('')}
                        />
                        <img
                            className="object-cover w-1/2 h-auto"
                            style={{ maxHeight: "550px" }}
                            src={src2}
                            onMouseEnter={() => setImg(src2)}
                            onMouseLeave={() => setImg('')}
                        />
                    </>
                )}
            </div>


            <div className="flex justify-center my-6">
                <Typing classname="text-black text-4xl font-normal w-1/2" words={typing} />
                <p className="w-1/2 text-sm font-light">{desc}</p>
            </div>
        </>
    )
}