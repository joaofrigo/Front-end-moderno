import React from 'react';

export default function Solucoes() {
  return (
    <section id="solucoes" className="py-20 lg:py-28 px-6 lg:px-8 border-t border-slate-900">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Nossas soluções</h2>
        <p className="mt-4 text-base text-slate-400 max-w-2xl mx-auto">
          Produtos na área de Energia e Agronegócios, soluções customizadas para otimização dos resultados!
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card Energia */}
          <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/50 to-slate-950 p-8 text-left transition-all duration-300 hover:border-blue-500/30">
            <div className="absolute top-0 right-0 h-32 w-32 bg-amber-500/5 blur-2xl rounded-full" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-white tracking-tight">Sistemas de Informação voltados à Concessionárias de Energia (P&D)</h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">Engenharia de software aplicada para atender os critérios regulatórios e de pesquisa do setor elétrico.</p>
          </div>

          {/* Card Agronegócios */}
          <div className="relative group overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/50 to-slate-950 p-8 text-left transition-all duration-300 hover:border-blue-500/30">
            <div className="absolute top-0 right-0 h-32 w-32 bg-emerald-500/5 blur-2xl rounded-full" />
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-white tracking-tight">Sistemas de Informação sob medida para Laboratórios Agronômicos</h3>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">Arquiteturas robustas e precisas customizadas sob medida para a dinâmica de análises em larga escala.</p>
          </div>
        </div>
      </div>
    </section>
  );
}