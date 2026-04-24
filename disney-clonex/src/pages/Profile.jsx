import React from "react";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import GlobalModal from "../components/GlobalModal";
import { HiPlus } from "react-icons/hi2";

function Profile() {
  const { watchlist } = useAppContext();

  return (
    <div className="bg-brand-dark min-h-screen relative font-body page-transition">
      <Header />
      
      <main className="pt-32 px-[4%] max-w-[1600px] mx-auto min-h-screen">
        <div className="mb-16 animate-fade-in">
          <h1 className="text-6xl font-extrabold text-white mb-4 tracking-tight">My Space</h1>
          <p className="text-text-gray text-xl">Manage your watchlist and account settings</p>
        </div>

        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl font-extrabold text-white uppercase tracking-widest">My Watchlist</h2>
            <span className="bg-brand-purple text-white px-3 py-1 rounded-full text-xs font-bold">
              {watchlist.length}
            </span>
          </div>

          {watchlist.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {watchlist.map((movie) => (
                <div key={movie.id} className="animate-fade-in">
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-24 text-center backdrop-blur-xl">
              <div className="text-7xl mb-8 flex justify-center text-white/10">
                <HiPlus />
              </div>
              <h3 className="text-3xl font-extrabold text-white mb-3">Your watchlist is empty</h3>
              <p className="text-text-gray mb-10 text-lg">Add movies and shows to keep track of what you want to watch.</p>
              <button 
                onClick={() => window.location.href = '/home'}
                className="bg-brand-purple hover:scale-105 text-white px-12 py-4 rounded-xl font-extrabold transition-all shadow-lg shadow-brand-purple/20"
              >
                DISCOVER CONTENT
              </button>
            </div>
          )}
        </section>

        <Footer />
      </main>
      
      <GlobalModal />
    </div>
  );
}

export default Profile;
