import { NavLink, Outlet } from 'react-router-dom';
import Hamburger from '/Hamburger.svg';
import { useEffect, useState } from 'react';
import useScreenSize from './hooks/useScreenSize';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width < 1440) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  }, [screenSize.width]);

  return (
    <div>
      <div className="bg-white font-chi-sans py-3 px-4 flex justify-between items-center desktop:px-32 desktop:py-7 desktop:text-base">
        <div className="text-foundation-blue-normal text-base font-normal tablet:text-lg">
          鴻日興 {isDesktop && '科技 First Value Technology Co'}
        </div>
        <div>
          {isDesktop ? (
            <div>
              <ul className="flex flex-row gap-4">
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
            <>
              {!isOpen && (
                <div onClick={() => setIsOpen(true)}>
                  <img src={Hamburger} className="justify-end" />
                </div>
              )}

              {isOpen && (
                <div onClick={() => setIsOpen(false)}>
                  <IoClose style={{ fontSize: '2em' }} />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {isOpen ? (
        <div>
          <ul className="text-center mt-8 flex flex-col gap-3 font-chi-sans text-2xl tablet:text-xl text-foundation-blue-normal">
            {/* Your list items go here */}
            <NavLink to="/">
              <li>主頁面</li>
            </NavLink>
            <NavLink to="about">
              <li>關於我們</li>
            </NavLink>
            <NavLink to="service">
              <li>技術＆服務</li>
            </NavLink>

            <li>聯絡我們</li>
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
