import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from './logo.svg';
import RegistrationPage from "./components/pages/registrationPage";

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path='/'>
                <RegistrationPage />
            </Route>
            <Route path="/:username">
              
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
