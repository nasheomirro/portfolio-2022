import ProjectItem from "./ProjectItem";

const Projects: React.FC = () => {
  return (
    <div className="mb-20">
      <h2 className="text-xl md:text-2xl font-bold text-primary-100 mb-4">
        Projects
      </h2>
      <p className="mb-4">
        <a
          className="underline text-highlight-yellow"
          href="https://github.com/nasheomirro"
          target={"_blank"}
          rel="noreferrer"
        >
          I have a github you know
        </a>
        , but might as well show some of them here:
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 auto-rows-uniform gap-2  ">
        <ProjectItem
          title="react-polymorphed"
          url="https://github.com/nasheomirro/react-polymorphed"
          tags={["react", "typescript", "npm-package"]}
        >
          A set of types to help easily create fast polymorphic components
        </ProjectItem>
        <ProjectItem
          title="wuuber"
          url="https://github.com/nasheomirro/wuuber"
          tags={["typescript", "npm-package"]}
        >
          a small set of type-safe utility functions to create action-based
          logic.
        </ProjectItem>
        <ProjectItem
          title="your-world"
          url="https://github.com/nasheomirro/your-world-v2"
          tags={["react", "zustand", "idb", "tiptap"]}
        >
          A scuffed note-editing app built with react and typescript,
          bootstrapped with vite.
        </ProjectItem>
        <ProjectItem
          title="this website"
          tags={["react", "next", "zustand"]}
          url="https://github.com/nasheomirro/portfolio-2022"
        >
          Look around! Pet the doggo&apos;s bussom.
        </ProjectItem>
      </ul>
    </div>
  );
};

export default Projects;
