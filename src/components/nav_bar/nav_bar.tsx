import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      <div className="h-80px fixed inset-0 z-50 w-screen overflow-x-hidden overflow-y-hidden">
        <div className="flex bg-lime-400 px-16 py-4">
          <div className="flex-1">
            <Image src="/logo/isuncloud_logo.svg" alt="iSunCloud_logo" width={200} height={40} />
          </div>

          <div className="flex space-x-4">
            <div className="p-3">Contact Us</div>
            <div className="p-3">Language</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
