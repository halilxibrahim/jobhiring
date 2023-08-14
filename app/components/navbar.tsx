import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="w-1440 h-16 bg-neutral-100 flex justify-between items-center px-40">
            <Link href="/">
                <div className="font-roboto text-xl font-semibold text-black">ACME</div>
            </Link>
        <div>
            <Link href="/pages/login">
                <button className="font-kalam text-lg text-black line-leading-29 text-left mr-6">
                Login
                </button>
            </Link>
            <Link href="/pages/signup">
                <button className="bg-black hover:bg-black text-white px-4 py-2 rounded">
                Sign Up
                </button>
            </Link>
        </div>
        </nav>
  )
}


