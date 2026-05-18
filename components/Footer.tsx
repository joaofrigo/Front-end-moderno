
export default function Footer() {
  return (
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
  );
}