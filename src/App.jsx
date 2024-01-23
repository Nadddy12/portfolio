import Test from './Test';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/NavBar';
import Parallax from './components/parallax/Parallax';
import './app.scss';
import Services from './components/services/Services';

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
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contacte'>Contact</section>
    </div>
  )
}

export default App
