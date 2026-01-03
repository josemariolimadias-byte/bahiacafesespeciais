
import React from 'react';
import { REGIONS } from '../constants';
import { MapPin } from 'lucide-react';
import { CoffeeRegion } from '../types';

interface RegionsProps {
  onSelectRegion: (region: CoffeeRegion) => void;
}

const Regions: React.FC<RegionsProps> = ({ onSelectRegion }) => {
  return (
    <section id="regioes" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 serif">Nossas Regiões</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            O Brasil é um continente de sabores. Conheça o terroir de cada região de onde selecionamos nossos grãos especiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {REGIONS.map((region) => (
            <div 
              key={region.id} 
              onClick={() => onSelectRegion(region)}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-amber-600 cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4 text-amber-700">
                <MapPin className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Origem Brasil</span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-stone-900 serif group-hover:text-amber-700 transition-colors">
                {region.name}
              </h3>
              
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                {region.description}
              </p>
              
              <button className="text-stone-400 font-bold text-xs uppercase tracking-widest group-hover:text-amber-700 flex items-center gap-1 transition-all">
                Explorar <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Regions;
