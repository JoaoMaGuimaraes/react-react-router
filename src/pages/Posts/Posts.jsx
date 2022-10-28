import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Posts = () => {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((res) => setPosts(res));
            console.log(posts)
    }, []);
    return (
        <div>
            <button onClick={() => navigate(+1)}>next</button>
            <h2>All Posts:</h2>
            <h5>(Pick one)</h5>
            {posts.map((post) => {
                return (
                    <Link key={post.id} to={`${post.id}`}>
                        <p>{post.title}</p>
                    </Link>
                );
            })}
            <button onClick={() => navigate(+1)}>Next</button>
        </div>
    );
};

export default Posts;
