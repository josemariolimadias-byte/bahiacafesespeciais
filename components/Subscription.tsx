
import React from 'react';
import { SUBSCRIPTION_PLANS } from '../constants';
import { Check, Zap } from 'lucide-react';

const Subscription: React.FC = () => {
  return (
    <section id="assinatura" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-[0.3em] text-xs uppercase mb-4 block">Club Bahia</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 serif">Assine e Receba em Casa</h2>
          <p className="text-stone-400 max-w-xl mx-auto">
            Junte-se ao nosso clube e descubra novos cafés todos os meses sem se preocupar em repor seu estoque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`relative p-10 rounded-[2.5rem] border-2 transition-all duration-500 ${
                plan.recommended 
                  ? 'bg-amber-900/40 border-amber-600 scale-105 z-10' 
                  : 'bg-white/5 border-white/10 hover:border-white/30'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-black flex items-center gap-1 shadow-lg">
                  <Zap className="w-3 h-3 fill-current" /> MAIS VENDIDO
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 serif">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-stone-400">/mês</span>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-300 text-sm">
                    <Check className="w-5 h-5 text-amber-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                plan.recommended 
                  ? 'bg-amber-600 hover:bg-amber-500 text-white' 
                  : 'bg-white text-stone-900 hover:bg-stone-100'
              }`}>
                Assinar Plano
              </button>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 text-stone-500 text-sm">
          Sem taxas de cancelamento. Altere ou pause seu plano a qualquer momento.
        </p>
      </div>
    </section>
  );
};

export default Subscription;
