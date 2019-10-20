import React from 'react';
import styled, {ThemeProvider} from 'styled-components/macro';
import theme from './theme';
import {GlobalStyles} from './theme/global';
import ScreenReaderOnly from "./components/ScreenReaderOnly";

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

          <GlobalStyles />
        </AppStyled>
      </ThemeProvider>
  );
};

export default App;
