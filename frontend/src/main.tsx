import {createRoot} from 'react-dom/client';
import './index.css';
import {AppRouter} from './routes/AppRouter.tsx';
import {createTheme, CssBaseline, ThemeProvider} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#46b0d9ff',
    },
    secondary: {
      main: '#d44e4eff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <AppRouter/>
  </ThemeProvider>,
);
