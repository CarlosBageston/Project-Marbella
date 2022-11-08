import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import GlogalStyle from './Global';
import Router from './routes/routes';

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Router />
            <GlogalStyle />
        </ThemeProvider>
    );
}

export default App;
