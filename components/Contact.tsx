
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
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
                  <p className="text-stone-900 font-semibold">ola@bahiacafes.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-amber-700" />
                </div>
                <div>
                  <p className="text-xs font-bold text-stone-400 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-stone-900 font-semibold">(71) 99999-9999</p>
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
              <a href="#" className="w-10 h-10 border-2 border-stone-100 rounded-full flex items-center justify-center hover:bg-stone-50 transition-colors">
                <Instagram className="w-5 h-5 text-stone-600" />
              </a>
              <a href="#" className="w-10 h-10 border-2 border-stone-100 rounded-full flex items-center justify-center hover:bg-stone-50 transition-colors">
                <Facebook className="w-5 h-5 text-stone-600" />
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <form className="bg-stone-50 p-8 md:p-12 rounded-[2rem] space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome completo"
                    className="w-full px-6 py-4 rounded-xl border-2 border-white focus:border-amber-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="seu@email.com"
                    className="w-full px-6 py-4 rounded-xl border-2 border-white focus:border-amber-600 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Assunto</label>
                <select className="w-full px-6 py-4 rounded-xl border-2 border-white focus:border-amber-600 outline-none transition-all appearance-none bg-white">
                  <option>Dúvida Geral</option>
                  <option>Assinaturas</option>
                  <option>Loja Online</option>
                  <option>Parcerias</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Mensagem</label>
                <textarea 
                  rows={5}
                  placeholder="Como podemos te ajudar?"
                  className="w-full px-6 py-4 rounded-xl border-2 border-white focus:border-amber-600 outline-none transition-all"
                ></textarea>
              </div>
              <button className="bg-amber-700 hover:bg-amber-800 text-white font-black px-10 py-5 rounded-2xl flex items-center gap-3 transition-all transform active:scale-95 shadow-lg">
                ENVIAR MENSAGEM <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
