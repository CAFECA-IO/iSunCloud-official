import Image from 'next/image';
import lottie from 'lottie-web';
import {useRef, useEffect} from 'react';
import {partnerContent} from '../../constants/config';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const WhyUs = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  const lottieSafty = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieSafty.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/end.json',
    });

    return () => anim.destroy();
  }, []);

  const partners = partnerContent.map(({name, image, imageHover, link}) => {
    return (
      <a
        href={link}
        target="_blank"
        key={name}
        className="group relative mt-10 block h-200px w-200px p-10 lg:mt-0"
      >
        <div className="absolute left-6 top-0 flex w-150px items-center justify-center group-hover:opacity-100">
          <Image
            src={image}
            width={0}
            height={0}
            style={{width: 'auto', height: '150px'}}
            alt={name}
          />
        </div>
        <div className="absolute left-6 top-0 flex w-150px items-center justify-center opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Image
            src={imageHover}
            width={0}
            height={0}
            style={{width: 'auto', height: '150px'}}
            alt={name}
          />
        </div>
      </a>
    );
  });

  return (
    <div className="mb-24 flex h-auto w-full items-center justify-center">
      <div className="flex w-full flex-col font-Barlow">
        {/* Info: (20230823 - Julian) Prioritizing */}
        <div className="flex w-full flex-col items-center bg-lightWhite2 pt-24">
          <h2 className="p-4 text-2xl font-bold lg:p-20 lg:text-5xl">
            {t('HOME_PAGE.PRIORITIZING_TITLE')}
          </h2>
          <div className="flex w-full justify-center bg-safe bg-cover bg-bottom bg-no-repeat py-20">
            <div ref={lottieSafty} className="block h-400px w-500px"></div>
          </div>
        </div>

        {/* Info: (20230615 - Julian) Our Partners */}
        <div className="flex w-full flex-col items-center justify-between py-10 lg:mt-10 lg:flex-row lg:px-16">
          <div className="mb-8 flex flex-1 flex-col items-center space-y-4 lg:items-start">
            <h2 className="whitespace-nowrap text-left text-4xl font-semibold text-darkBlue lg:text-5xl">
              {t('HOME_PAGE.OUR_PARTNERS')}
            </h2>
            <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
          </div>

          <div className="flex flex-wrap items-center justify-center px-5">{partners}</div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
