import React from "react";
import Articles from "./articles";
import styled from "styled-components";

const Heading = styled.h1`
  color: red;
  text-align: center;
`;

const Root = () => {
  return (
    <>
      <Heading>Hello world </Heading>
      <Articles></Articles>
    </>
  );
};

export default Root;
