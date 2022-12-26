import TagItem from "../Posts/TagItem";

type Props = {
  title: string;
  url: string;
  tags: string[];
  children?: string;
};

const ProjectItem: React.FC<Props> = ({ title, url, tags, children }) => {
  return (
    <li>
      <a
        href={url}
        rel="noreferrer"
        target="_blank"
        className="px-4 pt-2 pb-3 h-full block bg-background-100 border-4 rounded-lg border-background-200 no-underline text-white hover:opacity-90 transition-all"
      >
        <h3 className="text-lg font-bold text-primary-100">{title}</h3>
        <ul className="mb-2">
          {tags.map((tag) => (
            <TagItem value={tag} key={tag} />
          ))}
        </ul>
        {children ? <p className="text-sm opacity-70">{children}</p> : null}
      </a>
    </li>
  );
};

export default ProjectItem;
