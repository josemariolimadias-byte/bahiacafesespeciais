
import React, { useEffect } from 'react';
import { CoffeeRegion } from '../types';
import { ArrowLeft, MapPin, Wind, Mountain, Beaker, CheckCircle } from 'lucide-react';

interface RegionDetailProps {
  region: CoffeeRegion;
  onBack: () => void;
}

const RegionDetail: React.FC<RegionDetailProps> = ({ region, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 pb-24 animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={region.imageUrl} 
            alt={region.name} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pb-16">
          <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Voltar para Regiões</span>
          </button>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 serif">{region.name}</h1>
          <p className="text-xl text-stone-300 max-w-2xl italic">
            {region.description}
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container mx-auto px-6 -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <Wind className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 serif">Clima</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{region.climate}</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <Mountain className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 serif">Terroir</h3>
            <p className="text-stone-600 text-sm leading-relaxed">{region.terroir}</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Beaker className="w-6 h-6 text-blue-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 serif">Especificações</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold border-b border-stone-50 pb-2">
                <span className="text-stone-400 uppercase">Altitude</span>
                <span className="text-stone-900">{region.specifications.altitude}</span>
              </div>
              <div className="flex justify-between text-xs font-bold border-b border-stone-50 pb-2">
                <span className="text-stone-400 uppercase">Processo</span>
                <span className="text-stone-900">{region.specifications.process}</span>
              </div>
              <div className="text-xs font-bold">
                <span className="text-stone-400 uppercase block mb-1">Perfil Sensorial</span>
                <span className="text-amber-800 italic">{region.specifications.sensoryNotes}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-8 serif">Cidades Produtoras</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {region.cities.map((city) => (
                <div key={city} className="flex items-center gap-3 bg-white p-5 rounded-2xl border border-stone-200">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span className="font-bold text-stone-800">{city}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-stone-900 text-white p-12 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <CheckCircle className="w-32 h-32" />
            </div>
            <h2 className="text-3xl font-bold mb-6 serif">Qualidade Bahia Cafés</h2>
            <p className="text-stone-400 mb-8 leading-relaxed">
              Todos os cafés provenientes desta região passam por nossa curadoria rigorosa. Selecionamos lotes que representam fielmente as características deste terroir único.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-semibold">
                <CheckCircle className="w-5 h-5 text-amber-500" /> Rastreabilidade completa
              </li>
              <li className="flex items-center gap-3 font-semibold">
                <CheckCircle className="w-5 h-5 text-amber-500" /> Torra em pequenos lotes
              </li>
              <li className="flex items-center gap-3 font-semibold">
                <CheckCircle className="w-5 h-5 text-amber-500" /> Apoio direto ao produtor
              </li>
            </ul>
            <button 
              onClick={() => {
                onBack();
                setTimeout(() => {
                  document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="mt-10 bg-amber-600 hover:bg-amber-700 text-white font-black px-8 py-4 rounded-xl transition-all uppercase text-xs tracking-widest"
            >
              Ver Cafés desta Região
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegionDetail;
