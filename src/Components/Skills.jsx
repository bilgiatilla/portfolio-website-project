import jsLogo from "../Assets/Icons/js-logo.png";
import reactLogo from "../Assets/Icons/react-logo.png";
import reduxLogo from "../Assets/Icons/redux-logo.png";
import nodeLogo from "../Assets/Icons/node-logo.png";
import vsCodeLogo from "../Assets/Icons/vs-code-logo.png";
import figmaLogo from "../Assets/Icons/figma-logo.png";

function Skills() {
   const skills = [
    { name: "JAVASCRIPT", icon: jsLogo },
    { name: "REACT", icon: reactLogo },
    { name: "REDUX", icon: reduxLogo },
    { name: "NODE", icon: nodeLogo },
    { name: "VS CODE", icon: vsCodeLogo },
    { name: "FIGMA", icon: figmaLogo },
  ];
  return (
    <section className="w-full bg-[#f5f5f5] px-6 py-12 md:px-12 lg:px-50">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr] md:items-start">
          <h2 className="text-[#4832D3] text-3xl font-bold">Skills</h2>
          <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {skills.map((skill) => (
              <li key={skill.name}
                className="flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white shadow-md">
                    <img
                    src={skill.icon}
                    alt={skill.name}
                    className="size-500 object-contain"
                  />
                  </div>
                  <span className="text-sm font-medium tracking-wide text-gray-500 sm:text-base">
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
