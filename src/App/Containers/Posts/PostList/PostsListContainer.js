import React from "react";

import { getPostsUrl, getUsersUrl } from "../../../helpers/apiUrl";
import useRequest from "../../../Hooks/useRequest";
import Spinner from "../../../Components/Spinner";
import PostCard from "./PostCard";

const PostsListContainer = () => {
  const [posts, loading] = useRequest({
    url: getPostsUrl(),
    method: { method: "GET" },
  });
  const [users, userLoading] = useRequest({
    url: getUsersUrl(),
    method: { method: "GET" },
  });

  if (loading && userLoading) {
    return <Spinner />;
  }

  return (
    <>
      {posts.map((post) => {
        const user = users.find((user) => user.id === post.userId);
        return (
          <PostCard
            id={post.id}
            title={post.title}
            body={post.body}
            username={user?.username} //optional chaining operation
          />
        );
      })}
    </>
  );
};

export default PostsListContainer;
