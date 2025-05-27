import team1 from "@/assets/images/teams/team1.png"
import team2 from "@/assets/images/teams/team2.png"
import team3 from "@/assets/images/teams/team3.png"
import team4 from "@/assets/images/teams/team4.png"
import mission1 from "@/assets/images/teams/mission1.png"
import mission2 from "@/assets/images/teams/mission2.png"
import mission3 from "@/assets/images/teams/mission3.png"

const teams: { id: number, image: string, title: string, subtitle: string }[] = [
    { id: 1, image: team1, title: "Leadership Team", subtitle: "Visionaries guiding our company towards excellence and innovation." },
    { id: 2, image: team2, title: "Development Team", subtitle: "Expert engineers building robust solutions with top-notch technology." },
    { id: 3, image: team3, title: "Support Team", subtitle: "Dedicated professionals ensuring your success around the clock." },
    { id: 4, image: team4, title: "Security Team", subtitle: "Specialists safeguarding your data with industry-leading protocols." },
]


export default function Teams() {
    return (
        <section id="teams" className="mb-12 px-8 lg:px-12 xl:px-24">
            <main>
                <div className="text-center block space-y-4 px-4 lg:px-12 xl:px-16">
                    <h1 className="text-xl md:text-3xl leading-[100%] tracking-wide">Our Core Teams</h1>
                    <h1 className="font-medium text-[30px] leading-1 tracking-wide">Amazon AWS Solutions</h1>
                    <p className="font-normal text-[16px] leading-[160%]">We provide a comprehensive range of Amazon AWS services to help your business leverage the power of cloud computing.</p>
                </div>

                <div className="block space-y-9 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-12 mt-24">
                    {teams.map((team) => (
                        <div 
                        data-aos="fade-in"
                        data-aos-duration="800"
                        data-aos-delay={`${team.id * 200}`}

                        key={team.id} className={` ${team.id === 7 ? "col-span-2" : "col-span-1"} justify-self-start text-start  py-6 px-6 custom-glow-border-2 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(20,102,135,0.6),_0_4px_8px_rgba(0,0,0,0.3)] `} style={{ borderImage: 'linear-gradient(180deg, #000000 0%, #144663 100%)', borderImageSlice: 1 }} >
                            <div className="w-[40.3px] h-[40.3px] mr-4 mb-8 bg-[#143D54] rounded-full flex justify-center items-center">
                                <img src={team.image} alt="" className={` ${team.id === 3 ? 'h-[24px]' : 'h-[24px]'} w-[24px] `} />
                            </div>
                            <h1 className="font-medium text-[17.3px] leading-[1.6] mb-5">{team.title}</h1>
                            <h4 className="font-medium text-[14.05px] leading-[1.6] mb-5 text-[#D4ECF9]">{team.subtitle}</h4>
                        </div>
                    ))}
                </div>

                {/* OUR MISSION */}
                <div className="mt-12 flex md:space-x-6 xl:space-x-12">
                    <div className="custom-glow-border-2 flex flex-col md:flex-row space-y-16 md:space-y-0 py-6 justify-evenly items-center px-4">
                        <div className="w-full md:w-[50%]">
                            <h1 className="mb-5 font-medium text-[16px] leading-1 tracking-wide">Our Mission</h1>
                            <p className="font-light text-[14px] leading-[160%] tracking-wide text-[#D4ECF9]">We're dedicated to empowering businesses with innovative technology solutions that optimize operations, improve efficiency, 
                                and drive growth. Our client-centric approach ensures we deliver tailored solutions that address your unique challenges.</p>
                        </div>
                        <div className="block space-y-9">
                            <div className="flex items-center">
                                <img src={mission1} alt="" className="w-[30px] h-full mr-4" />
                                <div>
                                    <h1 className="font-medium text-[16px] leading-1 tracking-wide">Client-Fcused Approach</h1>
                                    <p className="font-light text-[14px] leading-[160%] tracking-wide text-[#D4ECF9]">Your success is our priority, with solutions tailored to your needs.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src={mission2} alt="" className="w-[30px] h-full mr-4" />
                                <div>
                                    <h1 className="font-medium text-[16px] leading-1 tracking-wide">Industry Excellence</h1>
                                    <p className="font-light text-[14px] leading-[160%] tracking-wide text-[#D4ECF9]">Award-winning solutions recognized for their innovation and impact.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img src={mission3} alt="" className="w-[30px] h-full mr-4" />
                                <div>
                                    <h1 className="font-medium text-[16px] leading-1 tracking-wide">Trust & Security</h1>
                                    <p className="font-light text-[14px] leading-[160%] tracking-wide text-[#D4ECF9]">Enterprise-grade security protocols protecting your valuable data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </section >
    )
}
