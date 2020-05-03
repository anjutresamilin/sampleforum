import React from "react";

const PostCard = ({ id, title, body, username }) => {
  return (
    <div key={id}>
      <h2>{title}</h2>
      <h3>{username}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
