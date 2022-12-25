import { Post } from "~/stores/blog-posts";
import { formatDate } from "../../sidebar/utils";
import TagItem from "./TagItem";

const PostItem: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <li>
      <a
        href={post.url}
        rel="noreferrer"
        target="_blank"
        className="px-4 py-2 h-full block bg-background-100 border-4 rounded-lg border-background-200 no-underline text-white hover:opacity-90 transition-all"
      >
        <h3 className="text-lg font-bold text-primary-100">{post.title}</h3>
        <span className="text-sm inline-block text-highlight-yellow">
          {formatDate(new Date(post.published_at))}
        </span>
        <ul>
          {post.tag_list.map((tag) => (
            <TagItem value={tag} key={tag} />
          ))}
        </ul>
      </a>
    </li>
  );
};

export default PostItem;
