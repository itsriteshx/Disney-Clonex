import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function Detail() {
  const { id } = useParams();

  return (
    <div className="bg-brand-dark min-h-screen relative overflow-hidden flex">
      <Sidebar />
      <div className="flex-1 ml-20">
        <Header />
        
        {/* Cinematic Background */}
        <div className="fixed top-0 right-0 w-[85vw] h-screen -z-0">
          <img 
            src={`https://picsum.photos/1920/1080?random=${id}`} 
            alt="bg" 
            className="w-full h-full object-cover opacity-60" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
        </div>

        {/* Cinematic Content */}
        <div className="relative z-10 px-16 py-24 max-w-4xl">
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <h1 className="text-7xl font-extrabold mb-4 tracking-tighter drop-shadow-2xl uppercase">
              MOVIE TITLE {id}
            </h1>
            <div className="flex items-center gap-4 mb-8 text-white/60 font-semibold tracking-wide">
              <span className="bg-white/10 px-2 py-0.5 rounded text-xs">U/A 13+</span>
              <span>2024</span>
              <span>•</span>
              <span>2h 15m</span>
              <span>•</span>
              <span className="text-brand-blue">Action, Fantasy</span>
            </div>
            
            <p className="text-xl leading-relaxed text-white/80 mb-10 max-w-2xl drop-shadow-md">
              Experience the breathtaking journey of our heroes as they embark on an odyssey 
              across mystical lands. A visual masterpiece that redefines modern cinema with 
              stunning effects and a gripping narrative.
            </p>

            <div className="flex items-center gap-4">
              <button className="bg-white text-black px-12 py-4 rounded-xl font-black text-lg hover:scale-105 transition-all shadow-2xl shadow-white/10">
                WATCH NOW
              </button>
              <button className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl hover:bg-white/20 transition-all text-2xl">
                ➕
              </button>
              <button className="bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl hover:bg-white/20 transition-all text-2xl">
                🔗
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
