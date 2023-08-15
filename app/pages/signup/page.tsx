import Link from "next/link"
import Navbar from "@/app/components/navbar"
import SignupForm from "@/app/components/SignupForm"

export default function SignUp() {
    return (

    <div className="min-h-screen bg-white">
        <Navbar/>
        <SignupForm/>
        <footer className="fixed bottom-0 left-0 w-full h-16 bg-gray-100 flex justify-end items-center px-40">
        <p className="text-black mr-20">
            ACME
        </p>
        </footer>
    </div>
  )
}