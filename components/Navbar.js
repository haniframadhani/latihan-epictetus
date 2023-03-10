import { Source_Sans_Pro } from "@next/font/google"
import { Search } from "react-feather"
import { useState } from "react"
import Link from "next/link";
const source_sans_pro = Source_Sans_Pro({ subsets: ['latin'], weight: '600' })
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleIcon = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <header className="flex flex-row justify-around md:justify-between text-xl items-center text-white w-max-screen py-9 md:px-28 lg:py-12 lg:px-44 backdrop-blur-lg  top-0 sticky">
      <div onClick={handleIcon} className="lg:hidden text-white/60 cursor-pointer w-7 h-7 z-10 ">
        <div className={`h-0.5 bg-white rounded-3xl my-1.5 transition ease-linear w-full ${navbarOpen ? '-rotate-45 translate-y-2' : ''}`}></div>
        <div className={`h-0.5 bg-white rounded-3xl my-1.5 transition ease-linear w-full ${navbarOpen ? 'opacity-0' : ''}`}></div>
        <div className={`h-0.5 bg-white rounded-3xl my-1.5 transition ease-linear w-full ${navbarOpen ? 'rotate-45 -translate-y-2' : ''}`}></div>
      </div>
      <Link href={'/'}>
        <div className="flex flex-row items-center gap-x-2.5 z-10">
          <div className={`${source_sans_pro.className} text-lg bg-independence py-1 px-3 rounded shadow-black/10`}>E</div>
          <h1 className="py-5 md:py-0">Epictetus</h1>
        </div>
      </Link>
      <nav className={`absolute lg:static w-full min-h-[40vh] lg:min-h-0 left-0 flex justify-center items-center -top-[1000px] transition-all duration-[600ms] ease-in-out opacity-0 lg:opacity-100 ${navbarOpen ? "top-[140px] md:top-[6.7rem] opacity-100" : ""}`}>
        <ul className="flex flex-col gap-y-16 lg:gap-y-0 lg:gap-x-16 xl:gap-x-32 2xl:gap-x-52 lg:flex-row text-center">
          <li className="hover:text-white/60 hover:underline"><Link href={'/culinary'}>culinary</Link></li>
          <li className="hover:text-white/60 hover:underline"><Link href={'/nature'}>nature</Link></li>
          <li className="hover:text-white/60 hover:underline"><Link href={'/city'}>city</Link></li>
        </ul>
      </nav>
      <form className="relative z-10">
        <div className="static lg:absolute pointer-events-none top-0 left-0 lg:top-2 lg:left-2">
          <Search className="text-white/60" />
        </div>
        <input type="text" name="search" id="search" placeholder="search" className="form-input pl-10 rounded-full bg-yankees-blue/60 placeholder:text-white/60 placeholder:capitalize border-none focus:outline-none hidden lg:block" />
      </form>
    </header >
  )
}