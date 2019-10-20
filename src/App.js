import React from 'react';
import styled from 'styled-components/macro';
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import {GlobalStyles} from './theme/global';
import ScreenReaderOnly from "./components/ScreenReaderOnly";
import AppRoutes from './routes';

const AppStyled = styled.div`
	display: flex;
    flex-direction: column;
    height: 100vh;
`;

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <AppStyled>
          <ScreenReaderOnly href="#mainContent">
            Skip to main content
          </ScreenReaderOnly>
            <AppRoutes />
          <GlobalStyles />
        </AppStyled>
      </ThemeProvider>
  );
};

export default App;
