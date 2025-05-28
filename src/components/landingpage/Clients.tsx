import client1 from "@/assets/images/clients/client1.png"
import client2 from "@/assets/images/clients/client2.png"
import client3 from "@/assets/images/clients/client3.png"
import client4 from "@/assets/images/clients/client4.png"
import client5 from "@/assets/images/clients/client5.png"
import client6 from "@/assets/images/clients/client6.png"
import { motion } from "framer-motion"

// const clients: {id:number, image:string}[] = [
//     {id: 1, image: client1},
//     {id: 2, image: client2},
//     {id: 3, image: client3},
//     {id: 4, image: client4},
//     {id: 5, image: client5},
//     {id: 6, image: client6},
// ]

export default function Clients() {
  return (
      <section id='offerings' className="pt-12 md:pt-28 pb-6 md:pb-16 relative overflow-x-clip">
          <main>
              <div id="offerings" className="pt-16 mx-4 md:mx-12 xl:mx-24">
                  <div className="text-center block space-y-4">
                      <button className="font-normal text-[12px] leading-[160%] inline-flex justify-center btn-gradient-2-full" >OUR CLIENTS</button>
                      <h1 className="font-medium text-[30px] leading-1 tracking-wide">Trusted by Industry Leaders</h1>
                      <p className="font-normal text-[16px] leading-[160%]">We're proud to work with these innovative companies who trust our expertise</p>
                  </div>

                  {/* <div className="grid grid-cols-3 gap-12 mt-24"> */}
                  <div className="flex gap-12 my-12 md:my-24 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                        <motion.div className="flex gap-14 flex-none pr-14"
                        animate={{
                            translateX: "-50%"
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }} >

                            <img src={client1} alt="Acme Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />
                            <img src={client2} alt="Quantum Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />
                            <img src={client3} alt="Echo Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />
                            <img src={client4} alt="Celestial Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />
                            <img src={client5} alt="Pulse Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />
                            <img src={client6} alt="Apex Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />

                            <img src={client1} alt="Acme Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />
                            <img src={client2} alt="Quantum Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />
                            <img src={client3} alt="Echo Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />
                            <img src={client4} alt="Celestial Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />
                            <img src={client5} alt="Pulse Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />
                            <img src={client6} alt="Apex Logo"  className="logo-ticker-image w-36 xl:w-80 h-12 xl:h-28" />

                        </motion.div>
                  </div>
              </div>
          </main>
                  <motion.div 
            aria-hidden="true"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 0, 
            }}
        className="absolute w-[653px] h-[640px] z-10 [background:radial-gradient(44.78%_34.42%_at_58.88%_36.02%,rgba(39,158,226,0.47)_5.48%,rgba(0,12,25,0)_100%)] top-0 right-0 md:left-[7rem] lg:left-[15rem]  pointer-events-none" />
      </section>
  )
}




// div className="flex gap-12 mt-24 pr-14">
//     {clients.map((client) => (
//     <motion.div 
//     animate={{
//         translateX: "-50%"
//     }}
//     transition={{
//         duration: 10,
//         repeat: Infinity,
//         ease: "linear",
//         repeatType: "loop",
//     }}
//         key={client.id} className={` ${client.id === 7 ? "col-span-2" : "col-span-1"} items-center   `}  >
//             <div className=" mr-4 mb-8 flex justify-center items-center">
//                 <img src={client.image} alt="" />
//             </div>
//         </motion.div>
//     ))}
// </div>