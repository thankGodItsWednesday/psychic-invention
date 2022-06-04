//import React, { Component } from 'react';
import React, { useState } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import DishDetail from './DishdetailComponent';

/* require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window) */
  


//class Main extends Component {
const Main = () => {  
//constructor(props) {
//    super(props);
    /* this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    }; */
    let [dishes] = useState(DISHES)
    let [comments] = useState(COMMENTS)
    let [leaders] = useState(LEADERS)
    let [promotions] = useState(PROMOTIONS)
  

  //render() {
    
    const HomePage = () => {
      return(
        <Home dish={dishes.filter((dish) => dish.featured)[0]}
         promotion={promotions.filter((promo) => promo.featured)[0]}
         leader={leaders.filter((lead) => lead.featured)[0]}/>
      );
    }
    
    const DishWithId = () => {
      const { dishId } = useParams();
      //console.log( "dishId: ", dishId);
      return(
          <DishDetail dish={dishes.filter((dish) => dish.id === parseInt(dishId))[0]} 
            comments={comments.filter((comment) => comment.dishId === parseInt(dishId))} />
      );
    
    }

 
        return (
            <div>
              <Header />
              <Routes>
                 <Route path="/home" element={ <HomePage /> } />
                 <Route exact path="/menu" element={ (() => <Menu dishes={dishes}/>)() } />
                 <Route path="/menu/:dishId" element={<DishWithId />} />
                 <Route path="/contactus" element={ <Contact /> } />
                 <Route path="/aboutus" element={ <About leaders={leaders}/> } />
                 <Route path="*" element={<Navigate replace to="/home" />} />
              </Routes>               
              <Footer />
               </div>
    );
  }

export default Main;

