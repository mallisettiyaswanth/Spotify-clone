import { createContext, useContext, useRef } from 'react';
const playerContext = createContext();

export const usePlayerContext = () => useContext(playerContext);

export const PlayerProvider = ({ children }) => {
  let musicPlayerRef = useRef(null);

  function handleMusicPlayerRef(musicPlayerReference) {
    console.log(musicPlayerReference);
    musicPlayerRef.current = musicPlayerReference;
  }

  return (
    <playerContext.Provider value={{ musicPlayerRef, handleMusicPlayerRef }}>
      {children}
    </playerContext.Provider>
  );
};
