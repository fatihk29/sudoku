import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';

import { GlobalStyles, theme } from './styles/';
import { Card, Content, Title } from './components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title data-cy="title">Hello</Title>
      <Card data-cy="card">This is work in progress</Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
