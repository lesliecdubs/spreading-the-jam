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

  p {
    margin: 16px 0;
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

  .split {
    display: inline-block;
    width: 35%;
  }
`;

const LayoutBlank = props => {
  return (
    <Fragment>
      <Wrapper>{props.children}</Wrapper>
    </Fragment>
  );
};

export default LayoutBlank;
