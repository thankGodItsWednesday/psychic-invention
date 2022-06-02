import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { Routes, Route, Navigate } from 'react-router-dom';
  

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    const HomePage = () => {
      return(
        <Home />
      );
    }
        return (
            <div>
              <Header />
              <Routes>
                 <Route path="/home" element={ (HomePage)() } />
                 <Route path="/menu" element={(() => <Menu dishes={this.state.dishes}/>)()} />
                 <Route path="*" element={<Navigate replace to="/home" />} />
              </Routes>               
              <Footer />
               </div>
    );
  }
}
export default Main;

