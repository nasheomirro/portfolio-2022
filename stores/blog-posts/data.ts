import { Posts } from ".";

export const fetchBlogPostData = async () => {
  const blogPostRes = await fetch(
    "https://dev.to/api/articles?username=nasheomirro&per_page=3"
  );
  const blogPostData = await blogPostRes.json();
  return blogPostData as Posts;
};
