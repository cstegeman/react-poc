import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from "./Components/Board/Board";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Board />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
