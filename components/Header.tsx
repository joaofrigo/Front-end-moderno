'use client';
import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-[#030712]/70 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-6 lg:px-8">
        <div className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
          Megatecnologia
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#valores" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Valores</a>
          <a href="#diferenciais" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Diferenciais</a>
          <a href="#solucoes" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Soluções</a>
          <a href="secao.htm?secao=269" className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/30 transition-all active:scale-95">
            ÁREA DO CLIENTE
          </a>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-400 hover:text-white md:hidden" aria-label="Menu">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-b border-slate-800 bg-[#030712] px-6 py-4 md:hidden animate-fade-in">
          <div className="flex flex-col gap-4">
            <a href="#valores" className="text-base text-slate-400 py-2">Valores</a>
            <a href="#diferenciais" className="text-base text-slate-400 py-2">Diferenciais</a>
            <a href="#solucoes" className="text-base text-slate-400 py-2">Soluções</a>
            <a href="secao.htm?secao=269" className="w-full text-center py-3 rounded-lg bg-blue-600 text-sm font-semibold text-white">
              ÁREA DO CLIENTE
            </a>
          </div>
        </div>
      )}
    </header>
  );
}