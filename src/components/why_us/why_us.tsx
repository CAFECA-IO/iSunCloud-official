import Image from 'next/image';

const contents = [
  {
    title: 'Happy clients',
    description: '250+',
    image: '/elements/smile.svg',
  },
  {
    title: 'Completed projects',
    description: '600+',
    image: '/elements/files.svg',
  },
  {
    title: 'Competitions winning',
    description: '70+',
    image: '/elements/badge.svg',
  },
  {
    title: 'Years of experience',
    description: '11K+',
    image: '/elements/target.svg',
  },
];

const partners = [
  {
    name: 'TideBit',
    image: '/logo/Tidebit.svg',
    imageHover: '/logo/Tidebit_Active.svg',
  },
  {
    name: 'CAFECA',
    image: '/logo/CAFECA.svg',
    imageHover: '/logo/CAFECA_Active.svg',
  },
  {
    name: 'BOLT',
    image: '/logo/BOLT.svg',
    imageHover: '/logo/BOLT_Active.svg',
  },
  {
    name: 'BAIFAAA',
    image: '/logo/BAIFAAA.svg',
    imageHover: '/logo/BAIFAAA_Active.svg',
  },
  {
    name: 'MerMer',
    image: '/logo/MerMer.svg',
    imageHover: '/logo/MerMer_Active.svg',
  },
];

const WhyUs = () => {
  const advantages = contents.map(({title, description, image}) => {
    return (
      <div className="flex flex-col items-center space-y-3 p-8 lg:w-1/4">
        <Image src={image} width={40} height={40} alt="Happy_clients" />
        <div className="flex flex-col items-center text-base text-darkBlue">
          <span className="text-2xl text-brandOrange">{description}</span>
          {title}
        </div>
      </div>
    );
  });

  const partnerList = partners.map(({name, image, imageHover}) => {
    return (
      <div className="group relative block h-150px w-150px p-2">
        <div className="absolute group-hover:opacity-100">
          <Image
            src={image}
            width={0}
            height={0}
            sizes="125"
            style={{width: '100%', height: 'auto'}}
            alt={name}
          />
        </div>
        <div className="absolute opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Image
            src={imageHover}
            width={0}
            height={0}
            sizes="125"
            style={{width: '100%', height: 'auto'}}
            alt={name}
          />
        </div>
      </div>
    );
  });

  return (
    <div className="flex h-auto w-full items-center justify-center px-5 py-24">
      <div className="flex w-full flex-col">
        <div className="flex flex-col items-center space-y-4 text-darkBlue">
          <h1 className="text-54 font-semibold">Why iSunCloud?</h1>
          <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
        </div>

        {/* Info: (20230615 - Julian) advantage */}
        <div className="mt-10 flex w-full flex-col items-center p-10 lg:flex-row">{advantages}</div>

        {/* Info: (20230615 - Julian) Our Partners */}
        <div className="mt-10 flex w-full flex-col items-center p-16 lg:flex-row">
          <div className="mb-8 flex flex-1 flex-col items-center space-y-4 lg:items-start">
            <h1 className="text-5xl font-semibold text-darkBlue">Our Partners</h1>
            <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
          </div>

          <div className="flex flex-col items-center space-y-10 lg:flex-row lg:space-x-5 lg:space-y-0">
            {partnerList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
