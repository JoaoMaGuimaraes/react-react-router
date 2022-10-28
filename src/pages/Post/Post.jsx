import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Post = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, [id]);

  return (
    <div>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <p>wrote by {post?.userId}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Post;
