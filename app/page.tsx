import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Valores from '@/components/Valores';
import Diferenciais from '@/components/Diferenciais';
import Beneficios from '@/components/Beneficios';
import Solucoes from '@/components/Solucoes';
import Clientes from '@/components/Clientes';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
      <Header />
      
      <div className="overflow-x-hidden relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-orange-500/5 via-blue-500/5 to-transparent blur-3xl pointer-events-none" />

        <Hero />
        <Valores />
        <Diferenciais />
        <Beneficios />
        <Solucoes />
        <Clientes />
        <Footer />
      </div>
    </div>
  );
}