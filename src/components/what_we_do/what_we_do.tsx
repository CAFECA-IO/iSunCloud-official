import Image from 'next/image';
import {useRef, useEffect} from 'react';
import lottie from 'lottie-web';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const WhatWeDo = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  /* Info:(20230823 - Julian) Animations */
  const lottiePacking = useRef<HTMLDivElement>(null);
  const lottieConnection1 = useRef<HTMLDivElement>(null);
  const lottieAuditing = useRef<HTMLDivElement>(null);
  const lottieConnection2 = useRef<HTMLDivElement>(null);
  const lottieSaftybox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    var animDuration = 1000;

    const animPacking = lottie.loadAnimation({
      container: lottiePacking.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/packing.json',
    });
    const animConne1 = lottie.loadAnimation({
      container: lottieConnection1.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/connection.json',
    });
    const animAuditing = lottie.loadAnimation({
      container: lottieAuditing.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/auditing.json',
    });
    const animConne2 = lottie.loadAnimation({
      container: lottieConnection2.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/connection_2.json',
    });
    const animSaftybox = lottie.loadAnimation({
      container: lottieSaftybox.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/animations/three_safty_box.json',
    });

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY;

      const framePacking = animPacking.totalFrames * ((scrollPosition - 2200) / duration);
      const frameConne1 = animConne1.totalFrames * (((scrollPosition - 3000) / duration) * 2);
      const frameAuditing = animAuditing.totalFrames * (((scrollPosition - 3350) / duration) * 1.8);
      const frameConne2 = animConne2.totalFrames * (((scrollPosition - 3700) / duration) * 2);
      const frameSaftybox = animSaftybox.totalFrames * (((scrollPosition - 4080) / duration) * 2);
      console.log(scrollPosition);
      /* Info:(20230823 - Julian) Packing frame */
      if (scrollPosition > 2400 && scrollPosition < 3300) {
        if (framePacking <= 0) animPacking.goToAndStop(1, true);
        animPacking.goToAndStop(framePacking, true);
      }
      /* Info:(20230823 - Julian) Connection 1 frame */
      if (scrollPosition > 3000 && scrollPosition < 3500) {
        if (frameConne1 <= 0) animConne1.goToAndStop(0, true);
        animConne1.goToAndStop(frameConne1, true);
      }
      /* Info:(20230823 - Julian) Auditing frame */
      if (scrollPosition > 3350 && scrollPosition < 4200) {
        if (frameAuditing <= 0) animConne1.goToAndStop(-1, true);
        animAuditing.goToAndStop(frameAuditing, true);
      }
      /* Info:(20230823 - Julian) Connection 2 frame */
      if (scrollPosition > 3700 && scrollPosition < 4200) {
        if (frameConne2 <= 0) animConne2.goToAndStop(-1, true);
        animConne2.goToAndStop(frameConne2, true);
      }
      /* Info:(20230823 - Julian) Saftybox frame */
      if (scrollPosition > 4080 && scrollPosition < 4800) {
        if (frameSaftybox <= 0) animSaftybox.goToAndStop(1, true);
        animSaftybox.goToAndStop(frameSaftybox, true);
      }
    }
    const onScroll = () => animatebodymovin(animDuration);

    document.addEventListener('scroll', onScroll);

    return () => {
      animPacking.destroy();
      animConne1.destroy();
      animAuditing.destroy();
      animConne2.destroy();
      animSaftybox.destroy();
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="relative flex h-auto w-full items-center justify-center font-Barlow">
      {/* Info: (20230704 - Julian) Devider */}
      <div className="absolute -top-100px h-200px w-screen bg-white">
        <Image src={'/elements/devider_neo.png'} fill alt="divider" style={{objectFit: 'cover'}} />
      </div>

      <div className="flex flex-col bg-lightWhite2 pt-24 text-darkBlue lg:px-24">
        <div className="flex flex-col items-center space-y-4 px-5 pb-16 pt-12 lg:px-20 lg:pb-12 lg:pt-20">
          <h2 className="text-4xl font-semibold lg:text-5xl">{t('HOME_PAGE.WHAT_WE_DO_TITLE')}</h2>
          <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
        </div>

        {/* Info:(20230823 - Julian) Animations */}
        <div className="flex w-screen flex-col items-center text-left">
          {/* Info:(20230823 - Julian) Packing */}
          <div className="flex items-center px-20">
            <div ref={lottiePacking} className="h-500px w-500px flex-1"></div>
            <div className="flex w-2/5 flex-col space-y-6">
              <h2 className="text-32px font-bold">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_1_TITLE')}</h2>
              <p className="text-base">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_1_DESCRIPTION')}</p>
            </div>
          </div>
          {/* Info:(20230823 - Julian) Connection 1 */}
          <div ref={lottieConnection1} className="h-300px w-1000px"></div>
          {/* Info:(20230823 - Julian) Auditing */}
          <div className="flex items-center px-20">
            <div className="flex w-2/5 flex-col space-y-6">
              <h2 className="text-32px font-bold">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_TITLE')}</h2>
              <p className="text-base">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_DESCRIPTION')}</p>
            </div>
            <div ref={lottieAuditing} className="h-500px w-500px flex-1"></div>
          </div>
          {/* Info:(20230823 - Julian) Connection 2 */}
          <div ref={lottieConnection2} className="h-300px w-1000px"></div>
          {/* Info:(20230823 - Julian) Saftybox */}
          <div className="flex items-center px-20">
            <div ref={lottieSaftybox} className="h-500px w-500px flex-1"></div>
            <div className="flex w-2/5 flex-col space-y-6">
              <h2 className="text-32px font-bold">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_1_TITLE')}</h2>
              <p className="text-base">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_1_DESCRIPTION')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
