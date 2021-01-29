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
      accountCreated: false,
    }
    this.submitLanding = this.submitLanding.bind(this);
    this.submitNewAccount = this.submitNewAccount.bind(this);
  }

  async submitLanding(values) {
    console.log('submitted landing')
    //const result = await fetchQualification(values);   
    this.setState({
      qualified: true,
      qualificationMessage: 'Qualified',
    });    
  }

  submitNewAccount(values) {
    //TODO (future): Persist account info to storage
    this.setState({accountCreated: true});
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
                  <LandingForm onSubmit={this.submitLanding} qualified={this.state.qualified}/>}
                />
                <Route path="/new-account" render={() => 
                  <NewAccountForm onSubmit={this.submitNewAccount} accountCreated={this.state.accountCreated}/>}
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
