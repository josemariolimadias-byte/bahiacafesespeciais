
import React from 'react';
import { Mail, Phone, MapPin, Instagram, ExternalLink, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold text-stone-900 mb-8 serif">Fale Conosco</h2>
            <p className="text-stone-600 mb-10">
              Queremos ouvir você. Seja para tirar dúvidas sobre pedidos, assinaturas ou apenas falar sobre café.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Email</p>
                  <a href="mailto:contato@bahiacafesespeciais.com.br" className="text-stone-900 font-semibold hover:text-amber-700 transition-colors">
                    contato@bahiacafesespeciais.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">WhatsApp</p>
                  <a href="https://wa.me/5571999560936" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-semibold hover:text-amber-700 transition-colors">
                    (71) 9 9956-0936
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">Torrefação</p>
                  <p className="text-stone-900 font-semibold">Salvador, Bahia, Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://www.instagram.com/bahiacafesespeciais/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 border-2 border-stone-100 rounded-full flex items-center justify-center hover:bg-amber-50 hover:border-amber-200 transition-all group"
                aria-label="Instagram Bahia Cafés Especiais"
              >
                <Instagram className="w-6 h-6 text-stone-600 group-hover:text-amber-700 transition-colors" />
              </a>
            </div>
          </div>

          <div className="lg:w-2/3 w-full">
            <div className="bg-stone-50 p-12 md:p-16 rounded-[3rem] border-2 border-dashed border-stone-200 flex flex-col items-center text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <MessageSquare className="w-32 h-32 text-amber-900" />
              </div>
              
              <div className="bg-amber-100 p-6 rounded-3xl mb-8">
                <MessageSquare className="w-12 h-12 text-amber-800" />
              </div>
              
              <h3 className="text-3xl font-bold text-stone-900 mb-4 serif">Inicie seu atendimento</h3>
              <p className="text-stone-600 mb-10 max-w-md text-lg">
                Clique no botão abaixo para preencher nosso formulário oficial de contato e nossa equipe retornará em breve.
              </p>
              
              <a 
                href="https://forms.gle/aNCr4LGPyrYKQhv27" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-amber-700 hover:bg-amber-800 text-white font-black px-12 py-6 rounded-2xl flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-amber-900/20 text-lg uppercase tracking-widest"
              >
                Preencher Formulário <ExternalLink className="w-6 h-6" />
              </a>
              
              <p className="mt-8 text-stone-400 text-sm italic">
                Leva menos de 1 minuto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
