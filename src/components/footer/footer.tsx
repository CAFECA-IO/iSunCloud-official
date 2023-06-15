import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex h-auto w-full flex-col items-center justify-center space-y-4 border-t px-16 py-6 text-darkBlue lg:flex-row lg:space-y-0">
      <div className="flex flex-1 flex-col space-x-3 lg:flex-row">
        <div className="flex space-x-3">
          <Image src="/elements/locale.svg" width={20} height={20} alt="" />
          <p>8F.-7, No. 207, Dunhua N. Rd., Songshan Dist., Taipei City 105406, Taiwan</p>
        </div>

        <div className="flex space-x-3">
          <Image src="/elements/phone.svg" width={20} height={20} alt="" />
          <p>+886-2-27001979</p>
        </div>
      </div>
      <div>iSunCloud. @ 2023. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
