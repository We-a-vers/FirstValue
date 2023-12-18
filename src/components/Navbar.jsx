import { NavLink, Outlet } from 'react-router-dom';
import Hamburger from '/public/Hamburger.svg'

const Navbar = () => {
  // const navStyle = {
  //   background: '#7B8EA6',
  //   color: '#FFFFFF',
  //   padding: '20px',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // };

  // const ulStyle = {
  //   listStyle: 'none',
  //   display: 'flex',
  //   justifyContent: 'flex-end',
  // };

  // const liStyle = {
  //   margin: '0 10px',
  // };

  return (
    <div>
      <div className="bg-white text-blue-400 p-4 flex justify-between center ">
        <div className="font-medium">鴻日興科技 First Value Technology Co</div>
        <ul className="flex list-none justify-end items-center gap-2">
          <NavLink to="/">
            <li>主頁面</li>
          </NavLink>
          <NavLink to="about">
            <li>關於我們</li>
          </NavLink>
          <NavLink to="service">
            <li>技術</li>
          </NavLink>
          <li>服務</li>
          <li>聯絡我們</li>
          <li>中文 </li>
          <li>
            {/* <div className="bg-hamburger w-5 h-3" /> */}
            <img src={Hamburger} />
          </li>
        </ul>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
