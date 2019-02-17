import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
        <hr />
      </div>
    )
  }
}
