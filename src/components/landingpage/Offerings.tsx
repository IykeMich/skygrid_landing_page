import offering1 from "@/assets/images/offerings/offering1.png"
import offering2 from "@/assets/images/offerings/offering2.png"
import offering3 from "@/assets/images/offerings/offering3.png"
import offering4 from "@/assets/images/offerings/offering4.png"
import offering5 from "@/assets/images/offerings/offering5.png"
import offering6 from "@/assets/images/offerings/offering6.png"  
import offering7 from "@/assets/images/offerings/offering7.png"
import offering8 from "@/assets/images/offerings/offering8.png"  




const offerings: {id: number, image:string, title:string, subtitle:string}[] = [
    {id: 1, image: offering1, title: "Amazon Redshift Solutions", subtitle: "High-performance data warehousing solutions with Amazon Redshift for efficient analysis and insights."},
    {id: 2, image: offering2, title: "Amazon Databasae Migration", subtitle: "Seamless migration of databases to AWS with minimal downtime and complete data integrity."},
    {id: 3, image: offering3, title: "Amazon Glue", subtitle: "Fully managed ETL (Extract, Transform, Load) service that makes it simple to prepare and load your data for analytics."},
    {id: 4, image: offering4, title: "Amazon CloudFormation", subtitle: "Infrastructure as code to model and provision AWS and third-party resources in your cloud environment."},
    {id: 5, image: offering5, title: "Amazon Control Tower and Delivery", subtitle: "Set up and govern a secure, compliant multi-account AWS environment with streamlined delivery."},
    {id: 6, image: offering6, title: "Amazon Lambda services", subtitle: "Serverless computing solutions allowing you to run code without provisioning or managing servers."},
    {id: 6, image: offering7, title: "Amazon WAF and Security", subtitle: "Advanced web application firewall services to protect your applications from common exploits and threats."},
    {id: 6, image: offering8, title: "Amazon API Gateway", subtitle: "Create, publish, maintain, monitor, and secure APIs at any scale for your applications."},
]

const Offerings = () => {
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
                      {offerings.map((offering) => (
                        <div 
                        data-aos="fade-up"
                        data-aos-delay={`${offering.id * 100}`}
                        data-aos-duration="800"
                        data-aos-once="true"
                        key={offering.id} className={` ${offering.id === 7 ? "col-span-2" : "col-span-1" } justify-self-start text-start  py-6 px-6 custom-glow-border-2 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(20,102,135,0.6),_0_4px_8px_rgba(0,0,0,0.3)] `} style={{ borderImage: 'linear-gradient(180deg, #000000 0%, #144663 100%)', borderImageSlice: 1 }} >
                              <div className="w-[40.3px] h-[40.3px] mr-4 mb-8 bg-[#143D54] rounded-full flex justify-center items-center">
                                  <img src={offering.image} alt="" className={` ${offering.id === 3 ? 'h-6' : 'h-7'} w-8 `} />
                              </div>
                              <h1 className="font-medium text-[17.3px] leading-[1.6] mb-5">{offering.title}</h1>
                              <h4 className="font-medium text-[14.05px] leading-[1.6] mb-5">{offering.subtitle}</h4>
                          </div>
                      ))}
                  </div>
              </div>
        </main>
    </section>
  )
}

export default Offerings