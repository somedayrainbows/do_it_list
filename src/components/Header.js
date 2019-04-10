import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Things I Need To Do</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  background: '#388b8d',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  textDecoration: 'none'
}

export default Header
