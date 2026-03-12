import witImg from "../Assets/project-1.png";
import journeyImg from "../Assets/project-2.png";

function Project() {
  const projects = [
    {
      title: "Workintech",
      image: witImg,
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tags: ["react", "redux", "vercel"],
      site: "#",
      github: "#",
    },
    {
      title: "Journey",
      image: journeyImg,
      description:
        "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
      tags: ["react", "redux", "vercel"],
      site: "#",
      github: "#",
    },
  ];

  return (
    <section className="w-full bg-[#CBF281] dark:bg-[#0f4539] px-6 py-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-bold text-[#4832D3] dark:text-[#ffbc42] md:text-4xl">
          Projects
        </h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-xl bg-white dark:bg-black shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]">
                <div className="h-55 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h4 className="mb-3 text-2xl font-bold text-[#4832D3] dark:text-[#ffbc42]">{project.title}</h4>
                  <p className="mb-4 text-sm leading-6 text-gray-600 dark:text-[#FFF8DE] md:text-base">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                    key={tag}
                    className="rounded-full bg-[#4832D3] dark:bg-[#FFF8DE] px-3 py-1 text-xs font-medium text-white dark:text-black"
                    >{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4 text-sm font-medium text-[#4832D3] underline">
                  <a href={project.site} target="_blank" rel="noreferrer" className="dark:text-[#ffbc42]">View Site</a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="dark:text-[#ffbc42]">Github</a>
                </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
