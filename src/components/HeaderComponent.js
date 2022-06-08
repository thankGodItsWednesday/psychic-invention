import React, { Component } from 'react';
import { Navbar, NavbarBrand, Fade, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody, FormGroup, Label, Input, Form } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: true,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
        + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render() {
        return(
            <div>
             <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler className='pull-right' onClick={this.toggleNav} />
                        <div className='row'>
                            <div className="col-12 col-md-1">
                                <NavbarBrand className="mr-auto" href="/">
                                    <img src="assets/images/logo.png" height="30" width="41"
                                    alt="Ristorante Con Fusion" />
                                </NavbarBrand>
                            </div>
                            <div className='col-12 col-md-6'>
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem className='nav-item'>
                                            <NavLink className="nav-link" to="/home"><span className='fa fa-home fa-lg'></span> Home
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className='nav-item'>
                                            <NavLink className="nav-link" to="/aboutus"><span className='fa fa-info fa-lg'></span> About Us
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className='nav-item'>
                                            <NavLink className="nav-link" to="/menu"><span className='fa fa-list fa-lg'></span> Menu
                                            </NavLink>
                                        </NavItem>
                                        <NavItem className='nav-item'>
                                            <NavLink className="nav-link" to="/contactus"><span className='fa fa-address-card fa-lg'></span> Contact Us
                                            </NavLink>
                                        </NavItem>
                                    </Nav>                                    
                                </Collapse>
                            </div>
                            <div className='col-12 col-md-4'>
                                <Nav navbar>
                                    <NavItem>
                                        <Button outline onClick={this.toggleModal} id="LoginButton">
                                            <span className='fa fa-sign-in fa-lg'></span> Login
                                         </Button>
                                    </NavItem>
                                </Nav>
                            </div>                            
                        </div>
                    </div>
                </Navbar>
                <div id="fade">
                    <div className="container">
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup>
                                    <Label htmlFor='username'>Username</Label>
                                    <Input type='text' id="useraname" name='username' innerRef={(input) => this.username = input}/>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor='password'>Password</Label>
                                    <Input type='password' id="password" name='password' innerRef={(input) => this.password = input}/>
                                </FormGroup>
                                <FormGroup  check>
                                    <Label check>
                                        <Input type='checkbox' name='remember' innerRef={(input) => this.remember = input}/>
                                        Remember Me
                                    </Label>
                                </FormGroup>
                                <Button type='submit' value="submit" color="primary">Login</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>    
            </div>
        );
    }
}

export default Header;