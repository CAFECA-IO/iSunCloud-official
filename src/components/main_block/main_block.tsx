import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {ISCURL} from '../../constants/url';
import {RiComputerLine, RiArrowDownSLine} from 'react-icons/ri';
import {TbCloudDownload} from 'react-icons/tb';
import useOuterClick from '../../lib/hooks/use_outer_click';
import {downloadContent} from '../../constants/config';
import {IDownloadContent} from '../../interfaces/download_content';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const MainBlock = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

  const {targetRef, componentVisible, setComponentVisible} = useOuterClick<HTMLUListElement>(false);
  const [activeOs, setActiveOs] = useState(downloadContent[0]);

  const showMenuHandler = () => setComponentVisible(!componentVisible);
  const osSelectHandler = (os: IDownloadContent) => {
    setActiveOs(os);
    setComponentVisible(false);
  };

  const osSelectMenu = (
    <div className="relative flex flex-col font-medium">
      <button
        onClick={showMenuHandler}
        className="flex w-145px items-center space-x-2 px-2 py-3 hover:text-brandOrange"
      >
        <RiComputerLine className="text-2xl" />
        <p className="text-base">{activeOs.os}</p>
        <RiArrowDownSLine className="text-2xl" />
      </button>
      <ul
        ref={targetRef}
        className={`absolute top-10 z-10 flex w-full flex-col items-center space-y-1 ${
          componentVisible ? 'visible opacity-100' : 'invisible opacity-0'
        } bg-lightWhite p-2 text-base shadow-xl transition-all duration-150 ease-in`}
      >
        {downloadContent.map((content, index) => {
          const clickHandler = () => osSelectHandler(content);
          return (
            <li
              key={index}
              onClick={clickHandler}
              className="px-6 py-1 hover:cursor-pointer hover:text-brandOrange"
            >
              {content.os}
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="flex h-screen w-full items-center bg-right bg-no-repeat px-4 text-left text-darkBlue lg:bg-kvDesktop lg:px-16">
      <div className="flex flex-col justify-between font-Barlow">
        {/* Info: (20230823 - Julian) KV image for mobile view */}
        <div className="lg:hidden">
          <Image
            src={'/elements/kv_mobile.svg'}
            width={0}
            height={0}
            style={{width: '100vw', height: 'auto'}}
            alt=""
          />
        </div>
        {/* Info: (20230823 - Julian) Text */}
        <div className="mt-20 flex flex-col items-center justify-center space-y-8 lg:mt-0 lg:w-46% lg:items-start">
          <h1 className="text-2xl font-semibold lg:text-6xl">{t('HOME_PAGE.MAIN_TITLE')}</h1>
          <p className="text-base lg:w-7/10 lg:text-lg">{t('HOME_PAGE.MAIN_DESCRIPTION')}</p>
        </div>
        {/* Info: (20230823 - Julian) Buttons */}
        <div className="mt-12 flex flex-col items-center space-y-6 lg:flex-row lg:space-x-4 lg:space-y-0">
          {/* Info: (20230823 - Julian) OS select menu */}
          {osSelectMenu}
          {/* Info: (20230823 - Julian) Download button */}
          {/* ToDo: (20231005 - Julian) Add download link */}
          <Link
            href={ISCURL.COMING_SOON}
            className="flex w-full items-center justify-center space-x-2 rounded-full bg-lightWhite2 px-8 py-3 shadow-pill transition-shadow duration-150 ease-in hover:shadow-pill-hover lg:w-170px"
          >
            <TbCloudDownload className="text-2xl" />
            <p className="text-base font-bold">{t('HOME_PAGE.DOWNLOAD')}</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
