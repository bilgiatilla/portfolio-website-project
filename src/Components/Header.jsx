import { useApp } from "../Context/AppContext";
import { translations } from "../Data/Translations";
import heroRight from "../Assets/hero-right.png";

function Header() {
  const { theme, toggleTheme, language, toggleLanguage } = useApp();
  const t = translations[language];
  
  return (
    <div>
      <header className="flex flex-row lg:flex-row h-auto lg:h-125">
        <section className="bg-[#4731D3] dark:bg-[#001f24] relative z-10 w-[82%] sm:w-[84%] lg:w-[74%] px-4 sm:px-6 md:px-10 lg:px-20 py-6 lg:py-6">
          <h2 className="text-[#CBF281] dark:text-[#ffbc42] text-lg sm:text-xl lg:text-2xl font-bold">
            Atilla Bilgi
          </h2>

          <button
            onClick={() => {
              toggleLanguage();
            }}
            type="button"
            data-cy="lang-toggle"
            className="absolute top-6.5 right-4 sm:right-6 lg:top-5 lg:right-10 font-bold text-[#CBF281] dark:text-[#ffbc42] text-[10px] sm:text-xs lg:text-sm hover:opacity-80 transition hover:cursor-pointer whitespace-nowrap"
          >
            {t.switchLanguage}
          </button>
          <div className="mt-12 sm:mt-14 lg:mt-8 h-full flex flex-col ml-20 justify-start lg:justify-center">
            <div className="max-w-full lg:max-w-90 px-6 py-8 lg:text-left">
              <p className="text-[#CBF281] dark:text-[#ffbc42] text-2xl sm:text-4xl lg:text-[56px] font-bold leading-[1.05]">
                {t.heroTitle}
              </p>

              <div className="mt-4 flex flex-col items-center gap-4 lg:block">
                <img
                  src={heroRight}
                  alt="working-pic"
                  className="w-280 sm:w-36 md:w-44 lg:hidden rounded-2xl object-cover"
                />

                <p className="text-[#CBF281] dark:text-[#FFF8DE] text-sm sm:text-base lg:text-[16px] mt-0 lg:mt-3 leading-[1.45]">
                  {t.heroDescription}
                </p>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/bilgiatilla"
                  target="_blank"
                  className="text-[#4731D3] dark:text-[#001f24] cursor-pointer bg-white inline-flex items-center justify-center gap-2 rounded-sm text-sm font-semibold transition-colors hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-10 px-4"
                >
                  <i className="fa-brands fa-github"></i> Github
                </a>

                <a
                  href="https://www.linkedin.com/in/atilla-bilgi/"
                  target="_blank"
                  className="text-[#4731D3] dark:text-[#001f24] cursor-pointer bg-white inline-flex items-center justify-center gap-2 rounded-sm text-sm font-semibold transition-colors hover:bg-[#F5F5F5] hover:text-[#06B6D4] h-10 px-4"
                >
                  <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                </a>
              </div>
            </div>

            <img
              src={heroRight}
              alt="working-pic"
              className="hidden lg:block absolute -right-45 top-1/2 -translate-y-1/2 w-62.5 xl:w-90 rounded-2xl object-bottom"
            />
          </div>
        </section>

        <section className="bg-[#4731D3] dark:bg-[#001f24] md:bg-[#CBF281] dark:md:bg-[#2f3b22] w-[18%] sm:w-[16%] lg:w-[26%] relative min-h-22.5 lg:h-125">
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Tema değiştir"
            className="absolute top-6 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 lg:top-5 lg:left-10 flex flex-col lg:flex-row items-center lg:items-center gap-1 lg:gap-3 hover:cursor-pointer"
          >
            <span
              className="size-0 relative inline-flex md:h-5 md:w-10 items-center rounded-full transition-all duration-300"
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

            <span className="text-[10px] sm:text-[11px] lg:text-sm font-bold text-[#CBF281] dark:text-[#ffbc42] md:text-[#4731D3] md:dark:text-[#ffbc42] text-center leading-tight whitespace-nowrap" data-cy="theme-toggle">
              {t.darkMode}
            </span>
          </button>
        </section>
      </header>
    </div>
  );
}

export default Header;
