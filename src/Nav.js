import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';




export class Nav extends Component {
  render() {
    return (
      <nav className="indigo darken-3">
        <div className="container">
          <NavLink to="/" className="brand-logo">Home</NavLink>
          <ul className="left">
            <li><NavLink to="/sneakers/new">New Sneaker</NavLink></li>
            <li><NavLink to="/sneakers">All Your Kicks</NavLink></li>
            <li><NavLink to="/brands">All the Brands</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
