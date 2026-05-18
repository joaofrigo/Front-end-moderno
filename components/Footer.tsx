import React from 'react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-[#02050e] border-t border-slate-900 px-6 py-12 lg:px-8 text-slate-400 text-sm">
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
          <div className="text-xs font-semibold uppercase tracking-wider text-white">Contato Corporativo</div>
          <p className="hover:text-white transition-colors">comercial@megatecnologia.com.br</p>
          <p className="hover:text-white transition-colors">(55) 3221 6451</p>
          <div className="pt-2">
            <a href="https://wa.me/555532216451" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-8.884 9.888-8.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>CHAMAR NO WHATSAPP</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-3 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-white">Legal e Segurança</div>
          <p className="text-xs text-slate-500">2026 © Megatecnologia<br />Todos os direitos reservados.</p>
          <p className="text-xs hover:text-white transition-colors cursor-pointer">Política de Privacidade</p>
          <p className="text-xs hover:text-white transition-colors cursor-pointer">Política de Cookies</p>
          <div className="pt-1">
            <a href="secao.htm?secao=90" className="text-xs text-slate-500 hover:text-white underline underline-offset-4">Acesso Interno</a>
          </div>
        </div>
      </div>
    </footer>
  );
}