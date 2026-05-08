import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { WhyUs } from './components/WhyUs'
import { ServiceAreas } from './components/ServiceAreas'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <WhyUs />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
