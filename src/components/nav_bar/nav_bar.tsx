import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 h-80px w-screen overflow-x-hidden overflow-y-hidden">
        <div className="flex bg-white px-16 py-4">
          <div className="flex-1">
            <Link href="/" className="flex flex-col">
              <Image src="/logo/isuncloud_logo.svg" alt="iSunCloud_logo" width={200} height={40} />
            </Link>
          </div>

          <div className="hidden space-x-4">
            <div className="p-3">Contact Us</div>
            <div className="p-3">Language</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
