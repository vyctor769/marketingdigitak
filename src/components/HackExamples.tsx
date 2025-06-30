import React from 'react';
import { CheckCircle, Code, Eye } from 'lucide-react';

const hacks = [
  "Bypass no verificador de links do Facebook",
  "Script de redirecionamento por geolocalização", 
  "Táticas de warmup de BM e domínios",
  "Ferramenta stealth de pré-lander dinâmica",
  "Como clonar VSLs com bypass de rastreio"
];

export default function HackExamples() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/50 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-6">
              <Eye className="w-8 h-8 text-amber-400" />
              <Code className="w-8 h-8 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">
              Exemplos de Hacks Que Você Vai Ter Acesso
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-4">
            {hacks.map((hack, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl hover:border-green-400/40 transition-all duration-300 hover:transform hover:translate-x-2"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-200 text-lg">{hack}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-amber-200/80 text-lg italic">
              "E isso é apenas o começo... há muito mais esperando por você."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}