import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { FadeTransform, Fade } from 'react-animation-components';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink className={classnames({ active: activeTab === '1' })}
                   onClick={() => { toggle('1'); }}  >
            Overview
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={classnames({ active: activeTab === '2' })}
                   onClick={() => { toggle('2'); }} >
            Search Location
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={classnames({ active: activeTab === '3' })}
                   onClick={() => { toggle('3'); }} >
            Find Path
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink className={classnames({ active: activeTab === '4' })}
                   onClick={() => { toggle('4'); }}  >
            Bus Queue Statistics
          </NavLink>
        </NavItem>
      </Nav>
             
      <TabContent activeTab={activeTab}>
      <TabPane tabId="1">        
          <Row>
            <div className="col-12 col-sm-6">
                <Card body>
                    <CardTitle><h3>Website version</h3><hr /></CardTitle>                    
                    <CardText> feature of website version</CardText>
                </Card>              
            </div>
            <div className="col-12 col-sm-6">
                <Card body>
                    <CardTitle><h3>Mobile version</h3><hr /></CardTitle>                    
                    <CardText> feature of mobile version</CardText>
                </Card>              
            </div>
          </Row>          
        </TabPane>
        
        <TabPane tabId="2">
          <Row>
            <div className="col-12 col-sm-6">
                <Card body>
                    <CardTitle><div className="col-12"><h3>Search Location</h3></div><hr /></CardTitle>                    
                    <CardText> 
                      <div className="col-12"> 
                        <h4>Web. version</h4>
                      </div>
                      <div className="col-12">
                        description of search location in web version
                      </div>
                      <hr />
                      <div className="col-12">
                        <h4>Mobile version</h4>                        
                      </div>
                      <div className="col-12">
                        description of search location in mobile version
                      </div>
                    </CardText>
                </Card>              
            </div>
            <div className="col-12 col-sm-6 d-flex justify-content-center">
                <img src='' width="50%" alt="pathadvisor_searchlocation" />
            </div>
          </Row>
        </TabPane>

        <TabPane tabId="3">
          <Row>
            <div className="col-12 col-sm-6">
                <Card body>
                    <CardTitle><div className="col-12"> <h3>Find path</h3></div><hr /></CardTitle>                    
                    <CardText> 
                      <div className="col-12"> 
                        <h4>Web. version</h4>
                      </div>
                      <div className="col-12">
                        description of find path in web version
                      </div>
                      <hr />
                      <div className="col-12">
                        <h4>Mobile version</h4>                        
                      </div>
                      <div className="col-12">
                        description of find path in mobile version
                      </div>
                    </CardText>
                </Card>              
            </div>
            <div className="col-12 col-sm-6 d-flex justify-content-center">
                <img src='assets/pathadvisor_findpath.png' width="50%" alt="pathadvisor_findpath" />
            </div>
          </Row>
        </TabPane>

        <TabPane tabId="4">
          <Row>
            <div className="col-12 col-sm-6">
                <Card body>
                    <CardTitle><div className="col-12"> <h3>Bus Queue Statistics</h3></div><hr /></CardTitle>                    
                    <CardText> 
                      <div className="col-12"> 
                        <h4>Web. version</h4>
                      </div>
                      <div className="col-12">
                        description of bus queue in web version
                      </div>
                      <hr />
                      <div className="col-12">
                        <h4>Mobile version</h4>                        
                      </div>
                      <div className="col-12">
                        description of bus queue in mobile version
                      </div>
                    </CardText>
                </Card>              
            </div>
            <div className="col-12 col-sm-6 d-flex justify-content-center">
                <img src='assets/pathadvisor_busqueue.png' width="50%" alt='pathadvisor_bus_queue' />
            </div>
          </Row>
        </TabPane>        
      </TabContent>
    </div>
  );
}

export default Tabs;