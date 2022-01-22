import React from 'react';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Assurance from './Pages/Assurance';
import Carnet from './Pages/Carnet'
import Stockage from './Pages/Stockage'
import Entretien from './Pages/Entretien'

function App() {
  return (
    <Router>
    <div className="">
      <Nav/>
      <Switch>
        <Route exact path="/" component ={Main} />
        <Route exact path="/assurance" component ={Assurance} />
        <Route exact path="/stockage" component ={Stockage} />
        <Route exact path="/entretien" component ={Entretien} />
        <Route exact path="/carnet" component ={Carnet} />
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
