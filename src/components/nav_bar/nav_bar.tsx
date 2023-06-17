import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import I18n from '../i18n/i18n';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const burgerStyle =
    'block h-1 w-30px rounded-3xl bg-darkBlue transition-all duration-300 ease-in';

  return (
    <>
      <div
        className={`fixed inset-0 z-50 w-screen overflow-x-hidden overflow-y-hidden shadow-sm ${
          showMenu ? 'h-250px' : 'h-80px'
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col bg-white px-4 py-4 lg:flex-row lg:px-16">
          <div className="flex w-full flex-1 justify-between">
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
                onClick={() => setShowMenu(!showMenu)}
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

          <div className="flex flex-col items-center lg:flex-row lg:space-x-4">
            <Link
              href="/#contact_us"
              scroll={false}
              className="p-7 text-darkBlue hover:text-brandOrange lg:p-3"
            >
              Contact Us
            </Link>
            <div className="p-7 lg:p-3">
              <I18n />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
