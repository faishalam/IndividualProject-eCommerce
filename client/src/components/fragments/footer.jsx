export default function Footer() {
    
    return (
        <>
            <div className="flex justify-center gap-72 w-full h-full bg-[#f7f7f7]">
                <div>
                     <p className="text-md mb-10 mt-10">LINKS</p>
                    <div className="flex flex-col gap-2">
                         <p className="text-xs">SHOP</p>
                         <p className="text-xs">EVENT</p>
                         <p className="text-xs">EDITORIAL</p>
                         <p className="text-xs">CARS STUDIO</p>

                         <p className="text-xs">ABOUT</p>
                         <p className="text-xs">CAREERS</p>
                         <p className="text-xs">FAQ</p>
                    </div>
                </div>

                <div>
                     <p className="text-md mb-10 mt-10">FOLLOWS</p>
                     <div className="flex flex-col gap-2">
                         <p className="text-xs">INSTAGRAM</p>
                         <p className="text-xs">FACEBOOK</p>
                         <p className="text-xs">TOKOPEDIA</p>
                         <p className="text-xs">SHOPEE</p>
                    </div>
                </div>

                <div>
                     <p className="text-md mb-10 mt-10">CONTACT</p>
                     <div className="flex flex-col gap-2">
                         <p className="text-xs">EMAIL</p>
                    </div>
                </div>
            </div>
        </>
    )
}