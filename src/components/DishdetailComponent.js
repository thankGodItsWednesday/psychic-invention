import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Moment from 'moment';

function RenderDish({dish}) {
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

function RenderComments({comments}){
        if (comments != null) {
            const dishComments = comments.map((comment) => {        
            return (
                <div key={comment.id}>
                 <p >{comment.comment}<br />
                -- {comment.author} , {Moment(comment.date).format('MMMM Do YYYY')} </p>
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

    const DishDetail = (props) => {

    const dish = props.dish;
        if (dish != null)
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <RenderComments comments={props.dish.comments} />
                        </div> 
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );
    };


export default DishDetail
