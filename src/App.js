import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import List from './List';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  border: 1px solid #BCB5B9;
  border-radius: 3px;
  padding: 20px 40px;
  background: #F2F2F2;
  max-width: 640px;
`;

const items = [
  'create-react-app',
  'styled-component',
  'testing-libraries',
  'redux',
  'codex'
]

function renderItem(item, handleClick) {
  return(
    <li onClick={() => handleClick(item)}>:-){item}</li>
  )
}

function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <ContentWrapper>
        <h1>react-base based on:</h1>
        <List items={items} />
        <List items={items} renderItem={undefined} />
        <List items={items} renderItem={renderItem} />
        <List items={items}>
          <a>dfghj</a>
        </List>
      </ContentWrapper>
    </AppWrapper>
  )
}

export default App;
