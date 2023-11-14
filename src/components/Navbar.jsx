import React from 'react';

function Navbar() {
  const navStyle = {
    background: '#333',
    color: '#fff',
    padding: '10px',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
  };

  const liStyle = {
    margin: '0 10px',
  };

  return (
    <div style={navStyle} className="navbar">
      <ul style={ulStyle} className="nav-list">
        <li style={liStyle}>Home</li>
        <li style={liStyle}>About</li>
        <li style={liStyle}>Services</li>
        <li style={liStyle}>Contact</li>
      </ul>
    </div>
    // <h1>hello world</h1>
  );
}

export default Navbar;