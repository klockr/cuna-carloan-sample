import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import LandingForm from './forms/LandingForm';
import NewAccountForm from './forms/NewAccountForm';
import DisqualificationPage from './pages/DisqualificationPage';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qualified: null,
      qualificationMessage: '',
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/*' render={() =>
            <div className="App">
              <div className="banner">
                CUNA Car Loan Example
              </div>
              <div className="Content">
                <Route exact path="/" render={() => <Redirect to="/landing-page"/>}/>                                
                <Route path="/landing-page" render={() => 
                  <LandingForm />}
                />
                <Route path="/new-account" render={() => 
                  <NewAccountForm />}
                />                
                <Route path="/disqualification" render={() => 
                  <DisqualificationPage />}
                />
              </div>              
            </div>    
          }/>      
        </Switch>
      </BrowserRouter>      
    );
  } 
}

export default App;
