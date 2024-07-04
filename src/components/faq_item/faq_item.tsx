import {Dispatch, SetStateAction} from 'react';
import {FiPlus, FiMinus} from 'react-icons/fi';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

interface FaqItemProps {
  id: string;
  question: string;
  answer: string[];
  showAnswerId: string;
  setShowAnswerId: Dispatch<SetStateAction<string>>;
}

const FaqItem = ({id, question, answer, showAnswerId, setShowAnswerId}: FaqItemProps) => {
  const {t}: {t: TranslateFunction} = useTranslation('common');
  const isOpen = showAnswerId === id;

  // Info: (20230828 - Julian) 展開顯示 Minus ，收合顯示 Plus
  const itemMark = isOpen ? <FiMinus className="text-2xl" /> : <FiPlus className="text-2xl" />;
  const displayAnswer = answer.map((item, index) => (
    <p key={index} className="pb-4 text-xs lg:text-base">
      {t(item)}
    </p>
  ));

  /* Info: (20230828 - Julian) 如果點擊的是已經展開的項目，則收合；反之則指定 setShowAnswerId 為當前項目的 id */
  const clickHandler = () => {
    if (isOpen) {
      setShowAnswerId('');
    } else {
      setShowAnswerId(id);
    }
  };

  return (
    <div
      onClick={clickHandler}
      className="flex w-full flex-col bg-white p-4 text-left shadow-sm hover:cursor-pointer"
    >
      <div className="flex items-center">
        <h2 className="flex-1 text-sm font-bold lg:text-xl">{t(question)}</h2>
        {itemMark}
      </div>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-1' : 'grid-rows-0' // Info: (20230828 - Julian) 用 grid 實現收合動畫
        } `}
      >
        <div className="pt-6">{displayAnswer}</div>
      </div>
    </div>
  );
};

export default FaqItem;
