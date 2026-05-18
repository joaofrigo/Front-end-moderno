
const clientesLogos = [
  { alt: "Grupo CEEE", src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Grupo_CEEE.svg" },
  { alt: "Grupo Equatorial Energia", src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Logo_Grupo_Equatorial_Energia.svg" },
  { alt: "Embrapa", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Embrapa.svg/1280px-Embrapa.svg.png" },
  { alt: "CCGL", src: "https://grupoccgl.com.br/apoio/ccgl.png" }
];

export default function Clientes() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Clientes</h2>
          <p className="mt-4 text-base text-slate-600">
            A Megatecnologia promove a inovação, em conjunto com seus clientes, através da identificação, elaboração e aprovação de projetos tecnológicos. Estes são alguns dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 max-w-5xl mx-auto">
          {clientesLogos.map((logo, index) => (
            <div key={index} className="flex h-24 items-center justify-center rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-slate-400">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}