import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
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
    <div>
        <div style={navStyle} className="navbar">
            <div className="font-medium">鴻日興科技 First Value Technology Co</div>
            <ul style={ulStyle} className="nav-list">
                <NavLink to="/"><li style={liStyle}>主頁面</li></NavLink>
                <NavLink to="about"><li style={liStyle}>關於我們</li></NavLink>
                <NavLink to="service"><li style={liStyle}>技術</li></NavLink>
                <li style={liStyle}>服務</li>
                <li style={liStyle}>聯絡我們</li>
                <li style={liStyle}>中文 </li>
            </ul>
        </div>
        
        <main><Outlet/></main>
    </div>
  );
}

export default Navbar;