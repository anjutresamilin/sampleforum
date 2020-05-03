import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./Styles/GlobalStyles";
import { Theme } from "./Styles/Theme";
import PostsListContainer from "./Containers/Posts/PostList/PostsListContainer";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <PostsListContainer />
    </ThemeProvider>
  );
}

export default App;
