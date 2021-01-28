import React from "react";
import styled from "styled-components";
import Button from "./shared/button";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MainContent = styled.div`
  background-color: ${(props) => props.theme.freeSpeechBlue};
  flex: 1;
`;

const Sidebar = styled.div`
  background-color: ${(props) => props.theme.nobel};
  color: white;
  flex: 0 auto;
  width: 200px;
  padding: 10px;
`;

const Article = () => {
  return (
    <Wrapper>
      <MainContent>
        Main Content
        <p>
          <Button>Click Me!</Button>
        </p>
      </MainContent>
      <Sidebar>Sidebar</Sidebar>
    </Wrapper>
  );
};

export default Article;
