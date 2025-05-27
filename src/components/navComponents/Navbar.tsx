import Logo from "@/assets/images/logo.png"
import { Button } from "../ui/button"
import Hamburger from "./Hamburger"

const NavLinks: {id: number, name: string, path: string}[] = [
    {id: 1, name: "Home", path: "/"},
    {id: 2, name: "About Us", path: "/about"},
    {id: 3, name: "Case Studies", path: "/case"},
    {id: 4, name: "Offerings", path: "/offerings"},
    {id: 5, name: "Contact Us", path: "#contact"},
]


export default function Navbar() {
  return (
    <section>
        <main className="font-sans flex w-full items-center justify-between py-4 px-4  md:px-6 lg:px-8 xl:px-24">
            <div className="flex">
                <img src={Logo} alt="SkyGrid" className="w-[150px] lg:w-[149.5px] h-auto md:h-[48.61px]" />
            </div>
            <div className="hidden md:flex flex-row gap-8 xl:gap-16">
                {NavLinks.map((link) => (
                    <a key={link.id} href={link.path}> <p className="font-semibold md:text-[12px] xl:text-[16px] text-white hover:text-[#FBB03B] transition ease-in duration-100">{link.name}</p> </a>
                
                ))}
            </div>
            <div className="hidden md:flex flex-row gap-5">
                <Button className="btn-gradient md:px-4 lg:px-7 rounded-none xl:w-[196px] 
                font-medium text-[12px] lg:text-[16px] tap-effect cursor-pointer shadow-sm hover:shadow-lg hover:shadow-slate-700 transition ease-linear duration-100">
                    Get Started
                </Button>
            </div>
            <div className="flex md:hidden">
                <Hamburger />
            </div>
        </main>
    </section>
  )
}
