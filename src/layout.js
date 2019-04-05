import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  background: white;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li {
    color: black;
  }

  ul,
  ol {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    font-size: 38px;
    margin: 25px 0;
    font-family: Roboto, sans-serif;
  }

  small {
    font-size: 18px;
    font-style: italic;
  }

  a {
    color: #00c2b2;
  }

  hr {
    margin: 50px 0 30px;
  }

  .image {
    margin-top: 40px;
  }

  .highlight {
    color: #00c2b2;
  }

  .logo {
    height: 100px;
    width: auto;
    margin: 0 20px;
  }
`;

const Footer = styled.footer`
  align-items: center;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
`;

const TextLink = styled.a`
  color: black;
  opacity: 0.8;
  text-decoration: none;

  span {
    position: relative;

    &::after {
      background-color: black;
      bottom: -1px;
      content: "";
      height: 1px;
      position: absolute;
      right: 0;
      width: 91px;
      transition: all 0.15s;
    }
  }

  &:hover {
    span::after {
      transform: scaleX(0);
    }
  }
`;

const Layout = props => {
  return (
    <Fragment>
      <Wrapper>{props.children}</Wrapper>
      <Footer>
        <a href="https://netlify.com" target="_blank">
          <img src="https://cdn.netlify.com/15ecf59b59c9d04b88097c6b5d2c7e8a7d1302d0/1b6d6/img/press/logos/full-logo-light.svg" />
        </a>
        <TextLink href="https://twitter.com/lesliecdubs" target="_blank">
          <span>@lesliecdubs</span>
        </TextLink>
      </Footer>
    </Fragment>
  );
};

export default Layout;
