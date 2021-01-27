import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const MainContent = styled.div`
  background-color: blue;
  flex: 1;
`;

const Sidebar = styled.div`
  background-color: red;
  flex: 0 auto;
  width: 200px;
`;

const Article = () => {
  return (
    <Wrapper>
      <MainContent>Main Content</MainContent>
      <Sidebar>Sidebar</Sidebar>
    </Wrapper>
  );
};

export default Article;
