import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-animation-components';
import Bg from './bg_picture.jpg';

var sectionStyle = {
    backgroundImage: `url(${Bg})` 
  };
class Header extends Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            isNavOpen: false,

        };
        this.toggleNav = this.toggleNav.bind(this);

        if (typeof window !== 'undefined') {
            let prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
              const maxScroll = document.body.clientHeight - window.innerHeight;
              let currentScrollPos = window.pageYOffset;
              if (
                (maxScroll > 0 &&
                  prevScrollpos > currentScrollPos &&
                  prevScrollpos <= maxScroll) ||
                (maxScroll <= 0 && prevScrollpos > currentScrollPos) ||
                (prevScrollpos <= 0 && currentScrollPos <= 0)
              ) {
                document.getElementById('navbar').style.top = '0';
                document.getElementById('navbar').style.background="rgba(0,0,0,0.7)"
                console.log(111)
              } else {
                document.getElementById('navbar').style.top = '-5.0rem';
                document.getElementById('navbar').style.background="rgba(0,0,0,0)"
                console.log(222)
              }
              prevScrollpos = currentScrollPos;
            };
          }

    }
    state = {
        isOpen:false.valueOf,
    };

    toggleNav()
    {
        this.setState(
        {
            isNavOpen: !this.state.isNavOpen
        });
    }
    

    render()
    {
        return(
            <React.Fragment>
            <div className = "bg-image" style={sectionStyle}>
            <Navbar id = "navbar" dark expand="md" fixed = "top">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/pathadvisor_logo.png" height="41" width="41" alt="HKUST Path Advisor" />                        
                    </NavbarBrand>
                    <Nav navbar className="mr-auto">
                        <NavItem>
                            <NavLink className="nav-link" to="/home">HKUST Path Advisor</NavLink>
                        </NavItem>
                    </Nav>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                            <NavItem>
                                <a className="nav-link" href="#navbar">HOME</a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href="#FEATURES">FEATURES</a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href="#OURSTORY">OUR STORY</a>
                            </NavItem>
                            <NavItem>
                            <a className="nav-link" href="#OURTEAM">OUR TEAM</a>
                            </NavItem>
                            <NavItem>
                                <a className="nav-link" href="#DOWNLOAD">DOWNLOAD</a>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

            <Jumbotron>         
                <br></br> <br></br> <br></br>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-md-7">
                            <Fade in timeout={200}>
                            <h1 >HKUST Path Advisor</h1>
                            <hr />
                            </Fade>
                            <Fade in timeout={300}>
                            <p>
                            Search locations on the campus.<br/> 
                            Find the path between two locations.
                            </p>
                            <div className="body-btn">
                                <span className="btn-item">Download APP</span>
                                <span className="btn-item">Go to Website</span>
                            </div>
                            </Fade>
                        </div>         
                        <div className="col-12 col-md d-flex justify-content-center">
                            <Fade in timeout={450}>
                            <img className="d-none d-md-block" src="assets/pathadvisor_mobile.png" alt="pathadvisor mobile" height="450" />
                            </Fade>
                        </div>                                                
                    </div>
                </div>
            </Jumbotron>
            </div>
            </React.Fragment>
        );
    }
}

export default Header;

