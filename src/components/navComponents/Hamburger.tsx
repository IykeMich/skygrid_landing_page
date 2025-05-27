import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"
import {X, Menu} from "lucide-react"
// import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import Logo from "@/assets/images/logo.png"

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)}
                className="text-[#93CFF0] p-2 focus:outline-none">
            {isOpen ? <X size={28} className="hover:bg-[#93CFF0]"/> : <Menu size={28} /> }
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{x: "100%"}} animate={{x: 0}} exit={{x: "100%"}} transition={{duration: 0.4, ease: "easeInOut"}}
                    className="fixed top-0 right-0 h-screen w-full justify-center bg-black pb-6 px-4 shadow-lg z-50 pt-4">
                        <div className="flex justify-between items-center">
                            <img src={Logo} alt="SkyGrid" width={150} height={100} />
                            <button onClick={() => setIsOpen(false)} className="top-8 right-4 text-sGreen">
                                <X size={28} /> 
                            </button>
                        </div>

                        <nav className="flex flex-col items-start text-start space-y-6 text-lg mt-12">
                            {NavLinks.map((item) => (
                                <a key={item.path} href={item.path.toLowerCase()} onClick={() => setIsOpen(false)}
                                className="text-white hover:text-[#FBB03B] gap-3 text-lg"> {item.name} </a>
                            ))}
                        </nav>

                        <div className="button flex items-start w-[90%] mt-12">
                            <Button className="btn-gradient hover:bg-black px-7 rounded-none w-[196px] 
                            font-medium text-[16px] tap-effect cursor-pointer shadow-sm hover:shadow-md transition ease-in duration-100">
                                Get Started
                            </Button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

const NavLinks: {id: number, name: string, path: string}[] = [
    {id: 1, name: "Home", path: "/"},
    {id: 2, name: "About Us", path: "/about"},
    {id: 3, name: "Case Studies", path: "/case"},
    {id: 4, name: "Offerings", path: "/offerings"},
    {id: 5, name: "Contact Us", path: "#contact"},
]