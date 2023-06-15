import Head from 'next/head';
import Image from 'next/image';
import NavBar from '../components/nav_bar/nav_bar';

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
            <div className="mt-5 flex items-center whitespace-nowrap">
              <Image src="/elements/buttonFrame.svg" width={40} height={10} alt="" />
              <div className="ml-4 font-semibold">Contact Us</div>
            </div>
          </div>
        </div>

        {/* Info: (20230615 - Julian) Important Notice */}
        <div className="flex h-auto w-full items-center justify-center bg-lightGray bg-divider bg-top1 bg-no-repeat px-24 py-32">
          <div className="rounded-3xl bg-white px-20 py-12 shadow-2xl">
            <h1 className="text-5xl font-semibold text-brandOrange">Important Notice</h1>
            <p className="mt-4 p-4 text-xl">
              Beware of fraudulent activities! We are aware of unauthorized entities using our
              company name to deceive individuals into fraudulent investments. Please note that we
              never solicit investments directly. Protect your funds and exercise caution. Contact
              our verified channels for trusted information or any queries. Stay safe from scams.
            </p>
          </div>
        </div>

        {/* Info: (20230615 - Julian) Catch Up */}
        <div className="flex h-auto w-full items-center justify-center px-24 py-24">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center space-y-2 text-darkBlue">
              <h1 className="text-54 font-semibold">Catch Up!</h1>
              <h1 className="text-5xl font-semibold">
                Be a <span className="text-brandOrange">Pioneer</span> in the Financial Industry
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-2 py-24 text-darkBlue">
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
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Footer @ Example
        </a>
      </footer>
    </div>
  );
};

export default Home;
