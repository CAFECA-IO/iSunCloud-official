import Image from 'next/image';
import {milestoneContent} from '../../constants/config';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const Milestone = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  const milestoneList = milestoneContent.map(
    ({title, description, timeRange, imageSrc, imageAlt, imageWidth, imageHeight}, index) => {
      const imageFlex = index === 0 ? 'lg:flex-row' : '';
      const paddingTop = index === 0 ? 'pt-40 pb-20' : 'py-20';
      // Info: (20230828 - Julian) 如果圖片高度小於 400px，就給外層 div 400px 的高度
      const imageDivHeight = imageHeight < 400 ? 'h-400px' : '';
      if (index % 2 === 0)
        return (
          <li key={index} className="flex w-full items-start lg:items-center">
            <div
              className={`relative flex h-full w-1/2 flex-col items-start space-y-6 px-4 ${paddingTop} lg:px-20`}
            >
              <h3 className="text-xl font-bold lg:text-5xl">{t(title)}</h3>
              <p className="text-sm text-darkGray lg:text-lg">{t(description)}</p>
              {/* Info: (20230828 - Julian) orange square */}
              <span className="absolute -right-2 top-0 h-30px w-15px bg-brandOrange"></span>
            </div>
            <div
              className={`flex w-1/2 flex-col items-start space-y-5 border-l-2 border-darkBlue px-4 lg:h-auto lg:px-20 ${imageDivHeight} ${paddingTop} ${imageFlex}`}
            >
              <h3 className="text-2xl font-bold text-brandOrange lg:text-5xl">{t(timeRange)}</h3>
              <Image src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} />
            </div>
          </li>
        );
      else
        return (
          <li key={index} className="flex w-full items-start lg:items-center">
            <div
              className={`relative flex w-1/2 flex-col items-end space-y-10 px-4 lg:h-auto lg:px-20 ${paddingTop} ${imageDivHeight}`}
            >
              <h3 className="text-2xl font-bold text-brandOrange lg:text-5xl">{t(timeRange)}</h3>
              <Image src={imageSrc} width={imageWidth} height={imageHeight} alt={imageAlt} />
              {/* Info: (20230828 - Julian) orange square */}
              <span className="absolute -right-2 -top-10 h-30px w-15px bg-brandOrange"></span>
            </div>
            <div
              className={`flex h-full w-1/2 flex-col items-start space-y-6 border-l-2 border-darkBlue px-4 ${paddingTop} lg:px-20`}
            >
              <h3 className="text-xl font-bold lg:text-5xl">{t(title)}</h3>
              <p className="text-sm text-darkGray lg:text-lg">{t(description)}</p>
            </div>
          </li>
        );
    }
  );

  return (
    <div className="flex w-screen flex-col items-center justify-center py-20 font-Barlow lg:px-10">
      <div className="flex flex-col items-center space-y-4 text-darkBlue">
        <h2 className="text-4xl font-semibold lg:text-6xl">{t('OUR_HISTORY.MILESTONE_TITLE')}</h2>
        <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
      </div>

      <div className="flex w-full lg:pt-10">
        {/* {desktopDisplay} */}
        {/* {mobileDisplay} */}
        <ul className="flex h-auto w-full flex-col items-center pt-10 text-left">
          {milestoneList}
        </ul>
      </div>
    </div>
  );
};

export default Milestone;
