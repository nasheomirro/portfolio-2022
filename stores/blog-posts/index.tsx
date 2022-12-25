import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useRef,
} from "react";

import { useStore } from "zustand";
import createStore, { StoreApi } from "zustand/vanilla";
import { Action, ContextHook } from "~/utils";

// Look at the response schema on the API documentation
// https://developers.forem.com/api/v1#tag/articles/operation/getArticles
export type Post = {
  url: string;
  description: string;
  title: string;
  published_at: string;
  tag_list: string[];
  id: string;
};

export type Posts = Post[];

type BlogPostStore = {
  current: Posts | null;
  setCurrent: Action<Posts>;
};

const createBlogPostStore = (posts: Posts | null) =>
  createStore<BlogPostStore>()((set) => ({
    current: posts,
    setCurrent: (payload) => {
      set({ current: payload });
    },
  }));

export const blogPostContext = createContext<StoreApi<BlogPostStore>>(
  {} as any
);
export const useBlogPostStore: ContextHook<BlogPostStore> = (
  selector,
  equalityFn?
) => {
  const store = useContext(blogPostContext);
  return useStore(store, selector, equalityFn);
};

export const BlogPostProvider: React.FC<
  PropsWithChildren<{ value: Posts | null }>
> = ({ value, children }) => {
  const store = useRef(createBlogPostStore(value)).current;
  return (
    <blogPostContext.Provider value={store}>
      {children}
    </blogPostContext.Provider>
  );
};

/**
 * HOC for getting the current post object, a Fallback component must be provided if when
 * posts failed to fetch.
 */
export const withBlogPostProps = (
  Component: React.FC<{ posts: Posts }>,
  Fallback: React.FC
) => {
  const _Component: React.FC = () => {
    const posts = useBlogPostStore((state) => state.current);
    if (posts === null) {
      return <Fallback />;
    }
    return <Component posts={posts} />;
  };
  return _Component;
};
