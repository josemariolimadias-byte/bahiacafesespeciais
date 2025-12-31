
import React, { useState, useEffect } from 'react';
import { Coffee, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [apiKeySuffix, setApiKeySuffix] = useState('');

  useEffect(() => {
    // Acessa a API KEY de forma segura tanto para o compilador quanto para o runtime
    const checkApiKey = () => {
      try {
        // Tenta acessar via globalThis para evitar erros de 'process is not defined' no navegador
        // antes de o bundler (Vite/Webpack) injetar o valor.
        const globalEnv = (globalThis as any).process?.env || {};
        const key = globalEnv.API_KEY || (typeof process !== 'undefined' ? process.env.API_KEY : undefined);

        if (key && typeof key === 'string' && key.length > 0) {
          setIsConnected(true);
          setApiKeySuffix(key.slice(-4));
        }
      } catch (e) {
        console.warn('API Status: Não foi possível verificar a chave de API.', e);
      }
    };

    checkApiKey();
    
    // Pequeno intervalo para garantir que o ambiente foi totalmente carregado se necessário
    const timer = setTimeout(checkApiKey, 500);
    return () => clearTimeout(timer);
  }, []);

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
            
            {/* API Status Indicator - Verde Pulsante conforme solicitado */}
            {isConnected ? (
              <div className="flex items-center gap-3 bg-white border border-green-100 p-3.5 rounded-2xl shadow-sm inline-flex">
                <div className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-green-700 uppercase tracking-wider leading-none">
                    API CONECTADA
                  </span>
                  <span className="text-[9px] text-stone-400 font-mono mt-1 font-bold">
                    ID: ****{apiKeySuffix}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-3 bg-white border border-stone-100 p-3.5 rounded-2xl shadow-sm inline-flex grayscale opacity-50">
                <div className="h-4 w-4 rounded-full bg-stone-300"></div>
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">
                  AGUARDANDO API...
                </span>
              </div>
            )}
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
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
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
          <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em] font-bold text-center md:text-left">
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
