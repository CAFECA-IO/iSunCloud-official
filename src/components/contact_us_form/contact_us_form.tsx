import {useEffect, useState, useRef} from 'react';
import Image from 'next/image';

const ContactUsForm = () => {
  const [inputName, setInputName] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  return (
    <div
      id="contact_us"
      className="relative flex h-auto w-full items-center justify-center bg-gradient-to-b from-white to-lightGray px-36 py-24"
    >
      <Image
        src={'/elements/devider.svg'}
        width={0}
        height={0}
        style={{width: '100%', height: 'auto', position: 'absolute', top: '-100px'}}
        alt=""
      />
      <div className="relative flex h-full w-full items-center justify-end py-36">
        <div className="absolute left-12 w-full">
          <Image
            src="/elements/contact_us.svg"
            width={705}
            height={466}
            alt=""
            style={{transform: 'perspective(1000px) rotateY(20deg)'}}
          />
        </div>
        <div className="z-20 flex flex-col items-center rounded-3xl bg-white p-10 text-darkBlue shadow-2xl">
          <div className="flex flex-col items-center">
            <h1 className="text-42px font-bold">Get In Touch</h1>
            <h2 className="mt-3 text-base">
              Please fill the form below, we will reply you as soon as posible.
            </h2>
          </div>

          {/* Info: (20230616 - Julian) input part  */}
          <div className="flex flex-col items-center space-y-5 py-10">
            <div className="flex flex-col items-start">
              <p className="text-sm">Name</p>
              <input
                className="mt-2 h-50px w-500px bg-lightGray px-4 py-2 text-sm text-lightGray2"
                id="name"
                type="text"
                //onChange={nameChangeHandler}
                //value={inputName || ""}
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm">Phone Number</p>
              <input
                className="mt-2 h-50px w-500px bg-lightGray px-4 py-2 text-sm text-lightGray2"
                id="phone"
                type="text"
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm">*E-mail</p>
              <input
                className="mt-2 h-50px w-500px bg-lightGray px-4 py-2 text-sm text-lightGray2"
                id="email"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col items-start">
              <p className="text-sm">Message</p>
              <textarea
                className="mt-2 w-500px bg-lightGray px-4 py-2 text-sm text-lightGray2"
                id="email"
                rows={7}
                wrap="soft"
                placeholder="What do you want to say..."
                required
              />
            </div>

            <button className="flex items-center p-5">
              <Image src="/elements/decoration.svg" width={40} height={10} alt="" />
              <span className="ml-3 text-xl font-bold">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
