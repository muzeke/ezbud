import { ThemeProvider } from 'styled-components';
import { GlobalStyles, light, theme } from './components';
import { SignUp } from './pages/sign-up';

export function App() {
  return (
    <ThemeProvider theme={{ ...theme }}>
      <GlobalStyles />
      <SignUp />
    </ThemeProvider>
  );
}

export default App;
