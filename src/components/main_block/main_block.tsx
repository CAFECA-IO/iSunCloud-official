import Link from 'next/link';
import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const MainBlock = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  return (
    <div className="flex h-screen w-full items-center bg-right bg-no-repeat px-4 text-left text-darkBlue lg:bg-kvDesktop lg:px-16">
      <div className="flex flex-col justify-between font-Barlow">
        <div className="lg:hidden">
          <Image
            src={'/elements/kv_mobile.svg'}
            width={0}
            height={0}
            style={{width: '100vw', height: 'auto'}}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 lg:w-6/10 lg:items-start">
          <h1 className="text-4xl font-semibold lg:text-6xl">{t('HOME_PAGE.MAIN_TITLE')}</h1>
          <p className="text-sm lg:w-7/10">{t('HOME_PAGE.MAIN_DESCRIPTION')}</p>
        </div>
        <Link
          href="/#contact_us"
          scroll={false}
          className="group mx-auto flex items-center whitespace-nowrap pt-10 lg:mx-0 lg:w-3/10"
        >
          <div className="flex items-center space-x-1">
            <span className="h-10px w-10px rounded-full bg-darkOrange transition-all duration-150 ease-in group-hover:mr-1"></span>
            <span className="h-10px w-10px rounded-full bg-brandOrange transition-all duration-150 ease-in group-hover:mr-1"></span>
            <span className="h-10px w-10px rounded-full bg-lightYellow transition-all duration-150 ease-in group-hover:mr-1"></span>
          </div>
          <div className="ml-4 text-xl font-semibold text-darkBlue transition-all duration-150 ease-in group-hover:text-brandOrange">
            {t('NAV_BAR.CONTACT_US')}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainBlock;
