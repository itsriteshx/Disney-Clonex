import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MovieRow from "../components/MovieRow";

function Sports() {
  return (
    <div className="bg-brand-dark min-h-screen relative font-body page-transition">
      <Header />
      
      {/* Live Match Hero */}
      <section className="relative w-full h-[520px] bg-black">
        <img 
          src="https://images.slivcdn.com/landscape_thumb/cricket_landscape_thumb.jpg?h=720&w=1280&q=high&m=1" 
          alt="Live Match" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center px-[4%]">
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-black animate-blink">LIVE</span>
              <span className="text-white/60 font-bold">Border-Gavaskar Trophy</span>
            </div>
            <h1 className="text-6xl font-black text-white mb-6 tracking-tighter">India vs Australia</h1>
            <div className="flex items-center gap-10 mb-10">
              <div className="text-center">
                <div className="text-4xl font-black text-white">128/3</div>
                <div className="text-text-gray font-bold text-sm">Overs: 24.2</div>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="text-center">
                <div className="text-4xl font-black text-white uppercase">IND leads by 42</div>
                <div className="text-text-gray font-bold text-sm">Session 2</div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-white text-black px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all">
                WATCH LIVE
              </button>
              <div className="flex flex-col justify-center">
                <span className="text-text-gray text-xs font-black uppercase tracking-widest mb-1">Starts in</span>
                <span className="text-white font-black text-xl tracking-widest">02 : 14 : 55</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="pb-20">
        <MovieRow title="Cricket" type="sports" />
        <MovieRow title="Football" type="sports" />
        <MovieRow title="Kabaddi" type="sports" />
        <MovieRow title="Badminton" type="sports" />
      </main>

      <Footer />
    </div>
  );
}

export default Sports;
