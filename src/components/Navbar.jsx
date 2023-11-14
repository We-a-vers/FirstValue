import React from 'react';

function Navbar() {
  const navStyle = {
    background: '#7B8EA6',
    color: '#FFFFFF',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
      <div class="font-medium">鴻日興科技 First Value Technology Co</div>
      <ul style={ulStyle} className="nav-list">
        <li style={liStyle}>主頁面</li>
        <li style={liStyle}>關於我們</li>
        <li style={liStyle}>技術</li>
        <li style={liStyle}>服務</li>
        <li style={liStyle}>聯絡我們</li>
        <li style={liStyle}>中文 </li>
      </ul>
    </div>
    // <h1>hello world</h1>
  );
}

export default Navbar;