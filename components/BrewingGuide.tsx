
import React, { useEffect } from 'react';
import { ArrowLeft, Thermometer, Scale, Timer, Droplets, Coffee, Info } from 'lucide-react';

interface BrewingGuideProps {
  onBack: () => void;
}

const BrewingGuide: React.FC<BrewingGuideProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Nota: Para que estas imagens funcionem, os arquivos no Google Drive 
  // devem estar com acesso configurado para "Qualquer pessoa com o link".
  const methods = [
    {
      id: 'v60',
      name: 'Hario V60',
      imageUrl: 'https://drive.google.com/thumbnail?id=JlUkr59QleWNHqTb9zsTw6ACo6FAmTUc&sz=w1200',
      description: 'Destaque para acidez e clareza. Ideal para cafés florais e cítricos como os da Chapada Diamantina.',
      ratio: '1:15 (Ex: 20g café / 300ml água)',
      grind: 'Média (sal de cozinha)',
      temp: '92°C - 94°C',
      steps: [
        'Escalde o filtro de papel para remover o gosto residual.',
        'Adicione o café e faça um "bloom" de 30s com o dobro do peso do café em água.',
        'Despeje o restante da água em movimentos circulares lentos do centro para fora.',
        'O tempo total deve ser entre 2:30 e 3:00 minutos.'
      ]
    },
    {
      id: 'french-press',
      name: 'Prensa Francesa',
      imageUrl: 'https://drive.google.com/thumbnail?id=CWowhbKXfuSSFtCf_r3DexjwoxHOD4Yv&sz=w1200',
      description: 'Enfatiza o corpo e a doçura natural. Perfeito para o Vulcano Blend e notas achocolatadas.',
      ratio: '1:12 (Ex: 30g café / 360ml água)',
      grind: 'Grossa (sal grosso)',
      temp: '90°C - 92°C',
      steps: [
        'Escalde a jarra de vidro para manter a temperatura.',
        'Adicione o café e toda a água de uma vez.',
        'Aguarde 4 minutos de infusão.',
        'Quebre a crosta superficial com uma colher, espere 30s e pressione o êmbolo suavemente.'
      ]
    },
    {
      id: 'aeropress',
      name: 'Aeropress',
      imageUrl: 'https://drive.google.com/thumbnail?id=1mZWtUBHJ1o0HxmHoky-_d1UgDmMzacvl&sz=w1200',
      description: 'Versatilidade total. Pode produzir desde um café concentrado tipo espresso até um filtrado limpo.',
      ratio: '1:13 (Ex: 15g café / 200ml água)',
      grind: 'Média-Fina',
      temp: '85°C - 88°C',
      steps: [
        'Use o método invertido para maior controle.',
        'Adicione café e água, mexa por 10 segundos.',
        'Aguarde 1:30 de infusão total.',
        'Encaixe o filtro, vire sobre a xícara e pressione de forma constante por 30s.'
      ]
    },
    {
      id: 'chemex',
      name: 'Chemex',
      imageUrl: 'https://drive.google.com/thumbnail?id=111modwmzZyhV_bCrCVqJAxllkKl8IXZl&sz=w1200',
      description: 'Pureza máxima. O filtro de papel grosso retém óleos e sedimentos, resultando em uma xícara brilhante.',
      ratio: '1:15 (Ex: 30g café / 450ml água)',
      grind: 'Média-Grossa',
      temp: '94°C',
      steps: [
        'Lave bem o filtro triplo com água quente.',
        'Faça a pré-infusão de 45s.',
        'Mantenha o fluxo de água constante sem deixar o nível baixar demais.',
        'Aprecie a clareza sensorial única deste método.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50 pb-24 pt-32 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-2 text-stone-500 hover:text-amber-800 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Voltar ao Início</span>
        </button>

        <header className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6 serif">Guia de Preparo de Mestre</h1>
          <p className="text-lg text-stone-600 leading-relaxed italic">
            "O preparo é 50% do café. A mesma semente pode contar histórias diferentes dependendo de como você a trata."
          </p>
        </header>

        {/* Core Principles */}
        <section className="mb-24 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
            <Droplets className="w-8 h-8 text-amber-700 mb-4" />
            <h3 className="font-bold text-stone-900 mb-2 uppercase tracking-tighter">Água</h3>
            <p className="text-sm text-stone-600">Sempre filtrada ou mineral. 98% da sua xícara é água.</p>
          </div>
          <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
            <Scale className="w-8 h-8 text-amber-700 mb-4" />
            <h3 className="font-bold text-stone-900 mb-2 uppercase tracking-tighter">Proporção</h3>
            <p className="text-sm text-stone-600">Use uma balança. A consistência é a chave para o café perfeito.</p>
          </div>
          <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
            <Thermometer className="w-8 h-8 text-amber-700 mb-4" />
            <h3 className="font-bold text-stone-900 mb-2 uppercase tracking-tighter">Temperatura</h3>
            <p className="text-sm text-stone-600">Nunca use água fervendo (100°C). Ela queima os óleos delicados.</p>
          </div>
          <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100">
            <Coffee className="w-8 h-8 text-amber-700 mb-4" />
            <h3 className="font-bold text-stone-900 mb-2 uppercase tracking-tighter">Moagem</h3>
            <p className="text-sm text-stone-600">Moa na hora se possível. O frescor do aroma está no gás carbônico retido.</p>
          </div>
        </section>

        {/* Methods Grid */}
        <div className="space-y-16">
          {methods.map((method, index) => (
            <div 
              key={method.id} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-[3rem] bg-stone-200">
                  <img 
                    src={method.imageUrl} 
                    alt={method.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback em caso de falha no link do Drive ou falta de permissão pública
                      (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1544145945-f904253d0c7b?auto=format&fit=crop&q=80&w=1200&sig=${index}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <span className="text-amber-700 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Método {index + 1}</span>
                <h2 className="text-4xl font-bold text-stone-900 mb-4 serif">{method.name}</h2>
                <p className="text-stone-600 mb-8 text-lg">{method.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-2xl border border-stone-100 text-center">
                    <span className="block text-[10px] text-stone-400 font-bold uppercase mb-1">Ratio</span>
                    <span className="text-sm font-bold text-stone-900">{method.ratio}</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-stone-100 text-center">
                    <span className="block text-[10px] text-stone-400 font-bold uppercase mb-1">Moagem</span>
                    <span className="text-sm font-bold text-stone-900">{method.grind}</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-stone-100 text-center">
                    <span className="block text-[10px] text-stone-400 font-bold uppercase mb-1">Temp</span>
                    <span className="text-sm font-bold text-stone-900">{method.temp}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-stone-900 uppercase text-xs tracking-widest flex items-center gap-2">
                    <Timer className="w-4 h-4 text-amber-600" /> Passo a Passo
                  </h4>
                  {method.steps.map((step, sIdx) => (
                    <div key={sIdx} className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-stone-900 text-white text-[10px] flex items-center justify-center shrink-0 mt-1 font-bold">
                        {sIdx + 1}
                      </span>
                      <p className="text-stone-600 text-sm leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 p-16 bg-stone-900 rounded-[4rem] text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-4xl font-bold mb-6 serif">Pronto para praticar?</h3>
            <p className="text-stone-400 mb-10 max-w-xl mx-auto">
              Escolha o grão ideal para o seu método favorito e comece sua jornada sensorial hoje mesmo.
            </p>
            <button 
              onClick={() => {
                onBack();
                setTimeout(() => {
                  document.getElementById('comprar')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white font-black px-12 py-5 rounded-2xl transition-all uppercase tracking-widest text-sm shadow-xl hover:shadow-amber-900/40"
            >
              Comprar Cafés Especiais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrewingGuide;
