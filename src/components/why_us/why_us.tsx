import Image from 'next/image';
import {advantageContents, partnerContent} from '../../constants/config';

const WhyUs = () => {
  const advantages = advantageContents.map(({title, description, image}) => {
    return (
      <div key={title} className="flex flex-col items-center space-y-3 p-8 lg:w-1/4">
        <Image
          src={image}
          width={0}
          height={0}
          sizes="40"
          style={{width: 'auto', height: '100%'}}
          alt={title}
        />
        <div className="flex flex-col items-center text-base text-darkBlue">
          <span className="text-2xl text-brandOrange">{description}</span>
          {title}
        </div>
      </div>
    );
  });

  const partners = partnerContent.map(({name, image, imageHover}) => {
    return (
      <div key={name} className="group relative block h-150px w-150px p-2">
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
          <h1 className="text-54px font-semibold">Why iSunCloud?</h1>
          <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
        </div>

        {/* Info: (20230615 - Julian) advantage */}
        <div className="mt-10 flex w-full flex-col items-center p-10 lg:flex-row">{advantages}</div>

        {/* Info: (20230615 - Julian) Our Partners */}
        <div className="mt-10 flex w-full flex-col items-center p-16 lg:flex-row">
          <div className="mb-8 flex flex-1 flex-col items-center space-y-4 lg:items-start">
            <h1 className="text-left text-5xl font-semibold text-darkBlue">Our Partners</h1>
            <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
          </div>

          <div className="flex flex-col items-center space-y-10 lg:flex-row lg:space-x-5 lg:space-y-0">
            {partners}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
