import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import I18n from '../i18n/i18n';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const burgerStyle =
    'block h-1 w-30px rounded-3xl bg-darkBlue transition-all duration-300 ease-in';

  const showMenuHandler = () => setShowMenu(!showMenu);

  const desktopMenu = (
    <ul className={`hidden items-center space-x-4 transition-all duration-300 ease-in-out lg:flex`}>
      <li className="p-3 text-darkBlue hover:text-brandOrange">
        <Link href="/#contact_us" scroll={false}>
          Contact Us
        </Link>
      </li>
      <li className="p-3">
        <I18n />
      </li>
    </ul>
  );

  const mobileMenu = (
    <ul
      className={`flex flex-col items-center space-y-2 overflow-hidden shadow-md ${
        showMenu ? 'h-180px' : 'h-0'
      } transition-all duration-300 ease-in-out lg:hidden`}
    >
      <li className="p-7">
        <I18n />
      </li>
      <li className="p-7 text-darkBlue hover:text-brandOrange">
        <Link href="/#contact_us" onClick={showMenuHandler} scroll={false}>
          Contact Us
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <div className={`fixed inset-0 z-50 w-screen overflow-x-hidden overflow-y-hidden`}>
        <div className="flex flex-col bg-white shadow-md lg:flex-row lg:px-16">
          <div className="flex w-full flex-1 justify-between px-4 py-4 shadow-md lg:shadow-none">
            <Link href="/" className="">
              <Image
                src="/logo/isuncloud_logo.svg"
                alt="iSunCloud_logo"
                width={0}
                height={0}
                style={{width: '200px', height: 'auto'}}
              />
            </Link>

            <div className="flex items-center space-x-4 lg:hidden">
              <button
                className="group space-y-1.5 p-3 text-darkBlue hover:text-brandOrange"
                onClick={showMenuHandler}
              >
                <span
                  className={`${burgerStyle} ${
                    showMenu
                      ? 'translate-x-8px translate-y-10px rotate-45'
                      : 'translate-x-0 translate-y-0 rotate-0'
                  }`}
                ></span>
                <span className={`${burgerStyle} ${showMenu ? 'opacity-0' : 'opacity-100'}`}></span>
                <span
                  className={`${burgerStyle} ${
                    showMenu
                      ? 'translate-x-8px -translate-y-10px -rotate-45'
                      : 'translate-x-0 translate-y-0 rotate-0'
                  }`}
                ></span>
              </button>
            </div>
          </div>

          {desktopMenu}
          {mobileMenu}
        </div>
      </div>
    </>
  );
};

export default NavBar;
