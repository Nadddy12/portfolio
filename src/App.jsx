import Test from './Test';
import './app.scss';
import Navbar from './components/navbar/NavBar';

const App = () => {

  return (
    <div>
      <section id='Accueil'>
        <Navbar />
      </section>
      <section id='Services'>Parallax</section>
      <section>Services</section>
      <section id='Portfolio'>Parallax</section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contacte'>Contact</section>
    </div>
  )
}

export default App
