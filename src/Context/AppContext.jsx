import { createContext, useContext, useState, useEffect, useRef } from "react"
import { toast } from "react-toastify";

    const AppContext = createContext();

export function AppProvider({ children }) {

  const darkNotify = () => toast(language === "tr" ? "Tema değişti" : "Theme changed");
  const langNotify = () => toast(language === "tr" ? "Dil değişti" : "Language changed");
  const firstThemeRender = useRef(true);
  const firstLangRender = useRef(true);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )

  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  )

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("language", language)
  }, [language])

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark")
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "tr" : "en")
  }
  useEffect(() => {
  if (firstThemeRender.current) {
    firstThemeRender.current = false;
    return;
  }
  darkNotify();
}, [theme]);

useEffect(() => {
  if (firstLangRender.current) {
    firstLangRender.current = false;
    return;
  }
  langNotify();
}, [language]);
  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        language,
        toggleLanguage
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useApp = () => useContext(AppContext)