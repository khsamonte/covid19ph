import React from "react";
import GlobalFonts from "./fonts/fonts";
import styled from "styled-components";

// Components
import Header from "./components/Header";
import DataContainer from "./components/Data/DataContainer";

const App = () => {
  return (
    <Container className="main-container">
      <GlobalFonts />
      <Header />
      <MainBody className="main-body">
        <TitleBar className="title-bar">
          <Title className="title">
            Data Graphs & Information for COVID19 PH Cases
          </Title>
        </TitleBar>
        <DataContainer />
      </MainBody>
    </Container>
  );
};

const Container = styled.div`
  background: #212938;
  min-height: 100vh;
`;

const MainBody = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  padding: 6rem 1.6rem 12rem;
`;

const TitleBar = styled.div`
  border-bottom: 0.1rem solid #fff;
  height: 4.8rem;
  margin-bottom: 4rem;
  width: 100%;
`;

const Title = styled.h1`
  color: #fff;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 2.9rem;
`;

export default App;
