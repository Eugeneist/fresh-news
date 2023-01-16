import { createTheme, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ArticlePage, NotFound } from './pages';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xxl: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 2560,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
