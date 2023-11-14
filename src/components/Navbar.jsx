import React from 'react';

function Navbar() {
  const navStyle = {
    background: '#7B8EA6',
    color: '#FFFFFF',
    padding: '10px',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
  };

  const liStyle = {
    margin: '0 10px',
  };

  return (
    <div style={navStyle} className="navbar">
      <div class="text-base font-medium font-['Inter'] leading-none">鴻日興科技 First Value Technology Co</div>
      <ul style={ulStyle} className="nav-list">
        <li style={liStyle}>Home</li>
        <li style={liStyle}>About</li>
        <li style={liStyle}>Services</li>
        <li style={liStyle}>Contact</li>
        <li style={liStyle}>中文 </li>
      </ul>
    </div>
    // <h1>hello world</h1>
  );
}

export default Navbar;