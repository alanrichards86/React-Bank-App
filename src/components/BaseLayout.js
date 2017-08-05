import React, { Component } from 'react';
import '../styles/BaseLayout.css';

//import NavLink
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);

  }
  render(){
    let navStyle = {
      color: '#4c8c4a',
    }
    let bgColor = {
      backgroundColor: '#4b636e'
    }
    return(
      <div className='mainDiv'>
        <nav>
          <ul className="nav nav-tabs" style={bgColor}>
            <li>
              <p className='nav-p'> BankShot </p>
            </li>
            <li className="nav-item">
              <NavLink className='navLink nav-link' activeStyle={navStyle} exact to='/'> Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='navLink nav-link' activeStyle={navStyle} to='/users'> Users </NavLink>
            </li>
          </ul>
        </nav>

        {this.props.children}


      </div>
    )
  }
}
