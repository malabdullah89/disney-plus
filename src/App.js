import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import Login from './components/Login'
import TrialView from './components/TrailView'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovePlayer from './components/MovePlayer';

function App() {
  return (
    <div className="App">
      <Router>
       <Header />
       <Switch>
         <Route path="/login">
           <Login />
         </Route>
         <Route path="/detail/:id">
           <Detail />
         </Route>
         <Route path="/trail">
           <TrialView />
         </Route>
         <Route path="/">
           <Home />
         </Route>
       </Switch>
      </Router>
  
    </div>
  );
}

export default App;
