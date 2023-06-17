import {ImPhone} from 'react-icons/im';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {iSunCloudAddressInMap, iSunCloudPhone, iSunCloudCopyRight} from '../../constants/config';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const Footer = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  return (
    <footer className="flex h-auto w-full flex-col items-center justify-center space-y-4 border-t px-8 py-6 text-darkBlue lg:flex-row lg:space-y-0 lg:px-16">
      <div className="flex flex-1 flex-col space-y-6 py-4 lg:flex-row lg:space-x-6 lg:space-y-0 lg:py-0">
        <div className="flex flex-col items-center space-y-2 text-center lg:flex-row lg:space-x-3 lg:space-y-0 lg:text-left">
          <FaMapMarkerAlt className="h-20px w-20px text-darkBlue" />
          <a href={iSunCloudAddressInMap} target="_blank">
            {t('FOOTER.ADDRESS')}
          </a>
        </div>

        <div className="flex flex-col items-center space-y-2 text-center lg:flex-row lg:space-x-3 lg:space-y-0 lg:text-left">
          <ImPhone className="h-20px w-20px text-darkBlue" />
          <a href={`tel:${iSunCloudPhone}`}>{iSunCloudPhone}</a>
        </div>
      </div>
      <div>{iSunCloudCopyRight}</div>
    </footer>
  );
};

export default Footer;
