import Image from 'next/image';

const content = [
  {
    title: 'Blockchain',
    description: 'BOLT Blockchain Technology Solutions',
    img: '/elements/blockchain.png',
  },
  {
    title: 'AI Auditing',
    description: 'AI Forensic Accounting and Auditing Solutions',
    img: '/elements/ai_auditing.png',
  },
  {
    title: 'Fintech',
    description: 'Fintech Services and Technology Consulting',
    img: '/elements/fintech.png',
  },
];

const WhatWeDo = () => {
  const banner = content.map(({title, description, img}) => {
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
    <div className="flex h-auto w-full items-center justify-center bg-lightGray bg-divider bg-top1 bg-no-repeat px-24 py-24">
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
