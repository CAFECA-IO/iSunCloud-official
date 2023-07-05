import Image from 'next/image';
import {advantageContents, partnerContent} from '../../constants/config';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const WhyUs = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  const advantages = advantageContents.map(({title, description, image}) => {
    return (
      <div key={title} className="flex h-130px w-full flex-col items-center space-y-3 p-3 lg:p-8">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="40"
          style={{width: 'auto', height: '100%'}}
          alt={t(title)}
        />
        <div className="flex flex-col items-center text-base text-darkBlue">
          <span className="text-2xl text-brandOrange">{description}</span>
          {t(title)}
        </div>
      </div>
    );
  });

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
    <div className="flex h-auto w-full items-center justify-center px-5 py-24">
      <div className="flex w-full flex-col">
        <div className="flex flex-col items-center space-y-4 text-darkBlue">
          <h1 className="text-4xl font-semibold lg:text-54px">{t('HOME_PAGE.WHY_US_TITLE')}</h1>
          <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
        </div>

        {/* Info: (20230615 - Julian) advantage */}
        <div className="grid w-full grid-cols-2 gap-12 py-20 lg:grid-cols-4 lg:gap-2 lg:px-10">
          {advantages}
        </div>

        {/* Info: (20230615 - Julian) Our Partners */}
        <div className="flex w-full flex-col items-center justify-between py-10 lg:mt-10 lg:flex-row lg:px-16">
          <div className="mb-8 flex flex-1 flex-col items-center space-y-4 lg:items-start">
            <h1 className="whitespace-nowrap text-left text-4xl font-semibold text-darkBlue lg:text-5xl">
              {t('HOME_PAGE.WHY_US_PARTNERS_TITLE')}
            </h1>
            <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
          </div>

          <div className="flex flex-wrap items-center justify-center">{partners}</div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
