import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/nav_bar/nav_bar';
import Footer from '../components/footer/footer';
import WhatWeDo from '../components/what_we_do/what_we_do';
import WhyUs from '../components/why_us/why_us';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>iSunCloud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className="flex w-full flex-1 flex-col items-center text-center">
        {/* Info: (20230615 - Julian) Enable the Fintech of Tomorrow */}
        <div className="flex h-1000px w-full bg-fintech bg-center bg-right bg-no-repeat px-16 pt-24 text-left text-darkBlue">
          <div className="flex w-5/10 flex-col justify-center space-y-8">
            <h1 className="text-6xl font-semibold">Enable the Fintech of Tomorrow</h1>
            <p className="w-7/10 text-sm">
              iSunCloud: A Trailblazing Fintech Software Startup Driving the Advancement of
              Blockchain and Finance
            </p>
            {/* ToDo: (20230615 - Julian) Contact Us */}
            <div className="mt-5 flex hidden items-center whitespace-nowrap">
              <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
              <div className="ml-4 font-semibold">Contact Us</div>
            </div>
          </div>
        </div>

        {/* Info: (20230615 - Julian) Important Notice */}
        <div className="flex h-auto w-full items-center justify-center bg-lightGray bg-divider bg-top1 bg-no-repeat px-4 py-28 lg:px-24">
          <div className="rounded-3xl bg-lightWhite px-4 py-12 shadow-2xl lg:px-20">
            <h1 className="text-5xl font-semibold text-brandOrange">Important Notice</h1>
            <p className="text-darkblue mt-4 p-4 text-left text-xl">
              近來詐騙手段層出不窮，提醒您：台灣陽光雲有限公司絕不會提供任何形式的「理財建議」、「基金投資」或「代客操盤」等服務，更不會向用戶擬定任何投資契約。若您收到任何通訊、簡訊、電話或社群軟體邀請您加入投資群組，並保證「高獲利、低風險」等投資回報，請您立即撥打
              165 反詐騙專線進行查證。切勿向對方透露任何金融資料或個人資訊，以確保您的權益不受損害。
            </p>
          </div>
        </div>

        {/* Info: (20230615 - Julian) Catch Up */}
        <div className="flex h-auto w-full items-center justify-center py-24 lg:px-24">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-2 text-darkBlue">
              <h1 className="text-54 font-semibold">Catch Up!</h1>
              <h1 className="text-5xl font-semibold">
                Be a <span className="text-brandOrange">Pioneer</span> in the Financial Industry
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
      </main>

      <Footer />
    </div>
  );
};

export default Home;
