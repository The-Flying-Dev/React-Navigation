import { Route, Switch, Link, NavLink  } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

function App() {

  const handleClick = () => {
    console.log('Hello');
  }
  return (
    <div className='main'>
      <h1>App Component</h1>
      <nav className='comp nav'>
        <ul>
          <li><a href="/">Anchor</a></li>
          <li><NavLink to='/' exact onClick={handleClick} activeClassName='purple' activeStyle={{ fontWeight: 'bold' }}>Home</NavLink></li>
          <li><NavLink to='/stocks' exact onClick={handleClick} activeClassName='purple' activeStyle={{ fontWeight: 'bold' }}>Stocks</NavLink></li>
          <li><NavLink to='/movies' exact onClick={handleClick} activeClassName='purple' activeStyle={{ fontWeight: 'bold' }}>Movies</NavLink></li>
        </ul>

      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/stocks'>
          <Stocks />
        </Route>
        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/not-logged-in'>
          <h1>You must be logged in to enter</h1>
        </Route>
        <Route>
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;