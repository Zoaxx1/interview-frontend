import React from 'react';
import { Router, Link } from '@reach/router';

import Exercise01 from './exercises/Exercise01'
import Exercise02 from './exercises/Exercise02'
import Exercise03 from './exercises/Exercise03'

const Welcome = () => {

  return <div>
    <h2>Welcome!</h2>
    <p>
      Please take a look at the 3 exercises, each of them contain instructions.
    </p>
  </div>
}

////>>  EXERCISE 03  <<////
///>> [x] Activate the correct page depending on which page we are located  <<///
const NavLink = props => {
  return (<Link {...props}
    getProps={({ isCurrent }) => {      
      //with isCurrent we verify if the page is activate
      //and set the correct class to the className
      return {
        className: isCurrent ? "nav-link active" : "nav-link"
      }
    }}/>)
};

const App = () => {   

  return <div className="container">
    {/*///>>  EXERCISE 03  <<///*/}
    {/*///>> [x] Title clickable and take it to the homepage  <<///*/}
    <Link to="/" style={{textDecoration:'none'}}><h1 className="py-4" style={{color:'black'}}>FrontEnd Interview Exercises</h1></Link>
                  {/*/////////////////>> This is only to the style <<//////////////////////*/}
    <ul className="nav nav-tabs">
      {/* [x] Remove the Homepage button from the navbar
      <li className="nav-item">
        <Link to="/" className="nav-link active">Homepage</Link>
      </li>*/}
      <li className="nav-item">
      {/*///>> [x] Replace the Links to NavLink <<///*/}
        <NavLink to="/exercise01">
          Exercise 01</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/exercise02">
          Exercise 02</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/exercise03">
          Exercise 03</NavLink>
      </li>
    </ul>

    <Router className="mt-5 mb-5">
      <Welcome path="/" default />
      <Exercise01 path="/exercise01" />
      <Exercise02 path="/exercise02" />
      <Exercise03 path="/exercise03" />
    </Router>

  </div>
}

export default App;
