import { createContext, useContext, useState,useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(()=>{
    const themeFromLS = localStorage.getItem('theme')
    return themeFromLS || 'light'

  }); // Initial theme state

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };
  
  const updateBodyTheme = (theme) => {

    const bodyElementClassList = window.document.body.classList;
    if(theme === "light"){
        bodyElementClassList.remove('dark')
    }else{
        bodyElementClassList.add('dark')
    }
  }
  useEffect(()=>{
    updateBodyTheme(theme)
    localStorage.setItem("theme", theme);
  },[theme])
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
