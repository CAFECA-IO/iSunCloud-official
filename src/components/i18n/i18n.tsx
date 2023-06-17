import {VscGlobe} from 'react-icons/vsc';

const I18n = () => {
  return (
    <div className="group flex items-center hover:cursor-pointer">
      <VscGlobe className="h-6 w-6 text-darkBlue group-hover:text-brandOrange" />

      <div className="ml-2 text-darkBlue group-hover:text-brandOrange">Language</div>

      <span className="-mt-2 ml-4 h-4 w-4 rotate-45 rounded-sm border-b-3 border-r-3 border-darkBlue group-hover:border-brandOrange"></span>
    </div>
  );
};

export default I18n;
