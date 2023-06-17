import Link from 'next/link';
import {useState} from 'react';
import {useRouter} from 'next/router';
import {VscGlobe} from 'react-icons/vsc';
import {FiChevronDown} from 'react-icons/fi';

const I18n = () => {
  const router = useRouter();

  const internationalizationList = [
    {label: '繁體中文', value: 'tw'},
    {label: 'English', value: 'en'},
    {label: '简体中文', value: 'cn'},
  ];

  const [showMenu, setShowMenu] = useState(false);

  const currentLanguage = internationalizationList.find(
    ({value}) => value === router.locale
  )?.label;

  const showMenuHandler = () => setShowMenu(!showMenu);

  const subMenu = internationalizationList.map(({label, value}) => {
    return (
      <li className="py-4 text-darkBlue hover:cursor-pointer hover:bg-white hover:text-brandOrange">
        <Link
          href={router}
          className="px-4 py-3 hover:px-5"
          onClick={showMenuHandler}
          locale={value}
        >
          {label}
        </Link>
      </li>
    );
  });

  return (
    <div className="relative z-40 w-130px">
      <div onClick={showMenuHandler} className="group flex items-center hover:cursor-pointer">
        <VscGlobe className="h-6 w-6 text-darkBlue group-hover:text-brandOrange" />
        <div className="ml-2 text-darkBlue group-hover:text-brandOrange">{currentLanguage}</div>
        <FiChevronDown className="ml-2 h-6 w-6 text-darkBlue group-hover:text-brandOrange" />
      </div>

      {/* Info: (20230617 - Julian) dropdown part */}
      <div
        className={`absolute top-10 flex flex-col shadow-xl ${
          showMenu ? 'visible opacity-100' : 'invisible opacity-0'
        } w-full bg-lightGray transition-all duration-300 ease-in-out`}
      >
        <ul className="">{subMenu}</ul>
      </div>
    </div>
  );
};

export default I18n;
