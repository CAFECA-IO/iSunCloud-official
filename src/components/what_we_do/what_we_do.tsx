import Image from 'next/image';
import {whatWeDoContent} from '../../constants/config';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const WhatWeDo = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');
  //ToDo:(20230616 - Julian) Fix image size
  const banner = whatWeDoContent.map(({title, description, bg}) => {
    return (
      <div
        key={title}
        className={`group relative block h-500px w-full transition-all duration-300 ease-in ${bg} bg-cover hover:scale-110 lg:h-auto lg:w-500px`}
      >
        <span className="absolute left-0 top-0 h-full w-full overflow-hidden bg-blueFilter transition-all duration-300 ease-in-out group-hover:bg-orangeFilter"></span>
        <div className="relative z-30 flex h-full w-full flex-col items-center justify-center space-y-10 text-lightWhite">
          <h2 className="text-5xl">{t(title)}</h2>
          <p className="text-lg">{t(description)}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="relative flex h-auto w-full items-center justify-center bg-lightGray pt-24 font-Barlow lg:px-24">
      {/* Info: (20230704 - Julian) Devider */}
      <div className="absolute -top-100px h-200px w-screen">
        <Image src={'/elements/devider_neo.png'} fill alt="divider" style={{objectFit: 'cover'}} />
      </div>

      <div className="flex flex-col pt-20 text-darkBlue lg:pt-32">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-4xl font-semibold lg:text-5xl">{t('HOME_PAGE.WHAT_WE_DO_TITLE')}</h2>
          <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
        </div>

        {/* ToDo:(20230617 - Julian) mobile version */}
        <div className="mt-10 flex h-auto w-screen flex-col justify-center overflow-x-hidden overflow-y-hidden lg:h-380px lg:flex-row">
          {banner}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
