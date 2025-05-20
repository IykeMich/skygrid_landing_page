import Logo from "@/assets/images/logo.png"
import { Button } from "../ui/button"

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
        <main className="font-sans flex w-full items-center justify-between py-4 px-4 md:px-16">
            <div className="flex">
                <img src={Logo} alt="SkyGrid" className="w-[97px] md:w-[149.5px] h-auto md:h-[48.61px]" />
            </div>
            <div className="hidden md:flex flex-row gap-16">
                {NavLinks.map((link) => (
                    <a key={link.id} href={link.path}> <p className="font-semibold text-[15px] text-white hover:text-[#FBB03B] transition ease-in duration-100">{link.name}</p> </a>
                
                ))}
            </div>
            <div className="hidden md:flex flex-row gap-5">
                <Button className="btn-gradient px-7 rounded-none w-[196px] 
                font-medium text-[16px] tap-effect cursor-pointer shadow-sm hover:shadow-md hover:shadow-slate-700 transition ease-linear duration-300">
                    Get Started
                </Button>
            </div>
        </main>
    </section>
  )
}
