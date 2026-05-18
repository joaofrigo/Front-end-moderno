
export default function Hero() {
  return (
    <section className="relative py-20 lg:py-32 px-6 lg:px-8 bg-slate-100 overflow-hidden">
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
          alt="Fundo tecnológico abstrato" 
          className="w-full h-full object-cover opacity-30 grayscale mix-blend-multiply" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/20 via-transparent to-slate-100" />
      </div>

      <div className="relative mx-auto max-w-5xl text-center z-10">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-slate-900/5 px-4 py-1.5 text-xs font-bold text-slate-700 mb-6 uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
          Enterprise Software Desde 2003
        </span>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl max-w-4xl mx-auto leading-tight">
          Soluções definitivas em software para o seu negócio
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-700 font-medium max-w-2xl mx-auto">
          Desde 2003 oferecendo aos nossos clients soluções customizadas e inteligentes, com qualidade e confiabilidade.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#solucoes" className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-slate-900 px-6 font-semibold text-white shadow-xl hover:bg-slate-800 transition-all duration-200">
            Conhecer Soluções
          </a>
          <a href="#contato" className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-200">
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}