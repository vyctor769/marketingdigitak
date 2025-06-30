import React from 'react';
import { Shield, Zap, Target, Settings } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Estratégias de Cloaking",
    description: "Aprenda a camuflar suas campanhas e driblar os filtros das plataformas."
  },
  {
    icon: Zap,
    title: "Automatização de Leads",
    description: "Ferramentas que capturam e qualificam leads 24 horas por dia."
  },
  {
    icon: Target,
    title: "Tráfego Agressivo",
    description: "Como operar campanhas que vendem rápido sem levantar suspeitas."
  },
  {
    icon: Settings,
    title: "Contingência Profissional",
    description: "Estruturas para nunca ficar sem anúncios no ar, mesmo com bloqueios."
  }
];

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
            O Que Você Vai Aprender
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-black" />
                </div>
                
                <h3 className="text-xl font-bold text-amber-300 mb-4 group-hover:text-yellow-300 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}