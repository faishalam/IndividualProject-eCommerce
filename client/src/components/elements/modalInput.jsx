export default function ModalInput(props) {
    const { label, type, name, id, placeholder, value, onChange } = props
    return (
        <>
            <label className="text-sm">{label}</label>
            <input
                className="w-full h-8 p-4 rounded-md border border-gray-300 mb-4 placeholder-text-placeholder text-xs"
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </>
    )
}