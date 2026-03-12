import { useApp } from "../Context/AppContext";
import { translations } from "../Data/Translations";
import heroRight from "../Assets/hero-right.png";

function Header() {
  const { theme, toggleTheme, language, toggleLanguage } = useApp();
   const t = translations[language];
   translations
  return (
    <div>
      <header className="flex flex-col lg:flex-row h-auto lg:h-125">
        <section className="bg-[#4731D3] dark:bg-[#001f24] relative z-10 w-full lg:w-[74%] px-6 sm:px-10 lg:px-20 py-8 lg:py-6">
          <h2 className="text-[#CBF281] dark:text-[#ffbc42] text-xl sm:text-2xl font-bold font-family-inter">
            Atilla Bilgi
          </h2>
          <button
            onClick={toggleLanguage}
            type="button"
            className="absolute top-8 right-6 sm:right-10 lg:top-5 lg:right-10 font-bold text-[#FFF8DE] dark:text-[#ffbc42] text-xs sm:text-sm hover:opacity-80 transition hover:cursor-pointer"
          >
            {t.switchLanguage}
          </button>
          <div className="mt-12 lg:mt-8 h-full flex flex-col justify-start lg:justify-center">
            <div className="max-w-full lg:max-w-90 text-center lg:text-left">
              <p className="text-[#CBF281] dark:text-[#ffbc42]  text-3xl sm:text-4xl lg:text-[56px] font-bold leading-[1.05]">
                {t.heroTitle}
              </p>
              <p className="text-[#CBF281] dark:text-[#FFF8DE]  text-base sm:text-lg lg:text-[16px] mt-3 leading-[1.45]">
                {t.heroDescription}
                
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="text-[#4731D3] dark:text-[#001f24] cursor-pointer bg-white inline-flex items-center justify-center gap-2 rounded-sm text-sm font-semibold transition-colors hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-10 px-4">
                <i className="fa-brands fa-github"></i> Github
              </button>
              <button className="text-[#4731D3] dark:text-[#001f24] cursor-pointer bg-white inline-flex items-center justify-center gap-2 rounded-sm text-sm font-semibold transition-colors hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-10 px-4">
                <i className="fa-brands fa-linkedin-in"></i>LinkedIn
              </button>
              </div>
              </div>
              <div className="">
              <img
                src={heroRight}
                alt="working-pic"
                className="hidden lg:block absolute -right-45 top-1/2 -translate-y-1/2 w-62.5 xl:w-90 rounded-2xl object-bottom"
              ></img>
            </div>
          </div>
        </section>
        <section className="bg-[#CBF281] dark:bg-[#2f3b22] w-full lg:w-[26%] relative min-h-22.5 lg:h-125">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Tema değiştir"
            className="absolute top-6 left-6 sm:left-10 lg:top-5 lg:left-10 flex items-center gap-3"
          >
            <span
              className="relative inline-flex h-5 w-10 items-center rounded-full transition-all duration-300"
              style={{
                backgroundColor: theme === "dark" ? "#001f24" : "#ffffff",
              }}
            >
              <span
                className="h-3 w-3 rounded-full bg-[#FFE86E] shadow-md transition-all duration-300"
                style={{
                  transform:
                    theme === "dark" ? "translateX(24px)" : "translateX(4px)",
                }}
              />
            </span>
            <span className="text-sm font-bold text-[#4731D3] dark:text-[#ffbc42]">
              {t.darkMode}
            </span>
          </button>
        </section>
      </header>
    </div>
  );
}

export default Header;
