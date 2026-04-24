import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeBrand, setActiveBrand] = useState('all');
  const [watchlist, setWatchlist] = useState(() => {
    const saved = localStorage.getItem('disney_watchlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [modalState, setModalState] = useState({
    isOpen: false,
    movie: null,
    type: 'detail' // 'detail' or 'trailer'
  });

  useEffect(() => {
    localStorage.setItem('disney_watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (movie) => {
    setWatchlist(prev => {
      const exists = prev.find(m => m.id === movie.id);
      if (exists) {
        return prev.filter(m => m.id !== movie.id);
      }
      return [...prev, movie];
    });
  };

  const openModal = (movie, type = 'detail') => {
    setModalState({ isOpen: true, movie, type });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <AppContext.Provider value={{
      searchQuery,
      setSearchQuery,
      activeBrand,
      setActiveBrand,
      watchlist,
      toggleWatchlist,
      modalState,
      openModal,
      closeModal
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
