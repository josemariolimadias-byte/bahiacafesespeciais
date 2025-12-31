
import React from 'react';
import { Coffee, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="w-6 h-6 text-amber-800" />
              <span className="text-xl font-bold uppercase tracking-widest serif">
                Bahia <span className="text-amber-600">Cafés</span>
              </span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-8">
              Levando os melhores grãos de origem controlada para todos os cantos do Brasil. Qualidade, rastreabilidade e paixão pelo café especial.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-widest text-xs">Navegação</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Início</a></li>
              <li><a href="#historia" className="hover:text-amber-600 transition-colors">História</a></li>
              <li><a href="#comprar" className="hover:text-amber-600 transition-colors">Comprar Café</a></li>
              <li><a href="#regioes" className="hover:text-amber-600 transition-colors">Regiões</a></li>
              <li><a href="#assinatura" className="hover:text-amber-600 transition-colors">Assinatura</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-widest text-xs">Suporte</h4>
            <ul className="space-y-4 text-stone-500 text-sm">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Minha Conta</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Rastrear Pedido</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Política de Devolução</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">FAQ</a></li>
              <li><a href="#contato" className="hover:text-amber-600 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-stone-500 text-xs mb-4">Receba dicas de preparo e ofertas exclusivas.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu email"
                className="flex-1 px-4 py-2 bg-white border border-stone-200 rounded-lg text-sm outline-none focus:border-amber-600"
              />
              <button className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-stone-800 transition-colors">
                OK
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            © 2024 Bahia Cafés Especiais. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1 text-stone-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            Feito com <Heart className="w-3 h-3 text-red-400 fill-current" /> no Brasil
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
