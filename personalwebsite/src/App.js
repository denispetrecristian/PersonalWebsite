import { Route, Switch } from 'react-router-dom';
import { BrowserRouter  as Router} from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return(
      <>
        <Router>
          <Sidebar></Sidebar>
          <Switch>
            <Route path="/"></Route>
          </Switch>
        </Router>
      </>

  );
}

export default App;
