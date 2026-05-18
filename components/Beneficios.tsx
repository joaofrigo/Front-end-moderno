
const beneficiosList = [
  "Comprometimento com a inovação",
  "Facilidade em transformar diagnósticos em soluções",
  "Velocidade na entrega de melhorias",
  "Densidade na utilidade das soluções entregue",
  "Serviços e suporte especializados com agilidade nos atendimentos"
];

export default function Beneficios() {
  return (
    <section className="py-20 bg-white border-y border-slate-200 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-3">
              Vantagens Estratégicas
            </span>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Benefícios em escolher a Megatecnologia
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl">
              Deixe a Megatecnologia ajudá-lo a tomar a melhor decisão para sua empresa ou negócio através de entregas sólidas e suporte ágil.
            </p>
          </div>

          <ul className="space-y-5">
            {beneficiosList.map((item, i) => (
              <li key={i} className="flex items-start gap-4 p-4 rounded-xl transition-colors hover:bg-slate-50">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-600 mt-0.5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div className="space-y-1">
                  <p className="text-base font-semibold text-slate-900 leading-snug">
                    {item}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="absolute h-80 w-80 rounded-full bg-gradient-to-br from-blue-400 to-orange-300 opacity-15 blur-3xl pointer-events-none" />
          
          <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl border border-slate-400 p-3 bg-slate-200 shadow-xl shadow-slate-200/50">
            <div className="w-full h-full overflow-hidden rounded-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Equipe corporativa trabalhando em soluções tecnológicas" 
                className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/10 to-transparent mix-blend-multiply" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200/50 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-widest text-orange-600 mb-1">Engenharia de Software</p>
                <p className="text-sm font-extrabold text-slate-900 leading-tight">Garantia de conformidade, eficiência e rentabilidade.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}