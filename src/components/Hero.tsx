import React from 'react';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-amber-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-red-900/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-red-400 font-medium text-sm">Apenas 25 acessos liberados hoje!</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Marketing Proibido
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-200/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Descubra o lado oculto do tráfego pago, das ferramentas e estratégias que ninguém revela publicamente. 
            Este é o seu acesso ao <span className="text-yellow-400 font-semibold">submundo do marketing digital</span>, 
            onde o lucro é rápido e as regras, camufladas.
          </p>
        </div>

        <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-yellow-500/20 rounded-2xl p-8 mb-8 max-w-md mx-auto">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">De</p>
            <span className="text-2xl text-gray-500 line-through">R$197,00</span>
            <p className="text-amber-200 text-sm mb-2">por apenas</p>
            <div className="text-5xl font-bold text-yellow-400 mb-4">R$47,00</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://go.tribopay.com.br/msfnsueqle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-500 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 inline-flex items-center gap-3"
          >
            <TrendingUp className="w-5 h-5" />
            Quero Acessar Agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-green-400 font-medium">
            ✓ Garantia de 7 dias ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
}