import React from 'react';
import { useAppContext } from '../context/AppContext';

function GlobalModal() {
  const { modalState, closeModal, toggleWatchlist, watchlist } = useAppContext();
  const { isOpen, movie, type } = modalState;

  if (!isOpen || !movie) return null;

  const isWatched = watchlist.find(m => m.id === movie.id);

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md"
        onClick={closeModal}
      />
      
      {/* Modal Content */}
      <div className="relative bg-brand-navy w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row h-full max-h-[80vh] animate-modal-up">
        
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute top-6 right-6 z-50 bg-black/40 hover:bg-black/60 w-10 h-10 rounded-full text-white text-2xl flex items-center justify-center transition-all"
        >
          ✕
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
            {/* Left side: Poster/Backdrop */}
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src={movie.backdrop || movie.poster} 
                alt={movie.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Right side: Info */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4">
                {movie.brand} • {movie.type}
              </span>
              <h2 className="text-5xl font-bold text-white mb-6 font-heading tracking-wider">
                {movie.title}
              </h2>
              <div className="flex items-center gap-4 mb-8">
                <span className="bg-brand-gold text-brand-dark px-3 py-1 rounded font-bold text-sm">
                  ★ {movie.rating}
                </span>
                <span className="text-white/60 text-sm font-semibold">2024 • 2h 45m • 4K</span>
              </div>
              <p className="text-white/70 text-lg leading-relaxed mb-10 font-body">
                {movie.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => openModal(movie, 'trailer')}
                  className="bg-white text-brand-dark hover:bg-brand-gold px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all transform active:scale-95"
                >
                  <span className="text-xl">▶</span> PLAY TRAILER
                </button>
                <button 
                  onClick={() => toggleWatchlist(movie)}
                  className={`px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all border transform active:scale-95 ${
                    isWatched 
                    ? "bg-green-500/20 border-green-500 text-green-500" 
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  }`}
                >
                  {isWatched ? "✓ WATCHLISTED" : "+ WATCHLIST"}
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
