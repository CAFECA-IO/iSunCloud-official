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
      const scrollPosition = window.scrollY - 2200;

      const framePacking = animPacking.totalFrames * (scrollPosition / duration);
      const frameConne1 = animConne1.totalFrames * (((scrollPosition - 800) / duration) * 2);
      const frameAuditing = animAuditing.totalFrames * (((scrollPosition - 1150) / duration) * 1.8);
      const frameConne2 = animConne2.totalFrames * (((scrollPosition - 1500) / duration) * 2);
      const frameSaftybox = animSaftybox.totalFrames * (((scrollPosition - 1900) / duration) * 2);

      /* Info:(20230823 - Julian) Packing frame */
      if (scrollPosition > 200 && scrollPosition < 1100) {
        if (framePacking <= 0) animPacking.goToAndStop(1, true);
        animPacking.goToAndStop(framePacking, true);
      }
      /* Info:(20230823 - Julian) Connection 1 frame */
      if (scrollPosition > 800 && scrollPosition < 1300) {
        if (frameConne1 <= 0) animConne1.goToAndStop(0, true);
        animConne1.goToAndStop(frameConne1, true);
      }
      /* Info:(20230823 - Julian) Auditing frame */
      if (scrollPosition > 1150 && scrollPosition < 2000) {
        if (frameAuditing <= 0) animConne1.goToAndStop(-1, true);
        animAuditing.goToAndStop(frameAuditing, true);
      }
      /* Info:(20230823 - Julian) Connection 2 frame */
      if (scrollPosition > 1500 && scrollPosition < 2000) {
        if (frameConne2 <= 0) animConne2.goToAndStop(-1, true);
        animConne2.goToAndStop(frameConne2, true);
      }
      /* Info:(20230823 - Julian) Saftybox frame */
      if (scrollPosition > 1900 && scrollPosition < 3400) {
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
      <div className="absolute -top-30px h-130px w-screen bg-white lg:-top-100px lg:h-200px">
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
          <div className="flex flex-col items-center space-y-6 px-10 lg:flex-row lg:space-y-0 lg:px-20">
            <div ref={lottiePacking} className="w-290px lg:h-500px lg:w-500px lg:flex-1"></div>
            <div className="flex flex-col space-y-6 lg:w-2/5">
              <h2 className="text-xl font-bold lg:text-32px">
                {t('HOME_PAGE.WHAT_WE_DO_BLOCK_1_TITLE')}
              </h2>
              <p className="text-base">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_1_DESCRIPTION')}</p>
            </div>
          </div>
          {/* Info:(20230823 - Julian) Connection 1 */}
          <div ref={lottieConnection1} className="w-450px lg:h-300px lg:w-1000px"></div>
          {/* Info:(20230823 - Julian) Auditing */}
          <div className="flex flex-col-reverse items-center space-y-6 px-10 lg:flex-row lg:space-y-0 lg:px-20">
            <div className="flex flex-col space-y-6 lg:w-2/5">
              <h2 className="text-32px font-bold">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_TITLE')}</h2>
              <p className="text-base">{t('HOME_PAGE.WHAT_WE_DO_BLOCK_2_DESCRIPTION')}</p>
            </div>
            <div ref={lottieAuditing} className="w-290px lg:h-500px lg:w-500px lg:flex-1"></div>
          </div>
          {/* Info:(20230823 - Julian) Connection 2 */}
          <div ref={lottieConnection2} className="w-450px lg:h-300px lg:w-1000px"></div>
          {/* Info:(20230823 - Julian) Saftybox */}
          <div className="flex flex-col items-center space-y-6 px-10 lg:flex-row lg:space-y-0 lg:px-20">
            <div ref={lottieSaftybox} className="w-290px lg:h-500px lg:w-500px lg:flex-1"></div>
            <div className="flex flex-col space-y-6 lg:w-2/5">
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
