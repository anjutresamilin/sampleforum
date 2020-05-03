import React from "react";

const PostViewContainer = ({ match }) => {
  return <h1>{match?.params?.postId}</h1>;
};

export default PostViewContainer;
