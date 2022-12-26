import { Posts, withBlogPostProps } from "~/stores/blog-posts";
import LongDoggo from "./LongDoggo";
import PostItem from "./PostItem";

const Posts: React.FC<{ posts: Posts }> = ({ posts }) => {
  return (
    <div className="mb-32">
      <h2 className="text-xl md:text-2xl font-bold text-primary-100 mb-4">
        My Recent Posts
      </h2>
      <p>
        I like to write about stuff sometimes, all of these are hosted on
        DEV.to:
      </p>
      <ul className="grid auto-rows-uniform gap-2 my-8 relative">
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
        <LongDoggo />
      </ul>
    </div>
  );
};

export default withBlogPostProps(Posts, () => (
  <div className="">
    {/* <p>
      Huh, that&apos;s weird, DEV.to API is currently down at the moment, If you
      reaaally want to see my blog posts you can check my profile, or try
      hitting that refresh button
    </p> */}
  </div>
));
