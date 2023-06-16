import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 h-80px w-screen overflow-x-hidden overflow-y-hidden">
        <div className="flex bg-white px-16 py-4">
          <div className="flex-1">
            <Link href="/" className="">
              <Image
                src="/logo/isuncloud_logo.svg"
                alt="iSunCloud_logo"
                width={0}
                height={0}
                style={{width: '200px', height: 'auto'}}
              />
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link href="/#contact_us" className="p-3 text-darkBlue hover:text-brandOrange">
              Contact Us
            </Link>
            <div className="hidden p-3">Language</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
