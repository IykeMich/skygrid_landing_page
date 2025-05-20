import AfterHero from "./components/landingpage/AfterHero"
import Clients from "./components/landingpage/Clients"
import Contact from "./components/landingpage/Contact"
import Faq from "./components/landingpage/FAQ"
import Hero from "./components/landingpage/Hero"
import Offerings from "./components/landingpage/Offerings"
import Teams from "./components/landingpage/Teams"
import DefaultLayout from "./view/layout/DefaultLayout"


const App = () => {
  return (
    <DefaultLayout>
      <Hero/>
      <AfterHero />
      <Offerings />
      <Clients />
      <Teams />
      <Faq />
      <Contact />
    </DefaultLayout>
  )
}

export default App