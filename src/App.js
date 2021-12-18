import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';
import MemoryGame from './Pages/Games/MemoryGame/MemoryGame';
import Snake from './Pages/Games/Snake/Snake';
import TicTakToe from './Pages/Games/TicTakToe/TicTakToe';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navigation from './Pages/Navigation/Navigation';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/memoryGame">
              <MemoryGame></MemoryGame>
            </PrivateRoute>
            <PrivateRoute path="/ticTakToe">
              <TicTakToe></TicTakToe>
            </PrivateRoute>
            <PrivateRoute path="/snake">
              <Snake></Snake>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
