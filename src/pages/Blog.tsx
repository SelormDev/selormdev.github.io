// src/pages/Blog.tsx

import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import posts from "../blog";

const Blog = () => {
  return (
    <MainLayout>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.excerpt}</p>
          <small>{post.date}</small>
        </div>
      ))}
    </MainLayout>
  );
};

export default Blog;
