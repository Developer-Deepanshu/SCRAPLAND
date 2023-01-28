import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowWeAre from './components/HowWeAre';
import NavBar from './components/NavBar';
import OurFeatures from './components/OurFeatures';

function App() {
  return (
    <>
      <div className='min_vh_xl_100 bg_hero'>
        <NavBar />
        <Hero />
      </div>
      <HowWeAre />
      <OurFeatures />
      <Footer />
    </>
  );
}

export default App;
