import { NavLink, Outlet } from "react-router-dom";
import Hamburger from "/Hamburger.svg";
import { useEffect, useState } from "react";
import useScreenSize from "./hooks/useScreenSize";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isListVisible, setListVisible] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width > 768) {
      setListVisible(false);
    }
  }, [screenSize.width]);

  return (
    <div>
      <div className="bg-white text-blue-400 p-4 flex justify-between items-center">
        <div className="font-medium">鴻日興科技 First Value Technology Co</div>
        <div>
          {!isListVisible && (
            <div onClick={() => setListVisible(!isListVisible)}>
              <img
                src={Hamburger}
                className="justify-end center tablet:hidden"
              />
            </div>
          )}

          {isListVisible && (
            <div onClick={() => setListVisible(!isListVisible)}>
              <IoClose style={{ fontSize: "2em" }} />
            </div>
          )}
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

      {isListVisible ? (
        <div>
          <ul className="ml-4 ">
            {/* Your list items go here */}
            <NavLink to="/">
              <li className="mb-2">主頁面</li>
            </NavLink>
            <NavLink to="about">
              <li className="mb-2">關於我們</li>
            </NavLink>
            <NavLink to="service">
              <li className="mb-2">技術＆服務</li>
            </NavLink>

            <li className="mb-2">聯絡我們</li>
          </ul>
        </div>
      ) : (
        <main>
          <Outlet />
        </main>
      )}
    </div>
  );
};

export default Navbar;
