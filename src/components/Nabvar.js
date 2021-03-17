import React from 'react'
import {
    Link
  } from "react-router-dom";
export const Nabvar = () => {
    return (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mars">Mars</Link>
            </li>
            <li>
              <Link to="/mars">Exp</Link>
            </li>
          </ul>
        </nav>
    )
}
