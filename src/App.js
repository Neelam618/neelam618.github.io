import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import { purple } from '@mui/material/colors';
import Home from './components/home/Home';
import Waves from "./images/wave.svg";
import WavesMobile from "./images/wave2.svg"
import { Box } from '@mui/material';

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
      <Box sx={{ backgroundImage: { xs: `url(${WavesMobile})`, md: `url(${Waves})` }, backgroundRepeat: "no-repeat" }}>
        <Navbar />
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;




