import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: '#000000', // black color
    color: 'white',
    minHeight: '100vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path='/' component={Homepage} exact />
        <Route path='/coins/:id' component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
