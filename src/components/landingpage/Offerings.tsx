import { offerings } from "@/data/offeringData"
import { useState } from "react";


const Offerings = () => {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section id='offerings' className="pt-12 md:pt-32 px-4 md:px-6 lg:px-8 xl:px-24">
        <main>
              <div id="offerings" className="pt-16">
                  <div className="text-center block space-y-4">
                      <button className="font-normal text-[12px] leading-[160%] inline-flex justify-center btn-gradient-2-full" >OUR OFFERINGS</button>
                      <h1 className="font-medium text-[30px] leading-1 tracking-wide">Amazon AWS Solutions</h1>
                      <p className="font-normal text-[16px] leading-[160%] md:px-8 lg:px-16">We provide a comprehensive range of Amazon AWS services to help your business leverage the power of cloud computing.</p>
                  </div>

    <div className="block space-y-9 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-12 mt-12 md:mt-24 px-4 md:px-0">
      {offerings.map((offering) => {
        const isExpanded = expandedCardId === offering.id;

        return (
          <div
            key={offering.id}
            data-aos="fade-up"
            data-aos-delay={`${offering.id * 100}`}
            data-aos-duration="800"
            data-aos-once="true"
            className={`
              relative
              ${offering.id === 7 ? "col-span-1" : "col-span-1"}
              self-start text-start
              py-6 px-6
              custom-glow-border-2
              transition duration-300
              hover:-translate-y-1.5
              hover:shadow-[0_10px_30px_rgba(20,102,135,0.6),_0_4px_8px_rgba(0,0,0,0.3)]
            `}
            style={{
              borderImage: 'linear-gradient(180deg, #000000 0%, #144663 100%)',
              borderImageSlice: 1,
            }}
          >
            {/* Icon + Title */}
            <div className="flex items-center mb-5">
              <div className="w-[40.3px] h-[40.3px] mr-4 bg-[#143D54] rounded-full flex justify-center items-center">
                <img
                  src={offering.image}
                  alt=""
                  className={`${offering.id === 3 ? 'h-6' : 'h-7'} w-8`}
                />
              </div>
              <h1 className="font-medium text-[17.3px] leading-[1.6]">
                {offering.title}
              </h1>
            </div>

            {/* Body text: truncated if not expanded */}
            <div
              className={`font-medium text-[14.05px] leading-[1.6] mb-5 transition-all duration-300`}
              style={
                isExpanded
                  ? {}
                  : {
                      maxHeight: '4rem',       // adjust as needed (e.g. 4rem ≈ ~2 lines)
                      overflow: 'hidden',
                    }
              }
            >
              {offering.body}
            </div>

            {/* “See More” / “See Less” button, bottom-right */}
            <div className="flex justify-end">
              <button
                onClick={() => handleToggle(offering.id)}
                className="text-sm text-blue-600 hover:underline focus:outline-none"
              >
                {isExpanded ? 'See Less' : 'See More'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
              </div>
        </main>
    </section>
  )
}

export default Offerings