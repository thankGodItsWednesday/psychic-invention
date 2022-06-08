//import React, { Component } from 'react';
import React, { useState } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import DishDetail from './DishdetailComponent';
import { Dishes } from '../redux/dishes';
import { Comments } from '../redux/comments';
import { Promotions } from '../redux/promotions';
import { Leaders } from '../redux/leaders';
import { connect } from 'react-redux';
/* require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window) */



const withRouter = WrappedComponent => props => {
  const state = useState();
  return (
    <WrappedComponent
      {...props}
      state={state} />
  );
}
  
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.commments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

//class Main extends Component {
const Main = () => {  
//constructor(props) {
//    super(props);
    /* this.state = {
      
    }; */
    /* let [dishes] = useState(DISHES)
    let [comments] = useState(COMMENTS)
    let [leaders] = useState(LEADERS)
    let [promotions] = useState(PROMOTIONS) */
  

  //render() {

    
    
    const HomePage = () => {
      return(
        <Home dish={Dishes().filter((dish) => dish.featured)[0]}
         promotion={Promotions().filter((promo) => promo.featured)[0]}
         leader={Leaders().filter((lead) => lead.featured)[0]}/>
      );
    }
    
    const DishWithId = () => {
      const { dishId } = useParams();
      //const { dishes } = Reducer().dishes;
     // const { comments } = Reducer().comments;

      //console.log( "dishId: ", dishId);
      return(
          <DishDetail dish={Dishes().filter((dish) => dish.id === parseInt(dishId))[0]} 
            comments={Comments().filter((comment) => comment.dishId === parseInt(dishId))} />
      );
    
    }

 
        return (
            <div>
              <Header />
              <Routes>
                 <Route path="/home" element={ <HomePage /> } />
                 <Route exact path="/menu" element={ (() => <Menu dishes={Dishes()}/>)() } />
                 <Route path="/menu/:dishId" element={<DishWithId />} />
                 <Route path="/contactus" element={ <Contact /> } />
                 <Route path="/aboutus" element={ <About leaders={Leaders()}/> } />
                 <Route path="*" element={<Navigate replace to="/home" />} />
              </Routes>               
              <Footer />
               </div>
    );
  }

export default withRouter(connect(mapStateToProps)(Main));

