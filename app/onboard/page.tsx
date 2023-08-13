import Link from "next/link"
import Frame from "../components/frame"
import Navbar from "../components/navbar"
export default function Onboard() {
    return (

    <div className="min-h-screen bg-white">
        <Navbar/>
        <Frame/>
        <footer className="fixed bottom-0 left-0 w-full h-16 bg-gray-100 flex justify-end items-center px-40">
        <p className="text-black mr-20">
            ACME
        </p>
        </footer>
    </div>
  )
}