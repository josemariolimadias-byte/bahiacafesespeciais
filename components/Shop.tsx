
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ShoppingCart, ShoppingBag, Leaf, MapPin } from 'lucide-react';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section id="comprar" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Nossa Loja</h2>
            <p className="text-stone-600">Cafés frescos com rastreabilidade total, do produtor à sua xícara.</p>
          </div>
          <div className="flex gap-2">
            {['all', 'grão', 'moído'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all ${
                  filter === type 
                    ? 'bg-amber-800 text-white shadow-lg' 
                    : 'bg-white text-stone-600 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {type === 'all' ? 'Ver Todos' : type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-[2rem] p-10 shadow-sm hover:shadow-2xl transition-all duration-500 group border border-stone-100 flex flex-col min-h-[500px]"
            >
              <div className="flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-amber-50 text-amber-800 p-3 rounded-2xl">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-black text-stone-900 serif">
                    R$ {product.price.toFixed(2)}
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-stone-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[10px] uppercase tracking-widest font-bold">
                    {product.region}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-stone-900 mb-6 serif group-hover:text-amber-800 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-stone-600 text-base leading-relaxed mb-8 italic">
                  "{product.description}"
                </p>
              </div>

              <div className="pt-8 border-t border-stone-100 mt-auto">
                <div className="flex gap-4">
                  <button className="flex-1 bg-stone-900 text-white font-bold py-4 rounded-xl hover:bg-amber-900 transition-all flex items-center justify-center gap-2 transform active:scale-95">
                    <ShoppingBag className="w-5 h-5" /> Adicionar
                  </button>
                  <button className="p-4 border-2 border-stone-100 rounded-xl hover:bg-amber-50 hover:border-amber-200 transition-all text-stone-400 hover:text-amber-700">
                    <ShoppingCart className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-amber-900 rounded-[3rem] relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-800/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-950/40 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
            <div className="max-w-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 serif">Experiência Sensorial Completa</h3>
              <p className="text-amber-100/70 text-lg leading-relaxed">
                Cada grão conta uma história diferente. Explore nosso guia de preparo e descubra como extrair o melhor de cada terroir em sua casa.
              </p>
            </div>
            <button className="bg-white text-amber-900 font-black px-10 py-5 rounded-2xl hover:bg-amber-50 hover:scale-105 transition-all shadow-xl tracking-widest uppercase text-sm">
              ACESSAR GUIA DE MESTRE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
