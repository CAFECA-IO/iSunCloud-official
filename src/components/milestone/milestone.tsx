import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const Milestone = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  // Info: (20230706 - Julian) desktop display
  const desktopDisplay = (
    <ul className="hidden h-auto w-full flex-col items-center pt-10 lg:flex">
      {/* Info: (20230825 - Julian) 2006-2010 Focus Media */}
      <li className="flex w-full items-center">
        <div className="flex h-full w-1/2  flex-col items-start space-y-6 px-20 py-10 text-left">
          <h3 className="text-5xl font-bold">{t('OUR_HISTORY.MILESTONE_1_TITLE')}</h3>
          <p className="text-lg text-darkGray">{t('OUR_HISTORY.MILESTONE_1_DESCRIPTION')}</p>
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex w-1/2 flex-row items-start px-20 py-10">
          <h3 className="flex-1 text-left text-5xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_1_RANGE')}
          </h3>
          <Image
            src="/elements/focus_media.png"
            width={200}
            height={400}
            alt="a smartphone displaying 'Focus Media'"
          />
        </div>
      </li>
      {/* Info: (20230825 - Julian) 2010 iSunCloud - Hong Kong */}
      <li className="flex w-full items-center">
        <div className="flex w-1/2 flex-col items-end space-y-10 px-20 py-10">
          <h3 className="flex-1 text-5xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_2_RANGE')}
          </h3>
          <Image
            src="/elements/location_in_hk.png"
            width={200}
            height={200}
            alt="a location pin in Hong Kong"
          />
        </div>

        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10 text-left">
          <h3 className="text-5xl font-bold">{t('OUR_HISTORY.MILESTONE_2_TITLE')}</h3>
          <p className="text-lg text-darkGray">{t('OUR_HISTORY.MILESTONE_2_DESCRIPTION')}</p>
        </div>
      </li>
      {/* Info: (20230825 - Julian) 2011-2014 iSunCloud - Beijing, Hong Kong */}
      <li className="flex w-full items-center">
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10 text-left">
          <h3 className="text-5xl font-bold">{t('OUR_HISTORY.MILESTONE_3_TITLE')}</h3>
          <p className="text-lg text-darkGray">{t('OUR_HISTORY.MILESTONE_3_DESCRIPTION')}</p>
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex w-1/2 flex-col items-start space-y-10 px-20 py-10">
          <h3 className="flex-1 text-5xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_3_RANGE')}
          </h3>
          <Image
            src="/elements/cloud_1.png"
            width={181}
            height={200}
            alt="a hand holding a smartphone that displays cloud storage"
          />
        </div>
      </li>
      {/* Info: (20230825 - Julian) 2015 iSunCloud - Taiwan */}
      <li className="flex w-full items-center">
        <div className="flex w-1/2 flex-col items-end space-y-10 px-20 py-10">
          <h3 className="flex-1 text-5xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_4_RANGE')}
          </h3>
          <Image
            src="/elements/location_in_tw.png"
            width={200}
            height={200}
            alt="a location pin in Taiwan"
          />
        </div>

        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10 text-left">
          <h3 className="text-5xl font-bold">{t('OUR_HISTORY.MILESTONE_4_TITLE')}</h3>
          <p className="text-lg text-darkGray">{t('OUR_HISTORY.MILESTONE_4_DESCRIPTION')}</p>
        </div>
      </li>
      {/* Info: (20230706 - Julian) 2015-2016 iSunCloud - Taiwan */}
      <li className="flex w-full items-center">
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10 text-left">
          <h3 className="text-5xl font-bold">{t('OUR_HISTORY.MILESTONE_5_TITLE')}</h3>
          <p className="text-lg text-darkGray">{t('OUR_HISTORY.MILESTONE_5_DESCRIPTION')}</p>
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex w-1/2 flex-col space-y-10 px-20 py-10">
          <h3 className="text-left text-5xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_5_RANGE')}
          </h3>
          <Image
            src="/elements/stream_1.png"
            width={560}
            height={360}
            alt="a picture of a video player playing pop music"
          />
        </div>
      </li>
      {/* Info: (20230706 - Julian) 2017-2018 iSunCloud - Taiwan */}
      <li className="flex w-full items-center">
        <div className="flex w-1/2 flex-col items-end space-y-10 px-20 py-10">
          <h3 className="flex-1 text-5xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_6_RANGE')}
          </h3>
          <Image
            src="/elements/accounting_auditing_1.png"
            width={578}
            height={385}
            alt="a laptop displaying financial statements"
          />
        </div>

        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10 text-left">
          <h3 className="text-5xl font-bold">{t('OUR_HISTORY.MILESTONE_6_TITLE')}</h3>
          <p className="text-lg text-darkGray">{t('OUR_HISTORY.MILESTONE_6_DESCRIPTION')}</p>
        </div>
      </li>
      {/* Info: (20230706 - Julian) 2018 iSunCloud - Taiwan */}
      <li className="flex w-full items-center">
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10 text-left">
          <h3 className="text-5xl font-bold">{t('OUR_HISTORY.MILESTONE_7_TITLE')}</h3>
          <p className="text-lg text-darkGray">{t('OUR_HISTORY.MILESTONE_7_DESCRIPTION')}</p>
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex w-1/2 flex-col space-y-10 px-20 py-10">
          <h3 className="text-left text-5xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_7_RANGE')}
          </h3>
          <Image
            src="/elements/visa.png"
            width={450}
            height={380}
            alt="a hand holding a credit card"
          />
        </div>
      </li>
      {/* Info: (20230706 - Julian) 2019-2021 iSunCloud - Taiwan */}
      <li className="flex w-full items-center">
        <div className="flex w-1/2 flex-col space-y-10 px-20 py-10">
          <h3 className="text-right text-5xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_8_RANGE')}
          </h3>
          <Image
            src="/elements/stream_2.png"
            width={560}
            height={350}
            alt="a PC displaying 'zero-knowledge proof'"
          />
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10 text-left">
          <h3 className="text-5xl font-bold">{t('OUR_HISTORY.MILESTONE_8_TITLE')}</h3>
          <p className="text-lg ">{t('OUR_HISTORY.MILESTONE_8_DESCRIPTION')}</p>
        </div>
      </li>
      {/* Info: (20230706 - Julian) 2022-Present iSunCloud - Taiwan */}
      <li className="flex w-full items-center">
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10 text-left">
          <h3 className="text-5xl font-bold">{t('OUR_HISTORY.MILESTONE_9_TITLE')}</h3>
          <p className="text-lg text-darkGray">{t('OUR_HISTORY.MILESTONE_9_DESCRIPTION')}</p>
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex w-1/2 flex-col items-start space-y-10 px-20 py-10">
          <h3 className="flex-1 text-5xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_9_RANGE')}
          </h3>
          <Image
            src="/elements/AI_1.png"
            width={280}
            height={280}
            alt="a robot touching a tablet PC"
          />
        </div>
      </li>
    </ul>
  );

  // Info: (20230706 - Julian) Mobile display
  const mobileDisplay = (
    <ul className="flex h-auto w-full flex-col items-center pt-10 lg:hidden">
      {/* Info: (20230825 - Julian) 2006-2010 Focus Media */}
      <li className="flex w-full items-start">
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-4 pt-40 text-left">
          <h3 className="text-xl font-bold">{t('OUR_HISTORY.MILESTONE_1_TITLE')}</h3>
          <p className="text-sm text-darkGray">{t('OUR_HISTORY.MILESTONE_1_DESCRIPTION')}</p>
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-32 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex w-1/2 flex-col items-center space-y-6 px-4 pt-40">
          <h3 className="flex-1 text-left text-2xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_1_RANGE')}
          </h3>
          <Image
            src="/elements/focus_media.png"
            width={128}
            height={299}
            alt="a smartphone displaying 'Focus Media'"
          />
        </div>
      </li>
      {/* Info: (20230825 - Julian) 2010 iSunCloud - Hong Kong */}
      <li className="flex w-full items-start">
        <div className="flex w-1/2 flex-col items-end space-y-10 px-4 pt-40">
          <h3 className="flex-1 text-32px font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_2_RANGE')}
          </h3>
          <Image
            src="/elements/location_in_hk.png"
            width={128}
            height={128}
            alt="a location pin in Hong Kong"
          />
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-20 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-4 pt-40 text-left">
          <h3 className="text-xl font-bold">{t('OUR_HISTORY.MILESTONE_2_TITLE')}</h3>
          <p className="text-sm text-darkGray">{t('OUR_HISTORY.MILESTONE_2_DESCRIPTION')}</p>
        </div>
      </li>
      {/* Info: (20230825 - Julian) 2011-2014 iSunCloud - Beijing, Hong Kong */}
      <li className="flex w-full items-start">
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-4 pt-40 text-left">
          <h3 className="text-xl font-bold">{t('OUR_HISTORY.MILESTONE_3_TITLE')}</h3>
          <p className="text-sm text-darkGray">{t('OUR_HISTORY.MILESTONE_3_DESCRIPTION')}</p>
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex w-1/2 flex-col items-start space-y-10 px-4 pt-40">
          <h3 className="flex-1 text-2xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_3_RANGE')}
          </h3>
          <Image
            src="/elements/cloud_1.png"
            width={128}
            height={141}
            alt="a hand holding a smartphone that displays cloud storage"
          />
        </div>
      </li>
      {/* Info: (20230825 - Julian) 2015 iSunCloud - Taiwan */}
      <li className="flex w-full items-start">
        <div className="flex w-1/2 flex-col items-end space-y-10 px-4 pt-40">
          <h3 className="flex-1 text-2xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_4_RANGE')}
          </h3>
          <Image
            src="/elements/location_in_tw.png"
            width={128}
            height={128}
            alt="a location pin in Taiwan"
          />
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-20 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-4 pt-40 text-left">
          <h3 className="text-xl font-bold">{t('OUR_HISTORY.MILESTONE_4_TITLE')}</h3>
          <p className="text-sm text-darkGray">{t('OUR_HISTORY.MILESTONE_4_DESCRIPTION')}</p>
        </div>
      </li>
      {/* Info: (20230706 - Julian) 2015-2016 iSunCloud - Taiwan */}
      <li className="flex w-full items-start">
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-4 pt-40 text-left">
          <h3 className="text-xl font-bold">{t('OUR_HISTORY.MILESTONE_5_TITLE')}</h3>
          <p className="text-sm text-darkGray">{t('OUR_HISTORY.MILESTONE_5_DESCRIPTION')}</p>
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-20 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex w-1/2 flex-col space-y-10 px-4 pt-40">
          <h3 className="text-left text-2xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_5_RANGE')}
          </h3>
          <Image
            src="/elements/stream_1.png"
            width={150}
            height={100}
            alt="a picture of a video player playing pop music"
          />
        </div>
      </li>
      {/* Info: (20230706 - Julian) 2017-2018 iSunCloud - Taiwan */}
      <li className="flex w-full items-start">
        <div className="flex w-1/2 flex-col items-end space-y-10 px-4 pt-40">
          <h3 className="flex-1 text-2xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_6_RANGE')}
          </h3>
          <Image
            src="/elements/accounting_auditing_1.png"
            width={150}
            height={100}
            alt="a laptop displaying financial statements"
          />
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-20 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-4 pt-40 text-left">
          <h3 className="text-xl font-bold">{t('OUR_HISTORY.MILESTONE_6_TITLE')}</h3>
          <p className="text-sm text-darkGray">{t('OUR_HISTORY.MILESTONE_6_DESCRIPTION')}</p>
        </div>
      </li>
      {/* Info: (20230706 - Julian) 2018 iSunCloud - Taiwan */}
      <li className="flex w-full items-start">
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-4 pt-40 text-left">
          <h3 className="text-xl font-bold">{t('OUR_HISTORY.MILESTONE_7_TITLE')}</h3>
          <p className="text-sm text-darkGray">{t('OUR_HISTORY.MILESTONE_7_DESCRIPTION')}</p>
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-20 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex w-1/2 flex-col space-y-10 px-4 pt-40">
          <h3 className="text-left text-2xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_7_RANGE')}
          </h3>
          <Image
            src="/elements/visa.png"
            width={128}
            height={108}
            alt="a hand holding a credit card"
          />
        </div>
      </li>
      {/* Info: (20230706 - Julian) 2019-2021 iSunCloud - Taiwan */}
      <li className="flex w-full items-start">
        <div className="flex w-1/2 flex-col space-y-10 px-4 pt-40">
          <h3 className="text-right text-2xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_8_RANGE')}
          </h3>
          <Image
            src="/elements/stream_2.png"
            width={128}
            height={80}
            alt="a PC displaying 'zero-knowledge proof'"
          />
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-20 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-4 pt-40 text-left">
          <h3 className="text-xl font-bold">{t('OUR_HISTORY.MILESTONE_8_TITLE')}</h3>
          <p className="text-sm text-darkGray">{t('OUR_HISTORY.MILESTONE_8_DESCRIPTION')}</p>
        </div>
      </li>
      {/* Info: (20230706 - Julian) 2022-Present iSunCloud - Taiwan */}
      <li className="flex w-full items-start">
        <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-4 py-40 text-left">
          <h3 className="text-xl font-bold">{t('OUR_HISTORY.MILESTONE_9_TITLE')}</h3>
          <p className="text-sm text-darkGray">{t('OUR_HISTORY.MILESTONE_9_DESCRIPTION')}</p>
        </div>
        <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-20 before:h-30px before:w-15px before:bg-brandOrange" />
        <div className="flex w-1/2 flex-col items-start space-y-10 px-4 py-40">
          <h3 className="flex-1 text-left text-2xl font-bold text-brandOrange">
            {t('OUR_HISTORY.MILESTONE_9_RANGE')}
          </h3>
          <Image
            src="/elements/AI_1.png"
            width={280}
            height={280}
            alt="a robot touching a tablet PC"
          />
        </div>
      </li>
    </ul>
  );

  return (
    <div className="flex w-screen flex-col items-center justify-center py-20 font-Barlow lg:px-10">
      <div className="flex flex-col items-center space-y-4 text-darkBlue">
        <h2 className="text-4xl font-semibold lg:text-6xl">{t('OUR_HISTORY.MILESTONE_TITLE')}</h2>
        <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
      </div>

      <div className="flex w-full lg:pt-10">
        {desktopDisplay}
        {mobileDisplay}
      </div>
    </div>
  );
};

export default Milestone;
