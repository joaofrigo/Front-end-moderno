import React from 'react';

export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-4 py-1.5 text-xs font-medium tracking-wide text-blue-400 backdrop-blur-sm mb-6 uppercase tracking-widest">
          Enterprise Software Desde 2003
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent max-w-4xl mx-auto leading-tight">
          Soluções definitivas em software para o seu negócio
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-400 max-w-2xl mx-auto">
          Desde 2003 oferecendo aos nossos clientes soluções customizadas e inteligentes, com qualidade e confiabilidade.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#solucoes" className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-6 font-semibold text-white shadow-xl shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/30 transition-all duration-200">
            Conhecer Soluções
          </a>
          <a href="#contato" className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 px-6 font-semibold text-slate-300 hover:bg-slate-900 hover:text-white transition-all duration-200 backdrop-blur-sm">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}