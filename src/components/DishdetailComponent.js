import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Moment from 'moment';


class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null,
            selectedComments: null
        }
    }

    

    renderDish(dish) {
        if (dish != null)
            return(
                <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    };

     renderComments(comments){
        if (comments != null) {
            const dishComments = comments.map((com) => {        
            return (
                <div>
                 <p key={com.id}>{com.comment}<br />
                -- {com.author} , {Moment(com.date).format('MMMM Do YYYY')} </p>
                </div>                       
                    )
            });        
        return(
            <div>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    <li>{dishComments}</li>
                </ul>
            </div>            
        );
        }
        else
            return(
             <div></div>
        );
    }; 

       

    render() {
        const dish = this.props.selectedDish;
        const comments = this.props.selectedComments;
        return(
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(dish)}
                </div>
                 <div className='col-12 col-md-5 m-1'>
                    {this.renderComments(comments)}
                </div> 
            </div>
        );
    };
};


export default DishDetail
