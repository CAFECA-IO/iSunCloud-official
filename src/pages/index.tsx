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
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden overflow-y-hidden py-2">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="iSunCloud_official_website" />
        <meta name="keywords" content="iSunCloud" />

        <title>iSunCloud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex w-full flex-1 flex-col items-center text-center">
        {/* Info: (20230615 - Julian) Enable the Fintech of Tomorrow */}
        <div className="flex h-auto w-full bg-fintech bg-right bg-no-repeat px-10 py-56 text-left text-darkBlue lg:px-16 lg:py-80">
          <div className="flex flex-col justify-center space-y-8 lg:w-5/10">
            <h1 className="text-5xl font-semibold lg:text-6xl">{t('HOME_PAGE.MAIN_TITLE')}</h1>
            <p className="w-7/10 text-sm">{t('HOME_PAGE.MAIN_DESCRIPTION')}</p>
            <Link
              href="/#contact_us"
              scroll={false}
              className="group mt-5 flex items-center whitespace-nowrap"
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
        <div className="relative flex h-auto w-full items-center justify-center bg-gradient-to-b from-transparent to-lightGray3 px-4 py-28 lg:px-24">
          <Image
            src={'/elements/devider.svg'}
            width={0}
            height={0}
            style={{width: '100%', height: 'auto', position: 'absolute', top: '-100px'}}
            alt=""
          />
          <div className="z-20 rounded-3xl bg-lightWhite px-4 py-12 shadow-2xl lg:px-20">
            <h1 className="text-5xl font-semibold text-brandOrange">
              {t('HOME_PAGE.NOTICE_TITLE')}
            </h1>
            <p className="mt-4 p-4 text-left text-xl text-darkBlue">
              {t('HOME_PAGE.NOTICE_DESCRIPTION')}
            </p>
          </div>
        </div>

        {/* Info: (20230615 - Julian) Catch Up */}
        <div className="flex h-auto w-full items-center justify-center py-24 lg:px-24">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-2 text-center text-darkBlue">
              <h1 className="text-54px font-semibold">{t('HOME_PAGE.CATCH_UP_TITLE')}</h1>
              <h1 className="text-5xl font-semibold">
                {t('HOME_PAGE.CATCH_UP_SUBTITLE_1')}
                <span className="text-brandOrange">
                  {t('HOME_PAGE.CATCH_UP_SUBTITLE_HIGHLIGHT')}
                </span>
                {t('HOME_PAGE.CATCH_UP_SUBTITLE_2')}
              </h1>
            </div>

            <div className="grid grid-cols-1 gap-2 py-24 text-darkBlue lg:grid-cols-2">
              <div className="flex flex-col items-center p-10">
                <div className="p-2">
                  <Image src="/elements/safty.svg" width={80} height={80} alt="Security" />
                </div>
                <h3 className="p-4 text-xl font-semibold">Security</h3>
                <p className="text-lg">
                  Blockchain technology provides a secure and immutable ledger, protecting sensitive
                  financial data from unauthorized access and fraud.
                </p>
              </div>

              <div className="flex flex-col items-center p-10">
                <div className="p-2">
                  <Image src="/elements/efficiency.svg" width={80} height={80} alt="Efficiency" />
                </div>
                <h3 className="p-4 text-xl font-semibold">Efficiency</h3>
                <p className="text-lg">
                  By automating and digitizing manual processes, blockchain reduces paperwork,
                  enhances operational efficiency, and minimizes errors.
                </p>
              </div>

              <div className="flex flex-col items-center p-10">
                <div className="p-2">
                  <Image src="/elements/compliance.svg" width={80} height={80} alt="Compliance" />
                </div>
                <h3 className="p-4 text-xl font-semibold">Compliance</h3>
                <p className="text-lg">
                  Blockchain's transparent and auditable nature simplifies regulatory compliance,
                  reducing the burden on financial institutions and enhancing trust.
                </p>
              </div>

              <div className="flex flex-col items-center p-10">
                <div className="p-2">
                  <Image src="/elements/innovation.svg" width={80} height={80} alt="Innovation" />
                </div>
                <h3 className="p-4 text-xl font-semibold">Innovation</h3>
                <p className="text-lg">
                  Embracing blockchain technology opens doors to collaboration with other
                  institutions, fosters innovation, and positions financial institutions at the
                  forefront of technological advancements in the industry.
                </p>
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
