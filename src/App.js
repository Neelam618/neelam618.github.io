import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Home from './components/home/Home';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import About from './components/about/About';
import Work from './components/work/Work';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Lato',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;




