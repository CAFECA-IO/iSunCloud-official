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
          <h1 className="text-5xl">{t(title)}</h1>
          <p className="text-lg">{t(description)}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="relative flex h-auto w-full items-center justify-center bg-gradient-to-b from-white to-lightGray3 py-24 lg:px-24">
      <Image
        src={'/elements/devider.svg'}
        width={0}
        height={0}
        style={{width: '100%', height: 'auto', position: 'absolute', top: '-100px'}}
        alt=""
      />
      <div className="flex flex-col py-20 text-darkBlue lg:py-32">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-semibold lg:text-5xl">{t('HOME_PAGE.WHAT_WE_DO_TITLE')}</h1>
          <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
        </div>

        {/* ToDo:(20230617 - Julian) mobile version */}
        <div className="mt-10 flex h-auto w-screen flex-col overflow-x-hidden overflow-y-hidden lg:h-380px lg:flex-row">
          {banner}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
