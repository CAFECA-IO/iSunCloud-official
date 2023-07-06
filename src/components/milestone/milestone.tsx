import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const Milestone = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  return (
    <div className="flex w-screen flex-col items-center justify-center px-10 pt-24 font-Barlow">
      <div className="flex flex-col items-center space-y-4 text-darkBlue">
        <h2 className="text-4xl font-semibold lg:text-54px">{t('HOME_PAGE.MILESTONE_TITLE')}</h2>
        <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
      </div>

      <div className="flex w-full pt-10">
        <ul className="flex h-auto w-full flex-col items-center pt-10">
          {/* Info: (20230705 - Julian) 2006-2010 Focus Media */}
          <li className="flex w-full items-center">
            <div className="flex h-full w-1/2 flex-col items-end space-y-6 px-20 py-10">
              <h3 className="text-2xl font-bold">{t('HOME_PAGE.MILESTONE_1_TITLE')}</h3>
              <p className="text-right text-lg text-black">
                {t('HOME_PAGE.MILESTONE_1_DESCRIPTION')}
              </p>
            </div>
            <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
            <div className="flex w-1/2 px-20 py-10">
              <h3 className="flex-1 text-left text-5xl font-bold">
                {t('HOME_PAGE.MILESTONE_1_RANGE')}
              </h3>
              <Image
                src="/elements/focus_media.png"
                width={200}
                height={400}
                alt="a smartphone displaying 'Focus Media'"
              />
            </div>
          </li>
          {/* Info: (20230705 - Julian) 2011-2014 iSunCloud - Beijing, Hong Kong */}
          <li className="flex w-full items-center">
            <div className="flex w-1/2 flex-col items-end space-y-10 px-20 py-10">
              <h3 className="flex-1 text-5xl font-bold text-brandOrange">
                {t('HOME_PAGE.MILESTONE_2_RANGE')}
              </h3>
              <Image
                src="/elements/cloud_1.png"
                width={180}
                height={200}
                alt="a hand holding a smartphone that displays cloud storage"
              />
            </div>

            <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
            <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10">
              <h3 className="text-2xl font-bold">{t('HOME_PAGE.MILESTONE_2_TITLE')}</h3>
              <p className="text-left text-lg text-black">
                {t('HOME_PAGE.MILESTONE_2_DESCRIPTION')}
              </p>
            </div>
          </li>
          {/* Info: (20230706 - Julian) 2015-2016 iSunCloud - Taiwan */}
          <li className="flex w-full items-center">
            <div className="flex h-full w-1/2 flex-col items-end space-y-6 px-20 py-10">
              <h3 className="text-2xl font-bold">{t('HOME_PAGE.MILESTONE_3_TITLE')}</h3>
              <p className="text-right text-lg text-black">
                {t('HOME_PAGE.MILESTONE_3_DESCRIPTION')}
              </p>
            </div>
            <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
            <div className="flex w-1/2 flex-col space-y-10 px-20 py-10">
              <h3 className="text-left text-5xl font-bold">{t('HOME_PAGE.MILESTONE_3_RANGE')}</h3>
              <Image
                src="/elements/stream_1.png"
                width={560}
                height={360}
                alt="a picture of a video player playing pop music"
              />
            </div>
          </li>
          {/* Info: (20230706 - Julian) 2011-2014 iSunCloud - Beijing, Hong Kong */}
          <li className="flex w-full items-center">
            <div className="flex w-1/2 flex-col items-end space-y-10 px-20 py-10">
              <h3 className="flex-1 text-5xl font-bold text-brandOrange">
                {t('HOME_PAGE.MILESTONE_4_RANGE')}
              </h3>
              <Image
                src="/elements/accounting_auditing_1.png"
                width={578}
                height={385}
                alt="a laptop displaying financial statements"
              />
            </div>

            <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
            <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10">
              <h3 className="text-2xl font-bold">{t('HOME_PAGE.MILESTONE_4_TITLE')}</h3>
              <p className="text-left text-lg text-black">
                {t('HOME_PAGE.MILESTONE_4_DESCRIPTION')}
              </p>
            </div>
          </li>
          {/* Info: (20230706 - Julian) 2019-2021 iSunCloud - Taiwan */}
          <li className="flex w-full items-center">
            <div className="flex h-full w-1/2 flex-col items-end space-y-6 px-20 py-10">
              <h3 className="text-2xl font-bold">{t('HOME_PAGE.MILESTONE_5_TITLE')}</h3>
              <p className="text-right text-lg text-black">
                {t('HOME_PAGE.MILESTONE_5_DESCRIPTION')}
              </p>
            </div>
            <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
            <div className="flex w-1/2 flex-col space-y-10 px-20 py-10">
              <h3 className="text-left text-5xl font-bold">{t('HOME_PAGE.MILESTONE_5_RANGE')}</h3>
              <Image
                src="/elements/stream_2.png"
                width={560}
                height={360}
                alt="a PC displaying 'zero-knowledge proof'"
              />
            </div>
          </li>
          {/* Info: (20230706 - Julian) 2022-Present iSunCloud - Taiwan */}
          <li className="flex w-full items-center">
            <div className="flex w-1/2 flex-col items-end space-y-10 px-20 py-10">
              <h3 className="flex-1 text-5xl font-bold text-brandOrange">
                {t('HOME_PAGE.MILESTONE_6_RANGE')}
              </h3>
              <Image
                src="/elements/AI_1.png"
                width={280}
                height={280}
                alt="a robot touching a tablet PC"
              />
            </div>

            <hr className="h-full w-px bg-darkBlue before:absolute before:-ml-2 before:mt-5 before:h-30px before:w-15px before:bg-brandOrange" />
            <div className="flex h-full w-1/2 flex-col items-start space-y-6 px-20 py-10">
              <h3 className="text-2xl font-bold">{t('HOME_PAGE.MILESTONE_6_TITLE')}</h3>
              <p className="text-left text-lg text-black">
                {t('HOME_PAGE.MILESTONE_6_DESCRIPTION')}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Milestone;
