import Image from 'next/image';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const CatchUp = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  return (
    <div className="flex h-auto w-full items-center justify-center py-24 lg:px-24">
      <div className="flex flex-col items-center font-Barlow">
        <div className="flex flex-col items-center space-y-2 text-center text-darkBlue">
          <h2 className="text-5xl font-bold lg:text-6xl">{t('HOME_PAGE.CATCH_UP_TITLE')}</h2>
          <h2 className="text-2xl font-semibold lg:text-5xl">
            {t('HOME_PAGE.CATCH_UP_SUBTITLE_1')}
            <span className="text-brandOrange">{t('HOME_PAGE.CATCH_UP_SUBTITLE_HIGHLIGHT')}</span>
            {t('HOME_PAGE.CATCH_UP_SUBTITLE_2')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-2 py-20 text-darkBlue lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col items-center p-10">
            <div className="relative h-80px w-80px p-2">
              <Image
                src="/elements/safty.svg"
                fill
                style={{objectFit: 'contain'}}
                alt="security_icon"
              />
            </div>
            <h3 className="p-4 text-xl font-semibold">{t('HOME_PAGE.CATCH_UP_SECURITY_TITLE')}</h3>
            <p className="text-left text-lg lg:text-center">
              {t('HOME_PAGE.CATCH_UP_SECURITY_DESCRIPTION')}
            </p>
          </div>

          <div className="flex flex-col items-center p-10">
            <div className="relative h-80px w-80px p-2">
              <Image
                src="/elements/efficiency.svg"
                fill
                style={{objectFit: 'contain'}}
                alt="efficiency_icon"
              />
            </div>
            <h3 className="p-4 text-xl font-semibold">
              {t('HOME_PAGE.CATCH_UP_EFFICIENCY_TITLE')}
            </h3>
            <p className="text-left text-lg lg:text-center">
              {t('HOME_PAGE.CATCH_UP_EFFICIENCY_DESCRIPTION')}
            </p>
          </div>

          <div className="flex flex-col items-center p-10">
            <div className="relative h-80px w-80px p-2">
              <Image
                src="/elements/sharing.svg"
                fill
                style={{objectFit: 'contain'}}
                alt="sharing_icon"
              />
            </div>
            <h3 className="p-4 text-xl font-semibold">
              {t('HOME_PAGE.CATCH_UP_COMPLIANCE_TITLE')}
            </h3>
            <p className="text-left text-lg lg:text-center">
              {t('HOME_PAGE.CATCH_UP_COMPLIANCE_DESCRIPTION')}
            </p>
          </div>

          <div className="flex flex-col items-center p-10">
            <div className="relative h-80px w-80px p-2">
              <Image
                src="/elements/innovation.svg"
                fill
                style={{objectFit: 'contain'}}
                alt="innovation_icon"
              />
            </div>
            <h3 className="p-4 text-xl font-semibold">
              {t('HOME_PAGE.CATCH_UP_INNOVATION_TITLE')}
            </h3>
            <p className="text-left text-lg lg:text-center">
              {t('HOME_PAGE.CATCH_UP_INNOVATION_DESCRIPTION')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatchUp;
