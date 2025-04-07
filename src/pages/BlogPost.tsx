import { useParams } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import posts from "../blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <MainLayout>
        <h1>404 - Post Not Found</h1>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <small>{post.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </MainLayout>
  );
};

export default BlogPost;
