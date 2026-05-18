
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
          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Diferencial Competitivo
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl">
            Estamos no mercado com a finalidade de oferecer aos nossos clientes soluções customizadas e inteligentes, com qualidade e confiabilidade!
          </p>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {diferenciaisList.map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-600 mt-0.5">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-5 relative flex justify-center group">
          <div className="relative h-72 w-72 rounded-full bg-gradient-to-tr from-orange-400 to-amber-200 opacity-20 blur-2xl pointer-events-none" />
          <div className="absolute inset-0 overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
              alt="Gráficos de negócios e tecnologia corporativa" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-xs font-mono tracking-widest text-white/90 bg-slate-900/60 backdrop-blur-sm px-3 py-1 rounded-full uppercase">
                Tecnologia Confiável
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}