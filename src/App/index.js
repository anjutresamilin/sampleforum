import React, { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./Styles/GlobalStyles";
import { Theme } from "./Styles/Theme";
import Routes from "./Routes";
import Spinner from "./Components/Spinner";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Suspense fallback={<Spinner />}>
          <Routes />
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
