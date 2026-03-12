import { createContext, useContext, useState, useEffect } from "react"

const AppContext = createContext()

export function AppProvider({ children }) {

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