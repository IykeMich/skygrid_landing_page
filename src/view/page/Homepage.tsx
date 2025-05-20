import Hero from "@/components/landingpage/Hero"
import DefaultLayout from "../layout/DefaultLayout"
import AfterHero from "@/components/landingpage/AfterHero"
import Offerings from "@/components/landingpage/Offerings"
import Clients from "@/components/landingpage/Clients"
import Teams from "@/components/landingpage/Teams"
import Faq from "@/components/landingpage/FAQ"
import Contact from "@/components/landingpage/Contact"
// import Footer from "@/components/footer/Footer"


const Homepage = () => {
  return (
    <DefaultLayout>
      <Hero/>
      <AfterHero />
      <Offerings />
      <Clients />
      <Teams />
      <Faq />
      <Contact />
      {/* <Footer /> */}
    </DefaultLayout>
  )
}

export default Homepage