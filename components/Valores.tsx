
const valoresData = [
  { t: "Customização", d: "Todas as soluções da Megatecnologia são personalizadas, respeitando e se adequando aos valores do cliente.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { t: "Parceria", d: "Atuamos como parceiros de instituições de ensino na execução de projetos de estudo, Pesquisa e Desenvolvimento (P&D).", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { t: "Versatilidade", d: "Compartilhando a propriedade intelectual, transformamos dados de pesquisas em recursos pertinentes às demandas de cada setor.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { t: "Eficiência", d: "Considerando as exigências técnicas e regulatórias, nossas soluções atendem às necessidades de eficiência e rentabilidade dos negócios.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
];

export default function Valores() {
  return (
    <section id="valores" className="py-20 bg-slate-50 border-y border-slate-200 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valoresData.map((item, i) => (
            <div key={i} className="group relative rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-xl hover:shadow-slate-200/50">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900 tracking-tight">{item.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}