import {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/nav_bar/nav_bar';
import Footer from '../components/footer/footer';
import {iSunNodeName, iSunNodeReleaseDate, defaultReleaseDate} from '../constants/config';
import {useTranslation} from 'next-i18next';
import {TranslateFunction, ILocale} from '../interfaces/locale';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

const ComingSoonPage = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');
  const [countdown, setCountdown] = useState(0);
  const releaseTimestamp = new Date(iSunNodeReleaseDate ?? defaultReleaseDate).getTime() / 1000;

  let timer: NodeJS.Timeout;
  useEffect(() => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      const remains = releaseTimestamp - currentTimestamp;
      setCountdown(remains);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const displayedCountdown = (countdown: number) => {
    const remainMins =
      countdown < 3600 ? Math.floor(countdown / 60) : Math.floor((countdown % 3600) / 60);
    const remainHours =
      countdown < 86400 ? Math.floor(countdown / 3600) : Math.floor((countdown % 86400) / 3600);
    const remainDays = Math.floor(countdown / 86400);

    return (
      <div className="mb-3 flex items-end space-x-2 text-3xl font-bold text-lightWhite lg:text-6xl">
        {/* Info: (20231005 - Julian) Days */}
        <p>
          {remainDays}
          <span className="ml-2 text-xl font-normal uppercase text-brandOrange">
            {t('COMING_SOON_PAGE.DAYS')}
          </span>
        </p>
        {/* Info: (20231005 - Julian) Hours */}
        <p>
          {remainHours}
          <span className="ml-2 text-xl font-normal uppercase text-brandOrange">
            {t('COMING_SOON_PAGE.HOURS')}
          </span>
        </p>
        {/* Info: (20231005 - Julian) Minutes */}
        <p>
          {remainMins}
          <span className="ml-2 text-xl font-normal uppercase text-brandOrange">
            {t('COMING_SOON_PAGE.MINUTES')}
          </span>
        </p>
      </div>
    );
  };

  const displayedCountdownTimer = displayedCountdown(countdown);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <title>iSunCloud - {t('COMING_SOON_PAGE.PAGE_TITLE')}</title>
      </Head>

      <NavBar />

      <main className="mt-20 flex min-h-screen w-full flex-1 flex-col items-center overflow-x-hidden overflow-y-hidden text-center font-Barlow">
        <div className="relative flex h-screen w-screen items-center justify-center bg-questioning bg-cover bg-fixed bg-no-repeat px-4 lg:px-20">
          <Image src="/filter/blue.svg" fill style={{objectFit: 'cover'}} alt="" />
          <div className="z-10 flex w-full flex-col items-center lg:flex-row lg:space-x-4">
            {/* Info: (20231005 - Julian) isunnode app demo image */}
            <div className="relative h-250px w-90vw lg:h-400px lg:w-1/2">
              <Image
                src="/elements/isunnode_app.png"
                fill
                style={{objectFit: 'contain'}}
                alt="isunnode_app_demo"
              />
            </div>
            {/* Info: (20231005 - Julian) text line */}
            <div className="flex flex-1 flex-col items-center">
              <p className="text-xl font-bold uppercase text-brandOrange">{iSunNodeName}</p>
              <h1 className="mb-10 mt-4 text-5xl text-lightWhite lg:mb-20 lg:text-7xl">
                {t('COMING_SOON_PAGE.TITLE')}
              </h1>
              {/* Info: (20231005 - Julian) countdown timer */}
              {displayedCountdownTimer}
              <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const getStaticPropsFunction = async ({locale}: ILocale) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export const getStaticProps = getStaticPropsFunction;

export default ComingSoonPage;
