import Image from 'next/image';
import {iSunCloudAddress} from '../../constants/config';

const Footer = () => {
  return (
    <footer className="flex h-auto w-full flex-col items-center justify-center space-y-4 border-t px-16 py-6 text-darkBlue lg:flex-row lg:space-y-0">
      <div className="flex flex-1 flex-col space-x-3 lg:flex-row">
        <div className="flex space-x-3">
          <Image src="/elements/locale.svg" width={20} height={20} alt="" />
          <a href={iSunCloudAddress} target="_blank">
            8F.-7, No. 207, Dunhua N. Rd., Songshan Dist., Taipei City 105406, Taiwan
          </a>
        </div>

        <div className="flex space-x-3">
          <Image src="/elements/phone.svg" width={20} height={20} alt="" />
          <a href="tel:+886-2-2700-1979">+886-2-27001979</a>
        </div>
      </div>
      <div>iSunCloud. @ 2023. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
