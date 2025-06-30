import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: "O Marketing Proibido me mostrou ferramentas e estratégias que eu nem imaginava. Hoje opero no escuro, seguro e lucrando mais rápido.",
    author: "Felipe",
    role: "gestor de tráfego"
  },
  {
    text: "Antes eram só bloqueios, agora rodo campanhas agressivas todos os dias sem cair. Isso aqui é o manual do submundo.",
    author: "Luana", 
    role: "afiliada blackhat"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-6">
            Veja o que insiders estão dizendo
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-amber-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-8 hover:border-amber-400/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute top-4 left-4">
                <Quote className="w-8 h-8 text-amber-400/40" />
              </div>
              
              <div className="relative z-10 pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-amber-500/20 pt-4">
                  <p className="text-amber-300 font-semibold">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}