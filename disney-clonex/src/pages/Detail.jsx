import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { HiPlay, HiPlus } from "react-icons/hi2";

function Detail() {
  const { id } = useParams();

  return (
    <div className="bg-brand-dark min-h-screen relative font-body">
      <Header />
      
      {/* Cinematic Background */}
      <div className="fixed top-0 right-0 w-full h-screen z-0">
        <img 
          src={`https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg`} 
          alt="bg" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      </div>

      {/* Cinematic Content */}
      <main className="relative z-10 pt-40 px-[4%] max-w-[1600px] mx-auto min-h-screen">
        <div className="max-w-4xl animate-fade-in">
          <h1 className="text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
            MOVIE TITLE {id}
          </h1>
          <div className="flex items-center gap-4 mb-8 text-white/60 font-semibold tracking-wide">
            <span className="bg-white/10 px-3 py-1 rounded text-sm text-white border border-white/10">U/A 13+</span>
            <span>2024</span>
            <span>•</span>
            <span>2h 15m</span>
            <span>•</span>
            <span className="text-brand-purple">Action, Fantasy</span>
          </div>
          
          <p className="text-2xl leading-relaxed text-[#ddd] mb-12 max-w-2xl drop-shadow-md">
            Experience the breathtaking journey of our heroes as they embark on an odyssey 
            across mystical lands. A visual masterpiece that redefines modern cinema with 
            stunning effects and a gripping narrative.
          </p>

          <div className="flex items-center gap-5">
            <button className="pill-btn pill-btn-primary scale-110">
              <HiPlay className="text-3xl" /> WATCH NOW
            </button>
            <button className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-full hover:bg-white/20 transition-all text-2xl text-white">
              <HiPlus />
            </button>
          </div>
        </div>
        
        <div className="mt-40">
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Detail;
