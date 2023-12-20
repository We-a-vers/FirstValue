import { NavLink, Outlet } from "react-router-dom";
import Hamburger from "/public/Hamburger.svg";
import { useState } from "react";

const Navbar = () => {
  const [isListVisible, setListVisible] = useState(false);

  return (
    <div>
      <div className="bg-white text-blue-400 p-4 flex justify-between center ">
        <div className="font-medium">鴻日興科技 First Value Technology Co</div>
        <div onClick={() => setListVisible(!isListVisible)}>
          <img src={Hamburger} className="justify-end center tablet:hidden" />
        </div>
        <ul className="hidden tablet:flex list-none justify-end items-center gap-2">
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
        </ul>
      </div>
      <div>
        <ul className={`ml-4 z-10 ${isListVisible ? "" : "hidden"}`}>
          {/* Your list items go here */}
          <li className="mb-2">Item 1</li>
          <li className="mb-2">Item 2</li>
          <li className="mb-2">Item 3</li>
        </ul>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Navbar;
