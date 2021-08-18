import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import reportWebVitals from './reportWebVitals';

import { GlobalStyles, theme } from './styles/';
import { Content } from './components';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <div>Hello</div>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
);

reportWebVitals();
