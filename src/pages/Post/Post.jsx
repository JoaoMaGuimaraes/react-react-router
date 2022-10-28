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
            <button onClick={() => navigate(-1)}>BACK</button>
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
            <h6>wrote by {post?.userId}</h6>
        </div>
    );
};

export default Post;
