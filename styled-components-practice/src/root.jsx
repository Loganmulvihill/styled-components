import React from "react";
import Articles from "./articles";
import styled from "styled-components";

const Heading = styled.h1`
  color: ${(props) => props.theme.freeSpeechBlue};
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px solid white;
  background-color: turquoise;
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
