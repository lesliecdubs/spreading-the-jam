import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

const Footer = styled.footer`
  border-top: 1px solid #dc5f53;
  color: white;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
`;

const Layout = ({ children }) => (
  <Fragment>
    <Wrapper>{children}</Wrapper>
    <Footer>
      <span>Netlify</span>
      <span>@lesliecdubs</span>
    </Footer>
  </Fragment>
);

export default Layout;
