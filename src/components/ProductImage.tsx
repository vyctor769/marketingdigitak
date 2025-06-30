import React from 'react';
import { BookOpen, Lock } from 'lucide-react';

export default function ProductImage() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/70 backdrop-blur-sm border border-amber-500/30 rounded-3xl p-8 max-w-md mx-auto">
            <div className="mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-2">Marketing Proibido</h3>
              <p className="text-gray-300">E-book Exclusivo</p>
            </div>
            
            <img 
              src="https://i.ibb.co/fbhG3WF/capa.jpg" 
              alt="Capa do Ebook Marketing Proibido" 
              className="w-full rounded-xl shadow-2xl mb-6 border-2 border-amber-500/50"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
            
            <div className="flex items-center justify-center gap-2 text-yellow-400">
              <Lock className="w-5 h-5" />
              <span className="font-medium">Conteúdo Exclusivo</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-6 max-w-2xl mx-auto">
          <p className="text-green-300 text-lg font-medium">
            ✓ Garantia de 7 dias ou seu dinheiro de volta. Sem risco, só resultado.
          </p>
        </div>
      </div>
    </section>
  );
}