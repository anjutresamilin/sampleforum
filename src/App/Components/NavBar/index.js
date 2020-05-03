import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme.secondaryTextColor};
`;

const index = () => {
  return <NavWrapper />;
};

export default index;
