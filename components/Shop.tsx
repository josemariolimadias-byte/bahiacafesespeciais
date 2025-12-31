
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { ShoppingCart, ShoppingBag } from 'lucide-react';

const Shop: React.FC = () => {
  const [filter, setFilter] = useState('all');

  return (
    <section id="comprar" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Nossa Loja</h2>
            <p className="text-stone-600">Cafés frescos em grão ou moído, prontos para o seu método favorito.</p>
          </div>
          <div className="flex gap-2">
            {['all', 'grão', 'moído'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all ${
                  filter === type 
                    ? 'bg-stone-900 text-white shadow-lg' 
                    : 'bg-white text-stone-600 hover:bg-stone-200'
                }`}
              >
                {type === 'all' ? 'Ver Todos' : type}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all group">
              <div className="relative h-72 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-black text-amber-600 shadow-md">
                  R$ {product.price.toFixed(2)}
                </div>
              </div>
              <div className="px-2 pb-4 text-center">
                <span className="text-[10px] uppercase tracking-widest font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full mb-3 inline-block">
                  {product.region}
                </span>
                <h3 className="text-2xl font-bold text-stone-900 mb-2 serif">{product.name}</h3>
                <p className="text-stone-500 text-sm mb-6 px-4">{product.description}</p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-stone-900 text-white font-bold py-3 rounded-xl hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                    <ShoppingBag className="w-5 h-5" /> Carrinho
                  </button>
                  <button className="p-3 border-2 border-stone-100 rounded-xl hover:bg-stone-50 transition-colors">
                    <ShoppingCart className="w-6 h-6 text-stone-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-amber-900 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-800/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Dúvidas sobre a moagem?</h3>
              <p className="text-amber-100/80">Confira nosso guia de preparo completo para cada tipo de grão.</p>
            </div>
            <button className="bg-white text-amber-900 font-black px-8 py-4 rounded-2xl hover:bg-amber-50 transition-colors">
              VER GUIA DE PREPARO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
