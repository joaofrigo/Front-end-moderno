'use client';
import React, { useState } from 'react';

const valoresData = [
  { t: "Customização", d: "Todas as soluções da Megatecnologia são personalizadas, respeitando e se adequando aos valores do cliente.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { t: "Parceria", d: "Atuamos como parceiros de instituições de ensino na execução de projetos de estudo, Pesquisa e Desenvolvimento (P&D).", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { t: "Versatilidade", d: "Compartilhando a propriedade intelectual, transformamos dados de pesquisas em recursos pertinentes às demandas de cada setor.", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { t: "Eficiência", d: "Considerando as exigências técnicas e regulatórias, nossas soluções atendem às necessidades de eficiência e rentabilidade dos negócios.", icon: "M13 10V3L4 14h7v7l9-11h-7z" }
];

const diferenciaisList = [
  "Software flexível, versátil, aberto e totalmente moderno",
  "Visual e aplicabilidade adequados",
  "Otimização das demandas",
  "Usabilidade adequada à realidade das operações diárias",
  "Otimização dos indicadores apresentados",
  "Soluções que respeitam os valores de cada cliente"
];

const beneficiosList = [
  "Comprometimento com a inovação",
  "Facilidade em transformar diagnósticos em soluções",
  "Velocidade na entrega de melhorias",
  "Densidade na utilidade das soluções entregue",
  "Serviços e suporte especializados com agilidade nos atendimentos"
];

const clientesLogos = [
  { alt: "Grupo CEEE", src: "https://upload.wikimedia.org/wikipedia/commons/6/65/Grupo_CEEE.svg" },
  { alt: "Grupo Equatorial Energia", src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Logo_Grupo_Equatorial_Energia.svg" },
  { alt: "Embrapa", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Embrapa.svg/1280px-Embrapa.svg.png" },
  { alt: "CCGL", src: "https://grupoccgl.com.br/apoio/ccgl.png" }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      
      {/* HEADER FIXO DO TOPO */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="mx-auto flex max-w-7xl h-24 items-center justify-between px-6 lg:px-8">
          <div className="flex items-center py-2">
            <img 
              src="https://www.ufsm.br/app/uploads/sites/884/2023/09/Logo-megatecnologia-11-1-300x93.png" 
              alt="Megatecnologia Logo" 
              className="h-16 w-auto object-contain block"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#valores" className="relative py-2 text-sm font-extrabold text-slate-600 hover:text-slate-900 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100">
              Valores
            </a>
            <a href="#diferenciais" className="relative py-2 text-sm font-extrabold text-slate-600 hover:text-slate-900 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100">
              Diferenciais
            </a>
            <a href="#solucoes" className="relative py-2 text-sm font-extrabold text-slate-600 hover:text-slate-900 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-200 hover:after:origin-bottom-left hover:after:scale-x-100">
              Soluções
            </a>
            <a href="secao.htm?secao=269" className="inline-flex h-11 items-center justify-center rounded-lg bg-orange-500 px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600 transition-all active:scale-95">
              ÁREA DO CLIENTE
            </a>
          </nav>

          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 hover:text-slate-900 md:hidden" aria-label="Menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="border-b border-slate-200 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#valores" className="text-base font-bold text-slate-600 py-2" onClick={() => setIsOpen(false)}>Valores</a>
              <a href="#diferenciais" className="text-base font-bold text-slate-600 py-2" onClick={() => setIsOpen(false)}>Diferenciais</a>
              <a href="#solucoes" className="text-base font-bold text-slate-600 py-2" onClick={() => setIsOpen(false)}>Soluções</a>
              <a href="secao.htm?secao=269" className="w-full text-center py-3 rounded-lg bg-orange-500 text-sm font-bold text-white">
                ÁREA DO CLIENTE
              </a>
            </div>
          </div>
        )}
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="overflow-x-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-orange-500/5 via-blue-500/5 to-transparent blur-3xl pointer-events-none" />

        {/* HERO SECTION */}
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
              Desde 2003 oferecendo aos nossos clientes soluções customizadas e inteligentes, com quality e confiabilidade.
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

        {/* PILARES / VALORES */}
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

        {/* DIFERENCIAIS */}
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

        {/* BENEFÍCIOS */}
        <section className="py-20 bg-white border-y border-slate-200 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* COLUNA DA ESQUERDA: TEXTO E LISTA COM ÍCONES */}
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
                      <p className="text-base font-semibold text-slate-990 leading-snug">
                        {item}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUNA DA DIREITA: COMPOSIÇÃO VISUAL CORPORATIVA */}
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

        {/* SOLUÇÕES */}
        <section id="solucoes" className="py-20 lg:py-28 px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">Nossas soluções</h2>
            <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
              Produtos na área de Energia e Agronegócios, soluções customizadas para otimização dos resultados!
            </p>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-left transition-all duration-300 hover:border-orange-500/30 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900 tracking-tight">Sistemas de Informação voltados à Concessionárias de Energia (P&D)</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">Engenharia de software aplicada para atender os critérios regulatórios e de pesquisa do setor elétrico.</p>
              </div>

              <div className="relative group overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 text-left transition-all duration-300 hover:border-orange-500/30 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900 tracking-tight">Sistemas de Informação sob medida para Laboratórios Agronômicos</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">Arquiteturas robustas e precisas customizadas sob medida para a dinâmica de análises em larga escala.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTES */}
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

        {/* FOOTER */}
        <footer id="contato" className="bg-slate-900 text-slate-400 border-t border-slate-800 px-6 py-12 lg:px-8 text-sm">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 space-y-4">
              <div className="text-lg font-bold text-white tracking-tight">Megatecnologia</div>
              <p className="leading-relaxed max-w-md text-slate-400">
                A Megatecnologia é uma empresa gaúcha, especialista em desenvolver software por meio da cocriação para os setores de energia e agronegócios. Atua há mais de 10 anos em projetos de pesquisa e desenvolvimento em parceria com Instituições Públicas e Privadas.
              </p>
              <p className="leading-relaxed max-w-md text-slate-500 text-xs">
                Descubra como sua empresa pode ampliar seus negócios de forma recorrente através de nossas soluções em sistemas de informação.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">Contato Corporativo</div>
              <p className="hover:text-white transition-colors">comercial@megatecnologia.com.br</p>
              <p className="hover:text-white transition-colors">(55) 3221 6451</p>
              <div className="pt-2">
                <a href="https://wa.me/555532216451" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors">
                  <span>CHAMAR NO WHATSAPP</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-3 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">Legal e Segurança</div>
              <p className="text-xs text-slate-500">2026 © Megatecnologia<br />Todos os direitos reservados.</p>
              <p className="text-xs hover:text-white transition-colors cursor-pointer">Política de Privacidade</p>
              <p className="text-xs hover:text-white transition-colors cursor-pointer">Política de Cookies</p>
              <div className="pt-1">
                <a href="secao.htm?secao=90" className="text-xs text-slate-500 hover:text-white underline underline-offset-4">Acesso Interno</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}