import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/login';
import Order from './components/order';
import PlaceOrder from './components/place-order';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/order" component={Order} />
        <Route exact path="/place_order" component={PlaceOrder} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
