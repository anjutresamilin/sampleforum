import React from "react";

import { getPostsUrl } from "../../../helpers/apiUrl";
import useRequest from "../../../Hooks/useRequest";

const PostsListContainer = () => {
  const [posts, loading] = useRequest({
    url: getPostsUrl(),
    method: { method: "GET" },
  });

  console.log("posts", posts);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((post) => (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </>
  );
};

export default PostsListContainer;
