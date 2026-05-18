import React from 'react';

const diferenciaisList = [
  "Software flexível, versátil, aberto e totalmente moderno",
  "Visual e aplicabilidade adequados",
  "Otimização das demandas",
  "Usabilidade adequada à realidade das operações diárias",
  "Otimização dos indicadores apresentados",
  "Soluções que respeitam os valores de cada cliente"
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Diferencial Competitivo
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-2xl">
            Estamos no mercado com a finalidade de oferecer aos nossos clientes soluções customizadas e inteligentes, com qualidade e confiabilidade!
          </p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {diferenciaisList.map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 mt-0.5">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Box de design geométrico simulando a estrutura original em bloco oculto */}
          <div className="relative h-72 w-72 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-900 opacity-20 blur-2xl pointer-events-none" />
          <div className="absolute inset-0 border border-slate-800 bg-slate-900/20 backdrop-blur-sm rounded-2xl flex items-center justify-center p-8 text-center">
            <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">Tecnologia Confiável</span>
          </div>
        </div>
      </div>
    </section>
  );
}