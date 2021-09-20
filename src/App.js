import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Categories from "./pages/Categories/Categories";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Sell from "./pages/Sell/Sell";
import SingIn from "./components/SingIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories/:id" component={Categories} />
        <Route exact path="/product/:id" component={Product} />
        <Route exact path="/sell" component={Sell} />
        <Route exact path="/singin" component={SingIn} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
