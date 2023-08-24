import Head from 'next/head';
import NavBar from '../components/nav_bar/nav_bar';
import Footer from '../components/footer/footer';
import Milestone from '../components/milestone/milestone';
import {useTranslation} from 'next-i18next';
import {TranslateFunction, ILocale} from '../interfaces/locale';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

const OurHistoryPage = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <title>iSunCloud - {t('NAV_BAR.OUR_HISTORY')}</title>
      </Head>

      <NavBar />

      <main className="flex w-full flex-1 flex-col items-center text-center">
        {/* Info: (20230824 - Julian) Milestone */}
        <Milestone />
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

export default OurHistoryPage;
