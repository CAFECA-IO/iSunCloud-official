import Head from 'next/head';
import NavBar from '../components/nav_bar/nav_bar';
import Footer from '../components/footer/footer';
import MainBlock from '../components/main_block/main_block';
import NotificationBlock from '../components/notification_block/notification_block';
import CatchUp from '../components/catch_up/catch_up';
import WhatWeDo from '../components/what_we_do/what_we_do';
import Milestone from '../components/milestone/milestone';
import WhyUs from '../components/why_us/why_us';
import ContactUsForm from '../components/contact_us_form/contact_us_form';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {ILocale} from '../interfaces/locale';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center overflow-x-hidden overflow-y-hidden">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
        <title>iSunCloud 台灣陽光雲有限公司</title>
        <meta
          name="description"
          content="iSunCloud 是開創性的金融科技軟體公司，我們致力於推動區塊鏈與金融領域的發展，引領行業的進步與變革。"
        />
        <meta name="author" content="CAFECA" />
        <meta name="keywords" content="金融科技, 區塊鏈,人工智慧" />

        <meta property="og:title" content="iSunCloud 台灣陽光雲有限公司" />
        <meta
          property="og:description"
          content="iSunCloud 是開創性的金融科技軟體公司，我們致力於推動區塊鏈與金融領域的發展，引領行業的進步與變革。"
        />
      </Head>

      <NavBar />

      <main className="flex w-full flex-1 flex-col items-center text-center">
        {/* Info: (20230615 - Julian) Enable the Fintech of Tomorrow */}
        <MainBlock />

        {/* Info: (20230615 - Julian) Important Notice */}
        <NotificationBlock />

        {/* Info: (20230615 - Julian) Catch Up */}
        <CatchUp />

        {/* Info: (20230615 - Julian) What we do */}
        <WhatWeDo />

        {/* Info: (20230615 - Julian) Milestone */}
        <Milestone />

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
