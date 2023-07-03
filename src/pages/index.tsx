import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '../components/nav_bar/nav_bar';
import Footer from '../components/footer/footer';
import WhatWeDo from '../components/what_we_do/what_we_do';
import WhyUs from '../components/why_us/why_us';
import ContactUsForm from '../components/contact_us_form/contact_us_form';
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {ILocale, TranslateFunction} from '../interfaces/locale';

const Home = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="iSunCloud_official_website" />
        <meta name="keywords" content="iSunCloud" />

        <title>iSunCloud</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex w-full flex-1 flex-col items-center text-center">
        {/* Info: (20230615 - Julian) Enable the Fintech of Tomorrow */}
        <div className="lg:bg-kvDesktop flex h-screen w-full items-center bg-right bg-no-repeat px-4 text-left text-darkBlue lg:px-16">
          <div className="flex flex-col justify-between">
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
              className="group mx-auto flex items-center whitespace-nowrap pt-10 lg:mx-0"
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

        {/* Info: (20230615 - Julian) Important Notice */}
        <div className="relative flex h-auto w-full items-center justify-center bg-gradient-to-b from-white to-lightGray3 px-4 py-28 lg:px-24">
          <Image
            src={'/elements/devider.svg'}
            width={0}
            height={0}
            style={{width: '100%', height: 'auto', position: 'absolute', top: '-100px'}}
            alt=""
          />
          <div className="z-20 rounded-3xl bg-white px-6 py-12 shadow-2xl lg:px-20">
            <h1 className="text-3xl font-semibold text-brandOrange lg:text-5xl">
              {t('HOME_PAGE.NOTICE_TITLE')}
            </h1>
            <p className="mt-4 p-4 text-center text-base text-darkBlue lg:text-left lg:text-xl">
              {t('HOME_PAGE.NOTICE_DESCRIPTION')}
            </p>
          </div>
        </div>

        {/* Info: (20230615 - Julian) Catch Up */}
        <div className="flex h-auto w-full items-center justify-center py-24 lg:px-24">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-2 text-center text-darkBlue">
              <h1 className="text-4xl font-semibold lg:text-54px">
                {t('HOME_PAGE.CATCH_UP_TITLE')}
              </h1>
              <h1 className="text-4xl font-semibold lg:text-5xl">
                {t('HOME_PAGE.CATCH_UP_SUBTITLE_1')}
                <span className="text-brandOrange">
                  {t('HOME_PAGE.CATCH_UP_SUBTITLE_HIGHLIGHT')}
                </span>
                {t('HOME_PAGE.CATCH_UP_SUBTITLE_2')}
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-2 py-5 text-darkBlue lg:grid-cols-2 lg:py-24">
              <div className="flex flex-col items-center p-10">
                <div className="p-2">
                  <Image src="/elements/safty.svg" width={80} height={80} alt="Security" />
                </div>
                <h3 className="p-4 text-xl font-semibold">
                  {t('HOME_PAGE.CATCH_UP_SECURITY_TITLE')}
                </h3>
                <p className="text-lg">{t('HOME_PAGE.CATCH_UP_SECURITY_DESCRIPTION')}</p>
              </div>

              <div className="flex flex-col items-center p-10">
                <div className="p-2">
                  <Image src="/elements/efficiency.svg" width={80} height={80} alt="Efficiency" />
                </div>
                <h3 className="p-4 text-xl font-semibold">
                  {t('HOME_PAGE.CATCH_UP_EFFICIENCY_TITLE')}
                </h3>
                <p className="text-lg">{t('HOME_PAGE.CATCH_UP_EFFICIENCY_DESCRIPTION')}</p>
              </div>

              <div className="flex flex-col items-center p-10">
                <div className="p-2">
                  <Image src="/elements/compliance.svg" width={80} height={80} alt="Compliance" />
                </div>
                <h3 className="p-4 text-xl font-semibold">
                  {t('HOME_PAGE.CATCH_UP_COMPLIANCE_TITLE')}
                </h3>
                <p className="text-lg">{t('HOME_PAGE.CATCH_UP_COMPLIANCE_DESCRIPTION')}</p>
              </div>

              <div className="flex flex-col items-center p-10">
                <div className="p-2">
                  <Image src="/elements/innovation.svg" width={80} height={80} alt="Innovation" />
                </div>
                <h3 className="p-4 text-xl font-semibold">
                  {t('HOME_PAGE.CATCH_UP_INNOVATION_TITLE')}
                </h3>
                <p className="text-lg">{t('HOME_PAGE.CATCH_UP_INNOVATION_DESCRIPTION')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info: (20230615 - Julian) What we do */}
        <WhatWeDo />

        {/* Info: (20230615 - Julian) Why iSunCloud */}
        <WhyUs />

        {/* Info: (20230615 - Julian) Contact us */}
        <ContactUsForm />
      </main>

      <Footer />
    </div>
  );
};

const getStaticPropsFunction = async ({locale}: ILocale) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export const getStaticProps = getStaticPropsFunction;

export default Home;
