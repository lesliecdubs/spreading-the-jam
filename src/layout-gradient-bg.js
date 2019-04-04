import React, { Fragment } from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  background: linear-gradient(#4eb3a7, #468dad);
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  position: relative;
  width: 100vw;
`;

const Footer = styled.footer`
  align-items: center;
  background: #468dad;
  color: white;
  display: flex;
  font-size: 18px;
  justify-content: space-between;
  padding: 30px 100px;
  text-align: right;
  width: 100vw;
`;

const TextLink = styled.a`
  color: white;
  opacity: 0.8;
  text-decoration: none;

  span {
    position: relative;

    &::after {
      background-color: white;
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

const LayoutGradientBg = props => {
  return (
    <Fragment>
      <Wrapper>{props.children}</Wrapper>
      <Footer>
        <a href="https://netlify.com" target="_blank">
          <img src="https://cdn.netlify.com/1ed63b33731af09d707f4ecad8e805df905104ec/9f1a1/img/press/logos/full-logo-dark-simple.svg" />
        </a>
        <TextLink href="https://twitter.com/lesliecdubs" target="_blank">
          <span>@lesliecdubs</span>
        </TextLink>
      </Footer>
    </Fragment>
  );
};

export default LayoutGradientBg;
