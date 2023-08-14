import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <div className="min-h-screen  bg-neutral-100">
      <Navbar/>
      <section className="w-1440 h-[691px] bg-cover bg-center bg-hero-image relative top-16">
        <div className=" absolute ml-[5rem] w-787 h-[53px] top-[185px] left-[390px] right-[390px] flex justify-center items-center text-black text-4xl font-italic ">
          Best Position ever found
        </div>
        <p className="  text-base font-normal leading-7 ml-[2rem] text-center text-black absolute  w-[490px] top-[270px] left-[500px] right-[500px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center items-center h-screen ml-[5rem]">
            <Link href="/pages/signup">
              <button className="bg-black hover:bg-black text-white px-4 py-2 rounded w-[280px] h-[64px] border-r"> 
                Start free trial
              </button>
            </Link> 
        </div>
      </section>
      
      <footer className="bg-white h-[259px] flex justify-start items-center">
        <div className="h-[198px] ml-[140px] text-black font-roboto text-xl font-semibold ">
          ACME
        </div>
        <div className="text-black text-[24px] ml-[85px] mb-[110px] mt-[80px] font-kalam text-base font-normal leading-8 text-left">
          Ready to get started ?
          <p className='w-[500px] h-[79px] top[119px] left-[295px] text-[14px] text-sm'> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='left-[720px] right-[720px]'>
          <Image
            src="/divider.svg"
            alt="divider"
            width={2}
            height={2}
          />
        </div>
        <div className="flex">
          <h1 className="text-black ml-10 mb-[30px] mt-[217px]">© 2010 — 2020</h1>
          <h1 className="text-black ml-2 mb-[30px] mt-[217px]" >Privacy — Terms</h1>
        </div>
      </footer>
    </div>

  )
}
