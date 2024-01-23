import Test from './Test';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/NavBar';
import Parallax from './components/parallax/Parallax';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import './app.scss';

const App = () => {

  return (
    <div>
      <section id='Accueil'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type="services"/>
      </section>
      <section>
        <Services />
      </section>
      <section id='Portfolio'>
        <Parallax type="portfolio"/>
      </section>
      <Portfolio />
      <section id='Contacte'>
        <Contact />
      </section>
    </div>
  )
}

export default App
