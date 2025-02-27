import "./styles/reset.css";
import "./styles/App.css";
import "./styles/Home.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min.js";
import { useState } from "react";

import Order from "./Order.jsx";
import Success from "./Success.jsx";
import Home from "./Home.jsx";

const initialForm = {
  pizzaSize: "",
  pizzaDoughThickness: "",
  choosenExtras: [],
  userName: "",
  userNote: "",
  pizzaCounter: 1,
};

const App = () => {
  const [form, setForm] = useState(initialForm);
  const [itemPrice, setItemPrice] = useState(85);
  return (
    <Switch>
      <Route exact path="/">
        <Home setItemPrice={setItemPrice} />
      </Route>
      <Route path="/order">
        <Order form={form} setForm={setForm} initialForm={initialForm} />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
    </Switch>
  );
};

export default App;
