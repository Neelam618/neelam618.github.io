import { ThemeProvider, createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Home from './components/home/Home';


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
      <Home />
    </ThemeProvider>
  );
}

export default App;




