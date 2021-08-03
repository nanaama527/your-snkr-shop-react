import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class Nav extends Component {
  render() {
    return (
      <nav className="indigo darken-3">
        <div className="container">
          <NavLink to="/" className="brand-logo">Home</NavLink>
          <ul className="right">
            <li><NavLink to="/sneakers/new">New Sneaker</NavLink></li>
            <li><NavLink to="/sneakers">All Your Kicks</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
