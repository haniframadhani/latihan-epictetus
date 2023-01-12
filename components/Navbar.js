import { Source_Sans_Pro } from "@next/font/google"
import { Menu, Search, X } from "react-feather"
import { useState } from "react"
const source_sans_pro = Source_Sans_Pro({ subsets: ['latin'], weight: '600' })
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleIcon = () => {
    setNavbarOpen(!navbarOpen)
  }
  return (
    <header className="flex flex-row justify-around md:justify-between text-xl items-center text-white w-max-screen py-9 md:px-28 lg:py-12 lg:px-44 ">
      <div onClick={handleIcon} className="lg:hidden text-white/60">
        {navbarOpen ? <X /> : <Menu />}
      </div>
      <div className="flex flex-row items-center gap-x-2.5">
        <div className={`${source_sans_pro.className} text-lg bg-independence py-1 px-3 rounded shadow-black/10`}>E</div>
        <h1 className="py-5 md:py-0">Epictetus</h1>
      </div>
      <nav className={`absolute lg:static lg:bg-transparent min-h-[30vh] lg:min-h-0 left-0 ${navbarOpen ? "top-[15%] md:top-[11%]" : "top-[-100%]"} lg:w-auto w-full flex items-center px-5`}>
        <ul className="flex gap-y-16 lg:w-auto lg:gap-x-11 lg:gap-y-0 flex-col lg:flex-row ">
          <li className="hover:text-white/60 hover:underline transistion duration-200">culinary</li>
          <li className="hover:text-white/60 hover:underline transistion duration-200">nature</li>
          <li className="hover:text-white/60 hover:underline transistion duration-200">city  </li>
        </ul>
      </nav>
      <form className="relative">
        <div className="static lg:absolute pointer-events-none top-0 left-0 lg:top-2 lg:left-2">
          <Search className="text-white/60" />
        </div>
        <input type="text" name="search" id="search" placeholder="search" className="form-input pl-10 rounded-full bg-yankees-blue/60 placeholder:text-white/60 placeholder:capitalize border-none focus:outline-none hidden lg:block" />
      </form>
    </header>
  )
}