import { useParams } from "react-router-dom";

const BlogPost = () => {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
};

export default BlogPost;
