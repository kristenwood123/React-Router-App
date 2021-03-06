import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//App components
import Home from './Home'
import Courses from './Courses'
import About from './About'
import Header from './Header'
import Teachers from './Teachers'
import NotFound from './NotFound'
import Featured from './Featured'


const App = () => (
  <BrowserRouter>
  <div className="container">
    <Header />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/courses" component={Courses}/>
      <Route path="/about" render={ () => <About title='About'/> } />
      <Route exact path="/teachers" component={Teachers} />
      <Route path='/teachers/:topic/:fname-:lname' component={Featured} />
      <Route component={NotFound}/>
      </Switch>
  </div>
  </BrowserRouter>
);

export default App;