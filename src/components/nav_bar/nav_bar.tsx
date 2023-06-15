import Image from 'next/image';

const NavBar = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 w-screen overflow-x-hidden overflow-y-hidden">
        <div className="flex bg-lime-400 px-16 py-4">
          <Image src="/logo/isuncloud_logo.svg" alt="iSunCloud_logo" width={200} height={40} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
