export const getPostsUrl = () => `${process.env.REACT_APP_API_URL}/posts`;
export const getUsersUrl = () => `${process.env.REACT_APP_API_URL}/users`;
export const getSingleUserUrl = (userId) =>
  `${process.env.REACT_APP_API_URL}/users/${userId}`;
