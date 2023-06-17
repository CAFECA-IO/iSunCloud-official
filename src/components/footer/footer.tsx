import Image from 'next/image';
import {ImPhone} from 'react-icons/im';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {iSunCloudAddress} from '../../constants/config';

const Footer = () => {
  return (
    <footer className="flex h-auto w-full flex-col items-center justify-center space-y-4 border-t px-8 py-6 text-darkBlue lg:flex-row lg:space-y-0 lg:px-16">
      <div className="flex flex-1 flex-col space-y-6 lg:flex-row lg:space-x-6 lg:space-y-0">
        <div className="flex items-center space-x-3">
          <FaMapMarkerAlt className="h-20px w-20px text-darkBlue" />
          <a href={iSunCloudAddress} target="_blank">
            8F.-7, No. 207, Dunhua N. Rd., Songshan Dist., Taipei City 105406, Taiwan
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <ImPhone className="h-20px w-20px text-darkBlue" />
          <a href="tel:+886-2-2700-1979">+886-2-27001979</a>
        </div>
      </div>
      <div>iSunCloud. @ 2023. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
