import React from 'react';
import './App.css';
//import Bootstrap from 'bootstrap';
import Styles from 'styled-components';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import Login from './Login';
import Host from './Host';
import SignUp from './SignUp';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

    // BEM
    <div className="app">
      <Router>
        <Header />
        
        
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          {/*<Route path="/signup">
            <signUp />
          </Route>*/}
          <Route exact path="/host">
          <Host />
          </Route>
          <Route exact path="/login">
          <Login />
          </Route>
          <Route exact path="/signUp">
          <SignUp />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;

    // BEM
    {/*<ImageSlider slides={SliderData} />*/}
      

      {/*Home*/}
      {/*Header*/}
      {/*Banner*/}
      {/*Search*/}
      {/*Cards*/}
      {/*Footer*/}
      {/*SearchPage*/}



     {/* 
      */}

    {/*</div>
    );*/}

