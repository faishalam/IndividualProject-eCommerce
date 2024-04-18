import ButtonElement from "../../elements/ButtonElement"
import ModalInput from "../../elements/ModalInput"

export default function AddInformationForm(props) {
    const { form, handleChange, handleOnSubmit } = props
    return (
        <>
            <form className="w-full h-full flex flex-col justify-center items-center" onSubmit={handleOnSubmit} >
                <div className="flex justify-center mb-5">
                    <p>We Need Your Information</p>
                </div>

                <div className="w-full px-10">
                    <ModalInput
                        label="Name"
                        type="name"
                        placeholder="enter your name"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        value={form.name}
                    />
                </div>

                <div className="w-full px-10">
                    {/* {error && <p className="text-red-500 text-xs"></p>} */}
                    <ModalInput
                        label="Phone"
                        type="phone"
                        placeholder="enter your phone number"
                        name="phone"
                        id="phone"
                        onChange={handleChange}
                        value={form.phone}
                    />
                </div>

                <div className="w-full px-10">
                    <ModalInput
                        label="Address"
                        type="address"
                        placeholder="enter your address"
                        name="address"
                        id="address"
                        onChange={handleChange}
                        value={form.address}
                    />
                </div>



                <div className="w-full flex flex-col justify-center items-center">
                    <ButtonElement type="submit" classname="w-1/2 h-7 mt-8 bg-black rounded-2xl ransition-colors duration-200 ease-in-out hover:bg-gray-700 active:bg-gray-800">
                        <p className="text-sm text-white">PAY NOW</p>
                    </ButtonElement>
                </div>
            </form>
        </>
    )
}