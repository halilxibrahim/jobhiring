import Link from "next/link"


export default function Frame() {
    return (

        <section className="flex justify-center items-center mt-8">
            <div
                className="w-[600px] h-[720px] mb-[152px] mt-[152px] rounded border border-gray-300 bg-neutral-100"
                style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
            >
                <div className="flex">
                <div className="flex justify-start text-black mt-3 ml-4">
                fdkf
                </div>
                <h1 className="text-black mt-3 ml-56 justify-center" >HEADER</h1>
                <h1 className="text-black mt-3 ml-[14rem] justify-end">2/3</h1>
                </div>

                <div className="flex flex-col gap-10 p-6">
                <label className="text-black w-[568px] h-[24px]">
                    Label 
                    <input type="text" className="mt-2 w-full h-8 border border-gray-300 rounded px-2" />
                </label>
                <label className="text-black w-[568px] h-[24px]">
                    Label 
                    <input type="text" className="mt-2 w-full h-8 border border-gray-300 rounded px-2" />
                </label>
                <label className="text-black w-[568px] h-[24px]">
                    Label 
                    <input type="text" className="mt-2 w-full h-8 border border-gray-300 rounded px-2" />
                </label>
                <label className="text-black w-[568px] h-[24px]">
                    Label 
                    <input type="text" className="mt-2 w-full h-8 border border-gray-300 rounded px-2" />
                </label>
                </div>
            </div>
        </section>
  )
}