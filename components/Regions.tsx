
import React from 'react';
import { REGIONS } from '../constants';
import { MapPin } from 'lucide-react';

const Regions: React.FC = () => {
  return (
    <section id="regioes" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Nossas Regiões</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            O Brasil é um continente de sabores. Conheça o terroir de cada região de onde selecionamos nossos grãos especiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {REGIONS.map((region) => (
            <div 
              key={region.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={region.imageUrl} 
                  alt={region.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-amber-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-700">Brasil</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-stone-900 serif">{region.name}</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">
                  {region.description}
                </p>
                <button className="text-amber-700 font-bold text-xs uppercase tracking-widest hover:text-amber-800 flex items-center gap-1 transition-colors">
                  Saiba Mais <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Regions;
