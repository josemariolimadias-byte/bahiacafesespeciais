
import React from 'react';
import { ArrowRight, Star, Truck, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=2000" 
          alt="Café em Grãos" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/60 backdrop-brightness-75"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-white">
          <span className="inline-block px-4 py-1 bg-amber-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Cafés de Origem Controlada
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            A Essência do Grão Brasileiro na <span className="italic">Sua Xícara.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-10 max-w-lg leading-relaxed">
            Exploração sensorial através de grãos selecionados das melhores altitudes do país. 
            Do Norte do Paraná à Chapada Diamantina, levamos a história do Brasil até você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#comprar" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all"
            >
              Comprar Agora <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#assinatura" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-lg font-bold flex items-center justify-center transition-all"
            >
              Ver Assinaturas
            </a>
          </div>
        </div>

        {/* Features / Services Section 2 Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { 
              icon: <Star className="text-amber-400 w-8 h-8" />, 
              title: "Seleção Especial", 
              desc: "Apenas grãos com pontuação acima de 80 SCAA." 
            },
            { 
              icon: <Truck className="text-amber-400 w-8 h-8" />, 
              title: "Torra Fresca", 
              desc: "Torramos sob demanda para garantir o máximo frescor." 
            },
            { 
              icon: <Award className="text-amber-400 w-8 h-8" />, 
              title: "Grão ou Moído", 
              desc: "Escolha a moagem ideal para seu método de preparo." 
            },
            { 
              icon: <Coffee className="text-amber-400 w-8 h-8" />, 
              title: "Origem Única", 
              desc: "Rastreabilidade completa de cada microlote." 
            }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
              {feature.icon}
              <h3 className="text-white text-xl font-bold mt-4 mb-2">{feature.title}</h3>
              <p className="text-stone-300 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Coffee = ({ className }: { className: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>
);

export default Hero;
