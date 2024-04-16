export default function ButtonElement(props) {
    const { children, classname, type, handleClick, value } = props
    
    return (
        <>
            <button
                className={classname}
                type={type}
                onClick={() => handleClick()}
                value={value}
            >
                {children}
            </button>
        </>
    )
}