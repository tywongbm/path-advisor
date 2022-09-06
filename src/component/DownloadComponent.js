import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Fade } from 'react-animation-components';

class Download extends Component
{
    render()
    {
        return(
            <div className="container">
                <div className="row">
                    <Fade in timeout={150}>
                    <Breadcrumb>
                        <BreadcrumbItem ><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Download</BreadcrumbItem>
                    </Breadcrumb>
                    </Fade>
                    <div className="col-12">
                        <hr />
                        <Fade in timeout={300}>
                        <h3 className=" d-flex justify-content-center">Download Path Advisor MOBILE APP NOW</h3>
                        </Fade>
                        <hr />
                    </div>                
                </div>
                <Fade in timeout={600}>
                <div className="row">
                    <div className="col-6 d-flex justify-content-center">
                        <Button style={{backgroundColor: '#316AFD'}} size="lg" href="https://apps.apple.com/tt/app/hkust-path-advisor/id1529844964#?platform=iphone"><i class="fa fa-apple"></i> App Store</Button>{' '}
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                        <Button style={{backgroundColor: '#316AFD'}} size="lg" href="https://play.google.com/store/apps/details?id=hk.ust.itsc.pathadvisor"><i class="fa fa-android"></i> Play Store</Button>
                    </div>  
                    <div className="col-12">
                        <hr />
                    </div>                  
                </div> 
                </Fade>
            </div>      
        );
    }
}

export default Download;