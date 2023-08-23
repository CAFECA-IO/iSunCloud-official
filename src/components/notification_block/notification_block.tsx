import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const NotificationBlock = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  return (
    <div className="relative flex h-auto w-full items-center justify-center bg-lightGray px-4 py-28 font-Barlow lg:px-24">
      {/* Info: (20230704 - Julian) Devider */}
      <div className="absolute -top-30px h-130px w-screen bg-white lg:-top-100px lg:h-200px">
        <Image src={'/elements/devider_neo.png'} fill alt="divider" style={{objectFit: 'cover'}} />
      </div>
      <div className="z-20 rounded-3xl bg-white px-6 py-12 shadow-2xl lg:px-20">
        <h1 className="text-3xl font-semibold text-brandOrange lg:text-5xl">
          {t('HOME_PAGE.NOTICE_TITLE')}
        </h1>
        <p className="mt-4 p-4 text-center text-base text-darkBlue lg:text-left lg:text-xl">
          {t('HOME_PAGE.NOTICE_DESCRIPTION')}
        </p>
      </div>
    </div>
  );
};

export default NotificationBlock;
