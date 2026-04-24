import React from 'react';
import { useAppContext } from '../context/AppContext';
import { HiXMark, HiPlay, HiPlus, HiCheck, HiShare } from "react-icons/hi2";
import { AiFillStar } from "react-icons/ai";

function GlobalModal() {
  const { modalState, closeModal, toggleWatchlist, watchlist, openModal } = useAppContext();
  const { isOpen, movie, type } = modalState;

  if (!isOpen || !movie) return null;

  const isWatched = watchlist.find(m => m.id === movie.id);

  return (
    <div className="fixed inset-0 z-[2000] flex items-end justify-center p-0 md:p-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/90 backdrop-blur-xl animate-fade-in"
        onClick={closeModal}
      />
      
      {/* Modal Content - Slide Up */}
      <div className="relative bg-brand-dark w-full max-w-7xl h-[85vh] rounded-t-[40px] overflow-hidden shadow-2xl border-t border-white/10 animate-modal-up flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-8 right-8 z-[2100] bg-white/10 hover:bg-white/20 w-12 h-12 rounded-full text-white text-2xl flex items-center justify-center transition-all backdrop-blur-md"
        >
          <HiXMark />
        </button>

        {type === 'trailer' ? (
          <div className="w-full h-full bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`${movie.trailer}?autoplay=1`}
              title={movie.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <>
            {/* Left side: Huge Backdrop */}
            <div className="md:w-[65%] h-full relative">
              <img 
                src={movie.backdrop || movie.poster} 
                alt={movie.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
            </div>

            {/* Right side: Detailed Info */}
            <div className="md:w-[35%] p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-brand-purple text-white px-2 py-0.5 rounded text-[10px] font-black tracking-widest uppercase">
                  {movie.brand === 'hotstar' ? 'HOTSTAR SPECIAL' : 'PREMIUM'}
                </span>
                <span className="text-white/40 font-bold text-xs">2024 • 4K • HDR</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
                {movie.title}
              </h2>
              
              <div className="flex items-center gap-4 mb-8 text-white/60 font-bold">
                <span className="bg-white/10 px-2 py-0.5 rounded text-xs text-white border border-white/20">U/A 16+</span>
                <span className="flex items-center gap-1 text-brand-gold"><AiFillStar /> {movie.rating}</span>
                <span>•</span>
                <span>2h 15m</span>
              </div>
              
              <p className="text-text-gray text-lg leading-relaxed mb-10 font-medium">
                {movie.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => openModal(movie, 'trailer')}
                  className="flex items-center gap-3 bg-white text-black px-10 py-4 rounded-xl font-black text-lg hover:bg-gray-200 transition-all hover:scale-105"
                >
                  <HiPlay className="text-3xl" /> WATCH NOW
                </button>
                <button 
                  onClick={() => toggleWatchlist(movie)}
                  className={`flex items-center justify-center w-14 h-14 rounded-xl border-2 transition-all hover:scale-105 ${
                    isWatched ? "bg-brand-purple/20 border-brand-purple text-brand-purple" : "bg-white/5 border-white/20 text-white"
                  }`}
                  title="Add to Watchlist"
                >
                  {isWatched ? <HiCheck className="text-3xl" /> : <HiPlus className="text-3xl" />}
                </button>
                <button className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 border-2 border-white/20 text-white hover:bg-white/10 transition-all hover:scale-105">
                  <HiShare className="text-2xl" />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default GlobalModal;
