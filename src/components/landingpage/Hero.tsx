import hero from "@/assets/images/hero.png"
import { motion } from "framer-motion"


export default function Hero() {
  return (
<section className="relative font-sans bg-black">
    {/* Radial background at start (left side) */}
    {/* <div className="pointer-events-none absolute top-6 left-0 h-full w-[30%] bg-custom-radial" aria-hidden="true"></div> */}


      <motion.div
        className="pointer-events-none absolute top-6 left-0 h-full w-[30%] bg-custom-radial"
        aria-hidden="true"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
          delay: 0, 
        }}
      />


    {/* Radial background at end (right side) */}
    {/* <div className="pointer-events-none absolute top-6 right-0 h-full w-[40%] bg-custom-radial"   aria-hidden="true"
        style={{ transform: "scaleX(-1)" }}></div>
     */}
      <motion.div
        className="pointer-events-none absolute top-6 right-0 h-full w-[40%] bg-custom-radial"
        aria-hidden="true"
        style={{ transform: "scaleX(-1)" }}
        animate={{ opacity: [0.15, 0.5, 0.15] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3, // Starts halfway into the left’s animation
        }} 
      />


  <main className="px-4 md:px-16 flex justify-center md:justify-between items-center md:items-start mt-6 md:mt-3">
    {/* Content containers WITHOUT bg-custom-radial */}
    <div className="gap-4 w-full md:w-[55%] text-center md:text-start flex flex-col md:block">
      <button className="border rounded-full flex justify-center  md:inline-flex px-3 py-1 btn-gradient-2-full md:my-12">
        <p
        data-aos="fade-down"
        data-aos-delay="700" 
        className="font-sans font-normal text-[10px] md:text-[12px] leading-snug md:leading-normal text-white">
          CLOUD COMPUTING & SOFTWARE ENGINEERING SOLUTIONS
        </p>
      </button>

      <h1 
      data-aos="fade-down"
      className="font-semibold text-[46px] md:text-[54px] leading-normal md:leading-[120%] -tracking-[2%] pb-6 font-sans">
        Powering Innovation <br /> Through Cloud & Code
      </h1>
      <p
      data-aos="fade-up"
      data-aos-delay="500"
      className="font-normal text-[16px] leading-[150%] pb-8">
        We deliver excellent cloud computing and software engineering solutions <br/> to help your business scale with speed, security, and precision.
      </p>
      <div className="mt-12 block w-full md:flex space-y-6 md:space-y-0 md:gap-6">
        <button className="font-semibold text-[16px] leading-[100%] border-2 btn-gradient px-6 text-white w-full md:w-[243px] h-[45px] rounded-[3px]
        hover:shadow-md hover:shadow-slate-700 transition ease-linear duration-300 tap-effect">
          Get Started
        </button>
        <button className="font-semibold flex justify-center items-center text-[16px] leading-[100%] border-2 btn-gradient-border px-6 text-white w-full md:w-[243px] h-[45px] rounded-[3px]
        transition-all ease-linear duration-700 tap-effect">
          Explore Services <span className="ml-3"> &gt; </span>
        </button>
      </div>
    </div>

    <div className="hidden md:flex w-[45%] justify-end">
      <div className="mr-12">
        <motion.img 
            animate={{
              translateY: [-25, 25],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}        
        src={hero} alt="hero" className="w-[429px] h-[451px]" />
      </div>
    </div>
  </main>
</section>

  )
}
