'use client';
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
  );
}