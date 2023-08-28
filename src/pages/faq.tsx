import Head from 'next/head';
import NavBar from '../components/nav_bar/nav_bar';
import Footer from '../components/footer/footer';
import Image from 'next/image';
import FaqItem from '../components/faq_item/faq_item';
import {useState} from 'react';
import {faqContent} from '../constants/config';
import {useTranslation} from 'next-i18next';
import {TranslateFunction, ILocale} from '../interfaces/locale';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

const FaqPage = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');
  const [showAnswerId, setShowAnswerId] = useState('');

  const faqList = faqContent.map(item => {
    return (
      <FaqItem
        key={item.id}
        id={item.id}
        question={item.question}
        answer={item.answer}
        showAnswerId={showAnswerId}
        setShowAnswerId={setShowAnswerId}
      />
    );
  });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <title>iSunCloud - {t('NAV_BAR.FAQ')}</title>
      </Head>

      <NavBar />

      <main className="flex w-full flex-1 flex-col items-center text-center font-Barlow">
        <div className="mt-20 flex h-full w-full flex-col items-center space-y-16 px-4 py-20 lg:px-20">
          <div className="flex flex-col items-center space-y-4">
            <h2 className="text-sm font-bold uppercase text-brandOrange lg:text-xl">
              {t('FAQ.SUBTITLE')}
            </h2>
            <h1 className="text-2xl font-bold lg:text-5xl">{t('FAQ.TITLE')}</h1>
            <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
          </div>
          {/* Info: (20230828 - Julian) FAQ Items */}
          <div className="flex w-full flex-col items-center space-y-4 lg:w-4/5">{faqList}</div>
        </div>
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

export default FaqPage;
