import { MapPin, Mail, Phone } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function Contact() {
    return (
        <section id="contact">
            <main className="px-4 md:px-6 lg:px-8 xl:px-24 pt-12 mb-8">

                <div className="my-12 px-8 text-center text-[#E9F5FC]">
                    <h1 className="text-xl md:text-3xl leading-[100%] tracking-wide mb-3">Contact Us</h1>
                    <p className="font-normal text-[16px] leading-[160%]">Have a question or want to work with us? Reach out using the form below or contact us directly.</p>
                </div>


                <div className="custom-glow-border-no-hover transition-all linear duration-300 flex flex-col md:flex-row gap-y-16 md:gap-y-0 justify-between items-start px-6 md:px-12 py-8">
                    <div className="w-full md:w-2/3">
                        <h1 className="font-medium text-[16px] leading-[100%] tracking-wide text-white" >Send us a message</h1>
                        <form action="#" className="mt-8">
                            <div className="grid grid-cols-2 gap-x-12 gap-y-10 md:mr-8 lg:mr-24">
                                <Input className="col-span-1 !pl-0 w-[100%] !rounded-none border-b !border-[#D4ECF9] focus-visible:!outline-none focus-visible:!ring-0" placeholder="Name" type="text" />
                                <Input className="col-span-1 !pl-0 w-[100%] !rounded-none border-b !border-[#D4ECF9] focus-visible:!outline-none focus-visible:!ring-0" placeholder="Email Address" type="email" />
                                <Textarea className="col-span-2 !pl-0 w-[100%] !rounded-none border-b !border-[#D4ECF9] focus-visible:!outline-none focus-visible:!ring-0" placeholder="Message" rows={5} />
                            </div>

                            <Button className="btn-gradient px-7 rounded-none w-[16rem] md:w-[24rem] 
                                font-medium text-[16px] tap-effect cursor-pointer shadow-sm hover:shadow-md transition ease-in duration-100
                                flex justify-self-center mt-12 lg:-ml-12">
                                Send message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="w-full md:w-1/3">
                        <h1 className="font-medium text-[16px] leading-[100%] tracking-wide text-white" >Get in Touch</h1>

                        <div className="block space-y-10 mt-8">
                            <div className="flex space-x-3">
                                <div>
                                    <Mail />
                                </div>
                                <div className="block space-y-4">
                                    <h1 className="font-normal text-[16px] leading-[100%] tracking-wide">Email</h1>
                                    <p className="font-normal text-[14px] leading-[100%] tracking-wide text-[#D4ECF9]">support@skygridtech.org</p>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <div>
                                    <Phone />
                                </div>
                                <div className="block space-y-4">
                                    <h1 className="font-normal text-[16px] leading-[100%] tracking-wide">Phone</h1>
                                    <p className="font-normal text-[14px] leading-[100%] tracking-wide text-[#D4ECF9]">+234 815 342 8584 | Chat on WhatsApp</p>
                                </div>
                            </div>
                            <div className="flex space-x-3">
                                <div>
                                    <MapPin />
                                </div>
                                <div className="block space-y-4">
                                    <h1 className="font-normal text-[16px] leading-[100%] tracking-wide">Email</h1>
                                    <p className="font-normal text-[14px] leading-snug tracking-wide text-[#D4ECF9]">
                                        HSE 13/15 Adegbenle Bolarinwa, <br />
                                        Chevy View Estate, <br />
                                        Chevron Lekki
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}
