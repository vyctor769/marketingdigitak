import React from 'react';
import { MessageCircle, Instagram, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-amber-600 hover:to-yellow-500 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 inline-block mb-8">
            <a 
              href="https://go.tribopay.com.br/msfnsueqle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <Shield className="w-5 h-5" />
              Quero Garantir Minha Cópia
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-amber-400 font-bold text-xl mb-2">Marketing Proibido</h3>
              <p className="text-gray-400 text-sm">
                © 2025 Marketing Proibido. Todos os direitos reservados.<br />
                Este conteúdo é apenas educacional.
              </p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <p className="text-amber-300 font-medium">Suporte:</p>
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/5562999574881" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <a 
                  href="https://www.instagram.com/vittin_vh/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}