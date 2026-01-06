import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import WhatsAppSection from './components/WhatsAppSection';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <WhatsAppSection />
      <Pricing />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
