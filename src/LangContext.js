import React, { useContext, useState } from 'react';

const LangContext = React.createContext();

export function useLang() {
  return useContext(LangContext);
}

export function LangProvider({ children }) {
  const [ruLang, setRuLang] = useState(true)
  
  function toggleLang() {
    setRuLang(prevRuLang => !prevRuLang)
  }
  
  const value = { ruLang, toggleLang }
  
  return (
  	<LangContext.Provider value={value}>
				{children}
		</LangContext.Provider>
  )
}