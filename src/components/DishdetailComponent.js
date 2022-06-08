import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, Label, Col, Row } from 'reactstrap';
import Moment from 'moment';
import { Link } from 'react-router-dom';
import {Control, LocalForm, Errors} from "react-redux-form";


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



class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            rating: '',
            yourName: "Your Name",
            comment: "Comment"
        };
       
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        this.toggleModal();
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }
   
    render() {

        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len)
        const minLength = (len) => (val) => !(val) || (val.length >= len)
    
    return(
        <div>
            <Button outline onClick={this.toggleModal} id="CommentButton">
                <span className='fa fa-pencil fa-lg'></span> Submit Comments
            </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating" md={10}>Rating</Label>
                            <Col md={{size: 10, offset: 0}}>
                                <Control.select model=".rating" name='rating'
                                    className='form-control'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>                                
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="yourName" md={10}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".yourName" id='yourName' name='yourName'
                                        placeholder='Your Name'
                                        className="form-control" validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)}}/> 
                                    <Errors className='text-danger' model=".yourName" show="touched"
                                            messages={{
                                                        required: " Required ",
                                                        minLength: " Must be greater than 2 characters ",
                                                        maxLength: " Must not exceed 15 characters "
                                                    }}/>
                                </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={10}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model='.comment' id='comment' name='comment'
                                                    rows="6" />
                                </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 10, offset: 0}}>
                                <Button type='submit' color='primary'>
                                    Submit Comment
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    );
}
}

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
                <div>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        <li>{dishComments}</li>
                    </ul>
                </div> 
                <div>
                    <CommentForm />
                </div>  
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>           
                    <div className='row'>
                        <div className='col-12 col-md-5 m-1'>
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className='col-12 col-md-5 m-1'>
                            <RenderComments comments={props.comments} />
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
