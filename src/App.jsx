import HeroSection from './pages/HeroSection'
import Header from './pages/Header'
import AboutTeam from './pages/AboutTeam'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio.jsx'
import Contact from './pages/Contact'
import "./App.css"

function App() {
  return (
    <div className='overflow-hidden'>
    <Header id="header" />
    <HeroSection id="hero" />
    <AboutTeam id="team" />
    <AboutUs id="about" />
    <Services id="services" />
    <Portfolio id="portfolio" />
    <Contact id="contact" />
    </div>
  )
}

export default App
