import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Metrophobic from "./assets/font/Metrophobic.otf";
import DefaultLayout from "./layouts/default";
import Home from './pages/home/index';
import './assets/scss/main.scss';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <CssBaseline />
        <Routes>
          <Route path="/">
            <Route element={<DefaultLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const theme = createTheme({
  typography: {
    fontFamily: `"Metrophobic"`,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: `@font-face {
          font-family: 'Metrophobic';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(${Metrophobic});
        }
      `,
      },
    },
  },
});

export default App;
