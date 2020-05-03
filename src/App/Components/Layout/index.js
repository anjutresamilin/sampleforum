import React from "react";

import NavBar from "../NavBar";
import ContentWrapper from "../ContentWrapper";
import SecondaryMenu from "../SecondaryMenu";

const index = ({ children }) => {
  return (
    <>
      <NavBar />
      {/* <SecondaryMenu /> */}
      <ContentWrapper>{children}</ContentWrapper>
    </>
  );
};

export default index;
