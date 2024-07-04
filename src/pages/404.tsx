import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/nav_bar/nav_bar';
import Footer from '../components/footer/footer';
import {useTranslation} from 'next-i18next';
import {TranslateFunction, ILocale} from '../interfaces/locale';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

const NotFoundPage = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <title>iSunCloud - {t('NOT_FOUND_PAGE.PAGE_TITLE')}</title>
      </Head>

      <NavBar />

      <main className="flex min-h-screen w-full flex-1 flex-col items-center justify-center overflow-x-hidden overflow-y-hidden text-center font-Barlow">
        <div className="mt-20 flex h-full w-full flex-col items-center space-y-3 px-4">
          <div className="relative block h-200px w-90vw lg:h-350px lg:w-500px">
            <Image src="/elements/404.png" fill style={{objectFit: 'contain'}} alt="404_image" />
          </div>
          <div className="flex flex-col items-center text-xl font-bold">
            <h1 className="uppercase text-brandOrange">{t('NOT_FOUND_PAGE.TITLE')}</h1>
            <p className="text-darkBlue">{t('NOT_FOUND_PAGE.DESCRIPTION')}</p>
          </div>
          <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
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

export default NotFoundPage;
