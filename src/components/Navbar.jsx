import { NavLink, Outlet, useLocation } from 'react-router-dom';
import Hamburger from '/Hamburger.svg';
import { createContext, useEffect, useState } from 'react';
import useScreenSize from './hooks/useScreenSize';
import { IoClose } from 'react-icons/io5';
import Footer from './Footer';

export const NavbarContext = createContext(null);

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useScreenSize();
  const [selectedItem, setSelectedItem] = useState('');
  const location = useLocation();

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    if (screenSize.width < 1440) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
    switch (location.pathname) {
      case '/':
        setSelectedItem('Home');
        break;
      case '/about':
        setSelectedItem('About');
        break;
      case '/service':
        setSelectedItem('Service');
        break;
    }
  }, [screenSize.width, location.pathname]);

  return (
    <div>
      <div className="bg-white font-chi-sans sticky top-0 z-20 text-foundation-blue-normal py-3 px-4 flex justify-between items-center desktop:px-32 desktop:py-7 desktop:text-base">
        <div className="text-base font-normal tablet:text-lg">
          鴻日興 {isDesktop && '科技 First Value Technology Co'}
        </div>
        <div>
          {isDesktop ? (
            <div>
              <ul className="flex flex-row gap-4">
                <NavLink to="/">
                  <li
                    className={`
                      px-3 py-2
                      ${
                        selectedItem === 'Home'
                          ? 'font-bold border-b border-foundation-blue-normal solid black'
                          : 'font-normal border-none'
                      }`}
                    onClick={() => handleItemClick('Home')}
                  >
                    主頁面
                  </li>
                </NavLink>
                <NavLink to="about">
                  <li
                    className={`
                      px-3 py-2 
                      ${
                        selectedItem === 'About'
                          ? 'font-bold border-b border-foundation-blue-normal solid black'
                          : 'font-normal border-none'
                      }`}
                    onClick={() => handleItemClick('About')}
                  >
                    關於我們
                  </li>
                </NavLink>
                <NavLink to="service">
                  <li
                    className={`
                      px-3 py-2
                      ${
                        selectedItem === 'Service'
                          ? 'font-bold border-b border-foundation-blue-normal solid black'
                          : 'font-normal border-none'
                      }`}
                    onClick={() => handleItemClick('Service')}
                  >
                    技術＆服務
                  </li>
                </NavLink>
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
          <ul className="text-center mt-8 flex flex-col gap-16 font-chi-sans text-2xl tablet:text-3xl text-foundation-blue-normal">
            {/* Your list items go here */}
            <NavLink to="/">
              <li onClick={() => setIsOpen(false)}>主頁面</li>
            </NavLink>
            <NavLink to="about">
              <li onClick={() => setIsOpen(false)}>關於我們</li>
            </NavLink>
            <NavLink to="service">
              <li onClick={() => setIsOpen(false)}>技術＆服務</li>
            </NavLink>
          </ul>
        </div>
      ) : (
        <>
          <main className="bg-[url('/fvt_background.png')] bg-cover">
            <NavbarContext.Provider value={[selectedItem, setSelectedItem]}>
              <Outlet />
            </NavbarContext.Provider>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Navbar;
