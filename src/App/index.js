import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./Styles/GlobalStyles";
import { Theme } from "./Styles/Theme";
import PostsListContainer from "./Containers/Posts/PostList/PostsListContainer";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <PostsListContainer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
