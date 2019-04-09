import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>To Do:</h1>
    </header>
  )
}

const headerStyle = {
  background: '#388b8d',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'

}
export default Header
