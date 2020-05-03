import React from "react";

import { getPostsUrl } from "../../../helpers/apiUrl";
import useRequest from "../../../Hooks/useRequest";
import Spinner from "../../../Components/Spinner";

const PostsListContainer = () => {
  const [posts, loading] = useRequest({
    url: getPostsUrl(),
    method: { method: "GET" },
  });

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default PostsListContainer;
