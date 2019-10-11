import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  background: rgb(1, 22, 39);
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

const LayoutDark = props => {
  return (
    <Fragment>
      <Wrapper>{props.children}</Wrapper>
    </Fragment>
  );
};

export default LayoutDark;
