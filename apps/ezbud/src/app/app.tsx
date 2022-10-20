import styled, { ThemeProvider } from 'styled-components';
import { SignUp } from './pages';
import { theme, GlobalStyles } from '@ui';

const MainContainer = styled.main`
  color: ${(props) => props.theme.color.text};
`;
export function App() {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyles />
      <MainContainer>
        <SignUp />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
