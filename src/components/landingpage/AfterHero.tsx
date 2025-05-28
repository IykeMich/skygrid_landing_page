import image1 from "@/assets/images/hero/hero1.png" 
import image2 from "@/assets/images/hero/hero2.png" 
import image3 from "@/assets/images/hero/hero3.png" 

import service1 from "@/assets/images/hero/services1.png"
import service2 from "@/assets/images/hero/services2.png"
import service3 from "@/assets/images/hero/services3.png"
import service4 from "@/assets/images/hero/services4.png"
import service5 from "@/assets/images/hero/services5.png"
import service6 from "@/assets/images/hero/services6.png"
import { Check } from "lucide-react"

import { motion } from "framer-motion"


const services: {id: number, title:string, image:string}[] = [
    {id: 1, title:"Custom Software", image: image1},
    {id: 2, title:"Enterprise Solutions", image: image2},
    {id: 3, title:"Cloud Storage", image: image3},
]

const mainServices: {id: number, image:string, title:string, subtitle:string, check:string[]}[] = [
    {
        id:1, 
        title:"Infrastructure as a service", 
        subtitle: "Scalable virtual machines, storage, and networking resources on demand.", 
        image: service1, 
        check: ["Auto-scaling complete resources", 
                "Customer relationship management", 
                "Collaborative productivity tools",
                "AI-powered analytics",
                "Enterprise reosurce planning"
            ]
    },
    {
        id:2, 
        title:"Platform as a service", 
        subtitle: "Fully managed development platforms to build, deploy, and scale applications.", 
        image: service2, 
        check: ["Containerized application hosting", 
                "managed database services", 
                "serverless compute function",
                "continuous integration pipelines",
                "Application performance monitoring"
            ]
    },
    {
        id:3, 
        title:"Software as a service", 
        subtitle: "Enterprise-ready applications delivered through the cloud.", 
        image: service3, 
        check: ["Budiness intelligence dashboards", 
                "Customer relationship management", 
                "collaborative productivity tools",
                "AI_powered analytics",
                "Enterprise resource planning"
            ]
    },
    {
        id:4, 
        title:"Cloud Computing Services", 
        subtitle: "Scalable, secure, and high-performance cloud solutions to power your digital infrastructure.", 
        image: service4, 
        check: ["Database as a service (DBaaS)", 
                "Cloud Storage & Backup", 
                "Scalable Infrastructure Management",
                "Cloud Security & DevOps",
                "Migration & Optimization"
            ]
    },
    {
        id:5, 
        title:"Software Engineering Services", 
        subtitle: "Custom software solutions designed to meet your business goals across platforms.", 
        image: service5, 
        check: ["Website development", 
                "Mobile app development (iOS, Android, Hybrid)", 
                "Desktop application development",
                "Custom software solutions",
                "API & systems integration"
            ]
    },
    {
        id:5, 
        title:"IT & Cloud Training", 
        subtitle: "Custom software solutions designed to meet your business goals across platforms.", 
        image: service6, 
        check: ["Website development", 
                "Mobile app development (iOS, Android, Hybrid)", 
                "Desktop application development",
                "Custom software solutions",
                "API & systems integration"
            ]
    },
]

export default function AfterHero() {
  return (
    <section className="mt-16 md:mt-24 lg:mt-32 mb-6 overflow-x-clip px-4 md:px-6 lg:px-8 xl:px-24">
        <main className="w-full text-center relative">
            <h1 
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="font-normal text-[16px] leading-[160%] text-[#A1B2BC]">Your Trusted Partner in Cloud & Software Innovation</h1>

            <div className="mt-6 gap-12">
                <div className="mt-6 btn-gradient-2 flex py-6 px-8 mx-4 mb-24">
                    <div className="md:mx-4 xl:mx-12 block space-y-10 md:space-y-0 md:flex w-full justify-between">
                        {services.map((service) => (
                        <div
                        data-aos="fade-up"
                        data-aos-delay={`${service.id * 200}`}
                        data-aos-duration="800"
                        data-aos-once="true"
                        key={service.id} className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-y-3 md:gap-y-0 py-3">
                            <div className="rounded-full justify-center items-center flex border-2 xl:border-4 border-[#93CFF0] w-[67px] md:w-[48px] xl:w-[67px] h-[67px] md:h-[48px] xl:h-[67px] md:mr-2 lg:mr-4">
                                <img src={service.image} alt="" className={` ${service.id === 3 ? 'h-6' : 'h-7 md:h-5 xl:h-7'} w-8 md:w-6 xl:w-8 `} />
                            </div>
                            <h1 className="font-medium text-xl md:text-base xl:text-xl">{service.title}</h1>
                        </div>
                        ))}
                    </div>
                </div>

                <div className="pt-16">
                    {/* <div className=" text-center"> */}
                        <div className="text-center block space-y-4">
                            <button 
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            className="font-normal text-[12px] leading-[160%] inline-flex justify-center btn-gradient-2-full" >CLOUD SOLUTIONS</button>
                            <h1 
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            className="font-medium text-[30px] leading-1 tracking-wide">Tailored Services for Your Business</h1>
                            <p 
                            data-aos="fade-up"
                            data-aos-duration="1900"
                            className="font-normal text-[16px] leading-[160%]">We have cloud delivery models and services for all your organization's needs</p>
                        </div>

                        <div className="block px-4 md:px-0 space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12 mt-24">
                            {mainServices.map((service) => (
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={`${service.id * 100}`}
                            data-aos-duration="800"
                            data-aos-once="true"
                            key={service.id} className="col-span-1 justify-self-start text-start  py-6 px-6 custom-glow-border shadow-inner shadow-[#0e446580] hover:shadow-[0_0_20px_5px_rgba(17,129,249,0.6)] 
                            transition-all duration-500">
                                <div className="w-[40.3px] h-[40.3px] mr-4 mb-8">
                                    <img src={service.image} alt="" className={` ${service.id === 3 ? 'h-6' : 'h-7'} w-8 `} />
                                </div>
                                <h1 className="font-medium text-[17.3px] leading-[1.6] mb-5">{service.title}</h1>
                                <h4 className="font-medium text-[14.05px] leading-[1.6] mb-5">{service.subtitle}</h4>
                                {service.check.map((check) => (
                                    <div className="text-light text-[12.97px] leading-[1.6] gap-4"><p className="flex items-center">  <span><Check className="w-3.5 mr-3" /> </span> {check}</p></div>
                                ))}
                            </div>
                            ))}
                        </div>

                        {/* <div className="pointer-events-none bg-custom-radial absolute w-[60%] h-92 -bottom-6 right-0" /> */}

                    {/* </div> */}
                </div>
            </div>
            <motion.div 
                aria-hidden="true"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 0, 
                }}
            className="absolute w-[653px] h-[640px] z-10 [background:radial-gradient(44.78%_34.42%_at_58.88%_36.02%,rgba(39,158,226,0.47)_5.48%,rgba(0,12,25,0)_100%)] -bottom-[450px] md:right-8 pointer-events-none" />
        </main>
    </section>
  )
}
