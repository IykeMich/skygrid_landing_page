import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok, BsTwitterX } from "react-icons/bs";
import Logo from "@/assets/images/logo.png"

export default function Footer() {
  return (
    <section id="footer" className="bg-[#091116] text-white w-full">
      <div className="pt-16 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row gap-12 justify-between">
        <div className="first-section flex w-full md:w-1/3">
            <div className="flex flex-col gap-4">
                <a href="#hero" ><img src={Logo} alt="Skygrid" width={150} height={100} /></a>
                <p className="text-[14px] leading-[24px]">
                We are a team of passionate experts who take pride in delivering the 
                highest standard of service. With years of experience in the industry, 
                we’ve perfected our cleaning methods to ensure every job is done right.
                </p>
                <div className="flex w-[80%] md:w-[50%] justify-start items-center gap-8 pt-8 socials text-[#279EE2] text-shadow">
                    <a href="https://www.instagram.com/skygridtech/" target="_blank" ><BsInstagram className="w-8 h-6 hover:scale-110 transition duration-200"/></a>
                    <a href="https://www.tiktok.com/@skygridtech" target="_blank"><BsTiktok className="w-8 h-6 hover:scale-110 transition duration-200"/></a>
                    <a href="contact" target="_blank"><BsFacebook className="w-8 h-6 hover:scale-110 transition duration-200"/></a>
                    <a href="contact" target="_blank"><BsLinkedin className="w-8 h-6 hover:scale-110 transition duration-200"/></a>
                    <a href="contact" target="_blank"><BsTwitterX className="w-8 h-6 hover:scale-110 transition duration-200"/></a>
                </div>
            </div>
        </div>
        <div className="second-section flex flex-col md:flex-row justify-center gap-12 md:space-x-24 w-2/3">
            <div className="flex flex-col gap-4">
                <h1 className="font-normal text-[14px] leading-[24px] text-white">Services</h1>
                <ul className="font-light text-[14px] leading-[35px] text-[#FFFFFFB2] cursor-pointer grid gap-1.5 md:gap-3">
                    <a href="#">Home </a>
                    <a href="#services">Custom Software Development</a>
                    <a href="#">Managed IT Services</a>
                    <a href="#about">About Us</a>
                    <a href="#">Security Solutions</a>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="font-normal text-[14px] leading-[24px] text-white">company</h1>
                <ul className="font-light text-[14px] leading-[35px] text-[#FFFFFFB2] cursor-pointer grid gap-1.5 md:gap-3">
                    <li>About Us</li>
                    <li>Clients</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>


      </div>
      <div className="w-full mt-8 border-t border-gray-500">
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 text-xs md:text-sm text-[#A6A6A6] pt-6 py-8 justify-between px-2 md:px-8 lg:px-12">
                <div className="copyright">
                    <p className="text-center md:text-start">ServEase. Copyright © 2025 </p>
                </div>
                <div className="lg:pr-6 flex space-x-12">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
            </div>
      </div>
    </section>
  )
}
