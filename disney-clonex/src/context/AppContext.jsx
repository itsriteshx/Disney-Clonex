import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [watchlist, setWatchlist] = useState(() => {
    try {
      const saved = localStorage.getItem('hotstar_watchlist');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [modalState, setModalState] = useState({
    isOpen: false,
    movie: null,
    type: 'detail',
  });

  useEffect(() => {
    localStorage.setItem('hotstar_watchlist', JSON.stringify(watchlist));
  }, [watchlist]);

  const toggleWatchlist = (movie) => {
    setWatchlist(prev => {
      const exists = prev.find(m => m.id === movie.id);
      return exists ? prev.filter(m => m.id !== movie.id) : [...prev, movie];
    });
  };

  const openModal  = (movie, type = 'detail') => setModalState({ isOpen: true, movie, type });
  const closeModal = () => setModalState(s => ({ ...s, isOpen: false }));

  return (
    <AppContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        watchlist,
        toggleWatchlist,
        modalState,
        openModal,
        closeModal,
        showPlansModal,
        setShowPlansModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
