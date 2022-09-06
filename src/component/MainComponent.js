import React, { Component } from 'react';
import Home from './HomeComponent.js';
import Download from './DownloadComponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Team from './TeamComponent.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() 
  {
    const HomePage = () => {
      return(
        <Home />
      );
    }

    const DownloadPage = () => {
      return(
        <Download />
      );
    }
    
    const TeamPage = () => {
      return(
        <Team />
      );
    }

    return (
      <div>        
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/download" component={DownloadPage} />
          <Route exact path="/team" component={TeamPage} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;