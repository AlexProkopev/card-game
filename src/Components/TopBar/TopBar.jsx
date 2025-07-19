import React from 'react'
import { NavLink } from 'react-router-dom'

function TopBar() {
  return (
    <nav>
        <NavLink to="/">Домой</NavLink>
    </nav>
  )
}

export default TopBar