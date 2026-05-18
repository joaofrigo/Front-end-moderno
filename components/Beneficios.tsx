import React from 'react';

const beneficiosList = [
  "Comprometimento com a inovação",
  "Facilidade em transformar diagnósticos em soluções",
  "Velocidade na entrega de melhorias",
  "Densidade na utilidade das soluções entregue",
  "Serviços e suporte especializados com agilidade nos atendimentos"
];

export default function Beneficios() {
  return (
    <section className="py-20 bg-slate-950/20 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Benefícios em escolher a Megatecnologia
          </h2>
          <p className="mt-4 text-base text-slate-400">
            Deixe a Megatecnologia ajudá-lo a tomar a melhor decisão para sua empresa ou negócio!
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beneficiosList.map((item, i) => (
            <div key={i} className="flex flex-col justify-between rounded-xl border border-slate-800/80 bg-slate-900/10 p-6 backdrop-blur-sm">
              <div className="text-sm font-medium leading-relaxed text-slate-200">
                {item}
              </div>
              <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                <span>Padrão Corporativo</span>
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}