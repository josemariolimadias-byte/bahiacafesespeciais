
import React from 'react';

const History: React.FC = () => {
  return (
    <section id="historia" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-100 rounded-full mix-blend-multiply opacity-70 filter blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-stone-200 rounded-full mix-blend-multiply opacity-70 filter blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1000" 
              alt="Plantação de Café" 
              className="relative z-10 rounded-3xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Nossa Herança</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-stone-900 leading-tight">
              Uma história escrita em cada <span className="italic">grão de café.</span>
            </h2>
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
              <p>
                O café chegou ao Brasil no século XVIII e, desde então, tornou-se parte indissociável da nossa identidade. O que começou como uma cultura de massa, hoje se transforma na busca pela perfeição sensorial.
              </p>
              <p>
                Na <span className="font-bold text-stone-900">Bahia Cafés Especiais</span>, nós valorizamos essa trajetória. Não somos apenas revendedores, somos curadores de experiências. Viajamos pelas estradas de terra do Cerrado, subimos as montanhas de Minas e exploramos a altitude da Chapada para encontrar o café que vai mudar sua manhã.
              </p>
              <p>
                Nosso compromisso é com o produtor local e com a sustentabilidade de todo o ecossistema cafeeiro nacional.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-bold text-amber-700 serif">15+</p>
                <p className="text-stone-500 text-sm uppercase tracking-wider font-semibold">Produtores Parceiros</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-amber-700 serif">100%</p>
                <p className="text-stone-500 text-sm uppercase tracking-wider font-semibold">Brasil e Especial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
