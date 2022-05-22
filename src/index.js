import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Normalize } from 'components/GlobalStyle/Normalize';
import { GlobalStyle } from 'components/GlobalStyle/GlobalStyle';
import { theme } from 'constants/theme';
import { App } from 'components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
