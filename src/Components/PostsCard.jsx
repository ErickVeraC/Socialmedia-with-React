import { getPosts } from "../data/api";
import { useEffect, useState } from "react";

export default function PostsCard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch((error) => console.error("[get error to receive posts]", error));
  }, []);

  return (
    <article>
      {posts.map((post, idx) => {
        return (
          <article id={`post-${post.id}`} key={`post-${idx}`} className="">
            <img src={post.image} alt={post.title} />
            <div>
              <h2>{post.title}</h2>
              <div>
                <span>{post.tags}</span>
              </div>
              <h5>{post.user}</h5>
              <p>{post.created_at}</p>
              <p>{post.body}</p>
            </div>
          </article>
        );
      })}
    </article>
  );
}
