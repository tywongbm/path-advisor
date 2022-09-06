import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';

class Team extends Component
{
    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <Fade in timeout={150}>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Team</BreadcrumbItem>
                    </Breadcrumb>  
                    </Fade>                                 
                </div>
                <div className="row">
                    <div className="col-12">
                        <Fade in timeout={300}>
                        <hr />
                        <h3>Team</h3>
                        <hr />
                        </Fade>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Fade in timeout={450}>
                        team name list
                        </Fade>
                    </div>                    
                </div>
            </div>      
        );
    }
}

export default Team;