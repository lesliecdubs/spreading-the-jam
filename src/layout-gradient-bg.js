import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  background: linear-gradient(#4eb3a7, #468dad);
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

const Footer = styled.footer`
  background: #468dad;
  color: white;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
`;

const LayoutGradientBg = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>Netlify</span>
      <span>@lesliecdubs</span>
    </Footer>
  </Fragment>
);

export default LayoutGradientBg;
