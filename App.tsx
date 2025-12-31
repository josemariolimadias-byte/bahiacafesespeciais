
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Regions from './components/Regions';
import Shop from './components/Shop';
import Subscription from './components/Subscription';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 selection:bg-amber-100 selection:text-amber-900">
      <Header />
      
      <main>
        {/* Seção 2: Principal / Serviços */}
        <Hero />
        
        {/* Seção "História" solicitada no menu */}
        <History />
        
        {/* Seção 3: Regiões */}
        <Regions />
        
        {/* Seção "Comprar Café" / Assinatura (Vendas avulsas e clube) */}
        <Shop />
        
        {/* Seção 4: Assinatura */}
        <Subscription />
        
        {/* Seção Contato */}
        <Contact />
      </main>

      {/* Seção 5: Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
