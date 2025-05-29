import Hero from "@/components/landingpage/Hero"
import DefaultLayout from "../layout/DefaultLayout"
import AfterHero from "@/components/landingpage/AfterHero"
import Offerings from "@/components/landingpage/Offerings"
import Clients from "@/components/landingpage/Clients"
import Teams from "@/components/landingpage/Teams"
import Faq from "@/components/landingpage/FAQ"
import Contact from "@/components/landingpage/Contact"
import {Helmet} from "react-helmet-async"


const Homepage = () => {
  return (
    <>
    <Helmet>
      <meta property="og:title" content="Skygridtech | Cloud & Software Solutions" />
      <meta property="og:description" content="Scalable cloud computing and software engineering to grow your business." />
      <meta property="og:image" content="/path-to-image.jpg" />
      <meta property="og:url" content="https://www.skygridtech.com" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Skygridtech | Cloud & Software Solutions" />
      <meta name="twitter:description" content="Accelerate your business with cloud and code." />
      <meta name="twitter:image" content="/path-to-image.jpg" />

    </Helmet>
    <DefaultLayout>
      <Hero/>
      <AfterHero />
      <Offerings />
      <Clients />
      <Teams />
      <Faq />
      <Contact />
    </DefaultLayout>
    </>
  )
}

export default Homepage