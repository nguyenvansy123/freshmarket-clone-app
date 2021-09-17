import './App.css';
import { useDispatch, useSelector } from "react-redux"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./containers/Home"
import ShopPage from "./containers/Shop"
import { getAllProduct, isUserLoggedIn, updateCart ,getAllCategory } from './actions';
import { useEffect } from 'react';
import ProductDetails from './containers/ProductDetails';
import Cart from './containers/Cart';
import Checkout from './containers/Checkout';
import Order from './containers/Order';
import OrderDetails from './containers/OrderDetails';


function App() {


  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCategory())
    dispatch(getAllProduct())
  }, [])

 

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());

    }
  }, [auth.authenticate]);



  useEffect(() => {
    dispatch(updateCart())
  }, [auth.authenticate])


  return (
    <Router>
      <Switch>

        <Route path="/cart" exact component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/order" exact component={Order} />
        <Route path="/order_details/:orderId" exact component={OrderDetails} />
        <Route path="/" exact component={HomePage} />
        <Route path="/shop" exact component={ShopPage} />
        <Route path="/:url/:productSlug/:productId" exact component={ProductDetails} />

      </Switch>
    </Router>
  );
}

export default App;
