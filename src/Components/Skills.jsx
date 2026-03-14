import jsLogo from "../Assets/Icons/js-logo.png";
import reactLogo from "../Assets/Icons/react-logo.png";
import reduxLogo from "../Assets/Icons/redux-logo.png";
import nodeLogo from "../Assets/Icons/node-logo.png";
import vsCodeLogo from "../Assets/Icons/vs-code-logo.png";
import figmaLogo from "../Assets/Icons/figma-logo.png";
import { translations } from "../Data/Translations";
import { useApp } from "../Context/AppContext";



function Skills() {
   const skills = [
    { name: "JAVASCRIPT", icon: jsLogo },
    { name: "REACT", icon: reactLogo },
    { name: "REDUX", icon: reduxLogo },
    { name: "NODE", icon: nodeLogo },
    { name: "VS CODE", icon: vsCodeLogo },
    { name: "FIGMA", icon: figmaLogo },
  ];
  const {language} = useApp();
  const t = translations[language];

  return (
    <section className="w-full dark:bg-[#0f4539] px-6 py-12 md:px-12 lg:px-24" data-cy="skills-section">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-10 text-center md:grid md:gap-8 md:grid-cols-[180px_1fr] md:items-start">
          <h2 className="text-[#4832D3] dark:text-[#ffbc42] text-4xl font-bold ">{t.skillsText}</h2>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 ">
            {skills.map((skill) => (
              <li key={skill.name}
                className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md">
                    <img
                    src={skill.icon}
                    alt={skill.name}
                    className="size-500 object-contain"
                  />
                  </div>
                  <span className="text-sm font-medium tracking-wide text-gray-500 dark:text-[#FFF8DE] sm:text-base">
                  {skill.name}
                </span>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
