import React from 'react';

export default function Clientes() {
  return (
    <section className="py-20 bg-slate-950/40 border-t border-slate-900 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white">Clientes</h2>
          <p className="mt-4 text-base text-slate-400">
            A Megatecnologia promove a inovação, em conjunto com seus clientes, através da identificação, elaboração e aprovação de projetos tecnológicos. Estes são alguns dos nossos clientes.
          </p>
        </div>

        {/* Grid Corporativo Elegante com Placeholders */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="flex h-24 items-center justify-center rounded-xl border border-slate-800/60 bg-slate-900/10 p-6 backdrop-blur-sm group hover:border-slate-700 transition-colors">
              <div className="w-full h-full border border-dashed border-slate-700 rounded flex items-center justify-center text-xs font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                [Logo Empresa {id}]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}