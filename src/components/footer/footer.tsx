import Image from 'next/image';
import {ImPhone, ImFacebook, ImTwitter, ImLinkedin2} from 'react-icons/im';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {
  iSunCloudCopyRight,
  iSunCloudTaiwan,
  iSunCloudHongKong,
  iSunCloudUSA,
} from '../../constants/config';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const Footer = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  return (
    <footer className="flex h-auto w-full flex-col items-center justify-center space-y-4 border-t px-8 py-10 text-darkBlue lg:flex-row lg:space-y-0 lg:px-20">
      <div className="grid w-full grid-cols-1 gap-7 lg:grid-cols-4 lg:gap-16">
        {/* Info: (20230707 - Julian) Taiwan Office */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <h2 className="font-bold lg:text-xl">{t('FOOTER.TAIWAN_OFFICE')}</h2>
            <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
          </div>
          <div className="flex flex-col items-start space-y-6">
            {/* Info: (20230707 - Julian) Address */}
            <div className="inline-flex space-x-2">
              <div className="">
                <FaMapMarkerAlt className="text-2xl text-brandOrange" />
              </div>
              <a href={iSunCloudTaiwan.inMap} target="_blank" className="text-sm leading-normal">
                {iSunCloudTaiwan.address}
              </a>
            </div>
            {/* Info: (20230707 - Julian) Phone */}
            <div className="inline-flex space-x-2">
              <div className="">
                <ImPhone className="text-2xl text-brandOrange" />
              </div>
              <a href={`tel:${iSunCloudTaiwan.phone}`} className="text-sm">
                {iSunCloudTaiwan.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Info: (20230707 - Julian) Hong Kong Office */}
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold lg:text-xl">{t('FOOTER.HONGKONG_OFFICE')}</h2>
          <div className="flex flex-col items-start space-y-6">
            {/* Info: (20230707 - Julian) Address */}
            <div className="inline-flex space-x-2">
              <div className="">
                <FaMapMarkerAlt className="text-2xl text-brandOrange" />
              </div>
              <a href={iSunCloudHongKong.inMap} target="_blank" className="text-sm leading-normal">
                {iSunCloudHongKong.address}
              </a>
            </div>
            {/* Info: (20230707 - Julian) Phone */}
            <div className="inline-flex space-x-2">
              <div className="">
                <ImPhone className="text-2xl text-brandOrange" />
              </div>
              <a href={`tel:${iSunCloudHongKong.phone}`} className="text-sm">
                {iSunCloudHongKong.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Info: (20230707 - Julian) USA Office */}
        <div className="flex flex-col space-y-4">
          <h2 className="font-bold lg:text-xl">{t('FOOTER.USA_OFFICE')}</h2>
          <div className="flex flex-col items-start space-y-6">
            {/* Info: (20230707 - Julian) Address */}
            <div className="inline-flex space-x-2">
              <div className="">
                <FaMapMarkerAlt className="text-2xl text-brandOrange" />
              </div>
              <p className="text-sm leading-normal">{iSunCloudUSA.address}</p>
            </div>
            {/* Info: (20230707 - Julian) Phone */}
            <div className="inline-flex space-x-2">
              <div className="">
                <ImPhone className="text-2xl text-brandOrange" />
              </div>
              <a href={`tel:${iSunCloudUSA.phone}`} className="text-sm">
                {iSunCloudUSA.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Info: (20230707 - Julian) Contact Info & Copyright */}
        <div className="flex flex-col items-center space-y-6 lg:items-end lg:justify-between">
          {/* Info: (20230707 - Julian) Social Media */}
          <div className="flex space-x-4 text-2xl opacity-0">
            <ImFacebook />
            <ImTwitter />
            <ImLinkedin2 />
          </div>
          <p className="whitespace-nowrap text-right text-sm">{iSunCloudCopyRight}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
