import React, { Component } from 'react';
import { Navbar, NavbarBrand, Fade, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: true
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
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
                        </div>
                    </div>
                </Navbar>
                <Fade>
                <div className="container">
                    <div className='row row-header'>
                        <div className='col-12 col-sm-6'>
                            <h1>Ristorante con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        );
    }
}

export default Header;