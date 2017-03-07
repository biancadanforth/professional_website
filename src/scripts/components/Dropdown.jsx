// Dropdown.jsx

import React      from 'react';
import { Link }   from 'react-router';

// The Dropdown component goes inside the Header component
class Dropdown extends React.Component {

  render() {
    return (
      <ul className= 
        {this.props.isOpen ? 'submenu' : 'submenu hidden'}>
        <li className='submenu-item'>
          <Link
            className='submenu-link'
            to='to-do-list'
            onClick={this.props.onClick} >
              To-Do List
          </Link>
        </li>
        <li className='submenu-item'>
          <Link
            className='submenu-link'
            to='e-mail-sign-up'
            onClick={this.props.onClick} >
              E-mail Sign-up
          </Link>
        </li>
        <li className='submenu-item past-projects'>
          <Link
            className='submenu-link'
            to='ferrofluid-pool'
            onClick={this.props.onClick} >
              Ferrofluid Pool
          </Link>
        </li>
        <li className='submenu-item past-projects'>
          <Link
            className='submenu-link'
            to='twist'
            onClick={this.props.onClick} >
              Twist
          </Link>
        </li>
      </ul>
    );
  }
}

export default Dropdown;
