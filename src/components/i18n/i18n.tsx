import Link from 'next/link';
import useOuterClick from '../../lib/hooks/use_outer_click';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {VscGlobe} from 'react-icons/vsc';
import {useTranslation} from 'next-i18next';
import {FiChevronDown, FiChevronRight} from 'react-icons/fi';
import {ImArrowLeft2} from 'react-icons/im';
import {TranslateFunction} from '../../interfaces/locale';

const I18n = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');
  const {asPath} = useRouter();

  const internationalizationList = [
    {label: '繁體中文', value: 'tw'},
    {label: 'English', value: 'en'},
    {label: '简体中文', value: 'cn'},
  ];

  const [currentLanguage, setCurrentLanguage] = useState('Language');
  const {targetRef, componentVisible, setComponentVisible} = useOuterClick<HTMLUListElement>(false);

  const showMenuHandler = () => setComponentVisible(!componentVisible);
  const changeLanguageHandler = (value: string) => {
    const language = internationalizationList.find(({value: v}) => v === value);
    if (language) setCurrentLanguage(language.label);
    setComponentVisible(false);
  };

  const desktopSubMenu = (
    <ul
      ref={targetRef}
      className={`absolute top-10 flex flex-col shadow-xl ${
        componentVisible ? 'visible opacity-100' : 'invisible opacity-0'
      } hidden w-full bg-lightGray transition-all duration-300 ease-in-out lg:block`}
    >
      {internationalizationList.map(({label, value}) => (
        <li
          key={value}
          className="py-4 text-darkBlue hover:cursor-pointer hover:bg-white hover:text-brandOrange"
        >
          <Link
            href={asPath}
            scroll={false}
            className="px-4 py-3 hover:px-5"
            onClick={() => changeLanguageHandler(value)}
            locale={value}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  const mobileSubMenu = (
    <ul
      ref={targetRef}
      className={`absolute -top-8 left-0 z-10 flex w-screen flex-col items-center bg-white ${
        componentVisible ? 'visible opacity-100' : 'invisible opacity-0'
      } block text-base shadow-xl transition-all duration-300 ease-in-out lg:hidden`}
    >
      {internationalizationList.map(({label, value}) => (
        <li
          key={value}
          className="flex w-full justify-center py-4 text-darkBlue hover:cursor-pointer hover:text-brandOrange"
        >
          <Link
            href={asPath}
            scroll={false}
            onClick={() => changeLanguageHandler(value)}
            locale={value}
          >
            {label}
          </Link>
        </li>
      ))}
      <li
        onClick={showMenuHandler}
        className="flex w-full items-center justify-center space-x-2 py-3 text-darkBlue hover:cursor-pointer hover:text-brandOrange"
      >
        <ImArrowLeft2 />
        <p>{t('NAV_BAR.BACK_BUTTON')}</p>
      </li>
    </ul>
  );

  return (
    <div className="relative z-40 flex w-full justify-center lg:w-130px">
      <div onClick={showMenuHandler} className="group flex items-center hover:cursor-pointer">
        <VscGlobe className="h-6 w-6 text-darkBlue group-hover:text-brandOrange" />
        <div className="ml-2 text-darkBlue group-hover:text-brandOrange">{currentLanguage}</div>
        <FiChevronDown className="ml-2 hidden h-6 w-6 text-darkBlue group-hover:text-brandOrange lg:block" />
        <FiChevronRight className="ml-2 block h-6 w-6 text-darkBlue group-hover:text-brandOrange lg:hidden" />
      </div>

      {/* Info: (20230617 - Julian) Desktop dropdown part */}
      {desktopSubMenu}

      {/* Info: (20230617 - Julian) Mobile dropdown part */}
      {mobileSubMenu}
    </div>
  );
};

export default I18n;
