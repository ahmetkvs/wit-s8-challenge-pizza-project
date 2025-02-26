import "./styles/reset.css";
import "./styles/App.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min.js";

import Order from "./Order.jsx";
import Home from "./Home.jsx";
import Success from "./Success.jsx";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
};

export default App;
