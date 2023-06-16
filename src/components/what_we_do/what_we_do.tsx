import Image from 'next/image';
import {whatWeDoＣontent} from '../../constants/config';

const WhatWeDo = () => {
  const banner = whatWeDoＣontent.map(({title, description, img}) => {
    return (
      <div className="group relative block w-300px transition-all duration-300 ease-in hover:scale-110 lg:w-500px">
        <div className="absolute">
          <Image src={img} width={500} height={500} alt="blockchain" />
        </div>
        <div className="absolute opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-0">
          <Image src="/filter/blue.svg" width={500} height={500} alt="" />
        </div>
        <div className="absolute z-10 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Image src="/filter/orange.svg" width={500} height={500} alt="" />
        </div>
        <div className="relative z-30 flex h-full w-full flex-col items-center justify-center space-y-10 text-lightWhite">
          <h1 className="text-5xl">{title}</h1>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="relative flex h-auto w-full items-center justify-center bg-gradient-to-b from-white to-lightGray px-24 py-24">
      <Image
        src={'/elements/devider.svg'}
        width={0}
        height={0}
        style={{width: '100%', height: 'auto', position: 'absolute', top: '-100px'}}
        alt=""
      />
      <div className="flex flex-col py-32 text-darkBlue">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-5xl font-semibold">What we do</h1>
          <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
        </div>

        <div className="mt-10 flex h-500px flex-col overflow-x-hidden overflow-y-hidden lg:flex-row">
          {banner}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
