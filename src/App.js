import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/login'

function App() {
  return (
    <div className="App">
          <div>
            <Login />
          </div>
    </div>
  );
}

export default App;
