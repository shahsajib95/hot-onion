import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';
import Product from './Component/Product/Product';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Component/Notfound/NotFound';
import Lunch from './Component/Lunch/Lunch';
import Breakfast from './Component/Breakfast/Breakfast';
import Dinner from './Component/Dinner/Dinner';

function App() {
  return (
    <div>
   
      
      
    
      <Header></Header>
      <Banner></Banner>
      <Product></Product>
      <Router>
      <Switch>
      <Route path="/breakfast">
      <Breakfast></Breakfast>
      </Route>
      <Route exact path="/lunch">
       <Lunch></Lunch>
      </Route>
      <Route path="/dinner">
      <Dinner></Dinner>
      </Route>
      <Route path="*">
       <NotFound></NotFound>
      </Route>
      </Switch>
      </Router>
      <Blog></Blog>
      <Footer></Footer>
      
 
     
      
    </div>
  );
}

export default App;
