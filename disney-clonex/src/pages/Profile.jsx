import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";
import { useAppContext } from "../context/AppContext";
import GlobalModal from "../components/GlobalModal";

function Profile() {
  const { watchlist } = useAppContext();

  return (
    <div className="bg-brand-dark min-h-screen relative flex">
      <Sidebar />
      <div className="flex-1 ml-20">
        <Header />
        <main className="px-10 py-12 max-w-[1600px] mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl font-bold text-white mb-4 font-heading tracking-wider">My Space</h1>
            <p className="text-white/50 text-xl font-body">Manage your watchlist and account settings</p>
          </div>

          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-white font-heading tracking-widest uppercase">My Watchlist</h2>
              <span className="bg-brand-blue text-white px-3 py-1 rounded-full text-xs font-bold">
                {watchlist.length}
              </span>
            </div>

            {watchlist.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                {watchlist.map((movie) => (
                  <div key={movie.id} className="animate-fade-in">
                    <MovieCard movie={movie} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-20 text-center">
                <div className="text-6xl mb-6">➕</div>
                <h3 className="text-2xl font-bold text-white mb-2">Your watchlist is empty</h3>
                <p className="text-white/40 mb-8">Add movies and shows to keep track of what you want to watch.</p>
                <button 
                  onClick={() => window.location.href = '/home'}
                  className="bg-brand-blue hover:bg-brand-gold hover:text-brand-dark text-white px-10 py-4 rounded-xl font-bold transition-all"
                >
                  DISCOVER CONTENT
                </button>
              </div>
            )}
          </section>

          <Footer />
        </main>
      </div>
      <GlobalModal />
    </div>
  );
}

export default Profile;
