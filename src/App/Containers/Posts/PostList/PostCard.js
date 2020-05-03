import React from "react";
import styled from "styled-components";

const Post = styled.div`
  width: 40rem;
  height: 25rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 3rem;
`;

const PostTitle = styled.h4`
  color: ${(props) => props.theme.primaryTextColor};
  font-size: 1.7rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

const PostUser = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.secondaryTextColor};
  cursor: pointer;
  letter-spacing: 1px;
  margin: 1rem 0;
`;

const PostBody = styled.p`
  font-size: 1.5rem;
`;

const PostCard = ({ id, title, body, username }) => {
  return (
    <Post key={id}>
      <PostTitle>{title}</PostTitle>
      <PostUser>{username}</PostUser>
      <PostBody>{body}</PostBody>
    </Post>
  );
};

export default PostCard;
