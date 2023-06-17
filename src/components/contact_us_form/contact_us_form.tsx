import {useEffect, useState, useRef} from 'react';
import lottie from 'lottie-web';
import Image from 'next/image';
import useInputNumber from '../../lib/hooks/use_input_number';
import {IAnimationType, AnimationType} from '../../constants/animation_type';

const ContactUsForm = () => {
  // Info: (20230616 - Julian) the time when the email is sent
  const now = new Date().toLocaleString('zh-TW', {timeZone: 'Asia/Taipei'});

  const sendAnimContainer = useRef<HTMLDivElement>(null);
  const successAnimContainer = useRef<HTMLDivElement>(null);
  const errorAnimContainer = useRef<HTMLDivElement>(null);

  // Info: (20230616 - Julian) is Email sent successfully
  const [sendSuccess, setSendSuccess] = useState(false);
  // Info: (20230616 - Julian) which animation to show
  const [showAnim, setShowAnim] = useState(false);
  const [animation, setAnimation] = useState<IAnimationType | null>(null);

  const [inputName, setInputName] = useState('');
  const [inputPhone, setInputPhone] = useInputNumber('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    const animSend = lottie.loadAnimation({
      container: sendAnimContainer.current!,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/animations/sending.json',
    });

    const animSuccess = lottie.loadAnimation({
      container: successAnimContainer.current!,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/animations/success.json',
    });

    const animError = lottie.loadAnimation({
      container: errorAnimContainer.current!,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/animations/error.json',
    });

    return () => {
      animSend.destroy();
      animSuccess.destroy();
      animError.destroy();
    };
  }, [sendSuccess, showAnim, animation]);

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };
  const phoneChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPhone(event.target.value);
  };
  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };
  const messageChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(event.target.value);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    setAnimation(AnimationType.SENDING);
    setShowAnim(true);

    const failedProcess = async () => {
      setSendSuccess(false);
      setAnimation(AnimationType.ERROR);
      setShowAnim(true);

      await new Promise(resolve => setTimeout(resolve, 3000));

      setShowAnim(false);
      setAnimation(null);
    };

    try {
      event.preventDefault();

      const emailData = {
        comment: `<h3>姓名：${inputName}</h3><h3>手機：${inputPhone}</h3><h3>Email：${inputEmail}</h3><h3>意見：${inputMessage}</h3><p>${now}<p>`,
      };

      await new Promise(resolve => setTimeout(resolve, 3000));

      const res = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(emailData),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });
      const result = await res.json();

      const success = result.success;
      if (success) {
        setSendSuccess(true);
        setAnimation(AnimationType.SUCCESS);
        setShowAnim(true);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setInputName('');
        setInputPhone('');
        setInputEmail('');
        setInputMessage('');
        setSendSuccess(false);
        setShowAnim(false);
      } else {
        await failedProcess();
      }
    } catch (error) {
      await failedProcess();
    }
  };

  const formPart = (
    <div className="flex w-screen flex-col lg:w-full">
      <div className="flex flex-col items-center">
        <h1 className="text-42px font-bold">Get In Touch</h1>
        <h2 className="mt-3 text-base">
          Please fill the form below, we will reply you as soon as posible.
        </h2>
      </div>

      {/* Info: (20230616 - Julian) input part */}
      <form onSubmit={submitHandler} className="flex w-full flex-col items-center space-y-5 py-10">
        <div className="flex w-full flex-col items-start">
          <p className="text-sm">Name</p>
          <input
            className="mt-2 h-50px w-full bg-lightGray px-4 py-2 text-sm text-lightGray2"
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName || ''}
          />
        </div>
        <div className="flex w-full flex-col items-start">
          <p className="text-sm">Phone Number</p>
          <input
            className="mt-2 h-50px w-full bg-lightGray px-4 py-2 text-sm text-lightGray2"
            id="phone"
            type="text"
            onChange={phoneChangeHandler}
            value={inputPhone || ''}
          />
        </div>
        <div className="flex w-full flex-col items-start">
          <p className="text-sm">*E-mail</p>
          <input
            className="mt-2 h-50px w-full bg-lightGray px-4 py-2 text-sm text-lightGray2"
            id="email"
            type="text"
            required
            onChange={emailChangeHandler}
            value={inputEmail || ''}
          />
        </div>
        <div className="flex w-full flex-col items-start">
          <p className="text-sm">Message</p>
          <textarea
            className="mt-2 w-full bg-lightGray px-4 py-2 text-sm text-lightGray2"
            id="email"
            rows={7}
            wrap="soft"
            placeholder="What do you want to say..."
            required
            onChange={messageChangeHandler}
            value={inputMessage || ''}
          />
        </div>

        <button id="submit" type="submit" className="group flex items-center p-5">
          <div className="flex items-center space-x-1">
            <span className="h-10px w-10px rounded-full bg-darkOrange transition-all duration-300 ease-in group-hover:mx-1"></span>
            <span className="h-10px w-10px rounded-full bg-brandOrange transition-all duration-300 ease-in group-hover:mx-1"></span>
            <span className="h-10px w-10px rounded-full bg-lightYellow transition-all duration-300 ease-in group-hover:mx-1"></span>
          </div>
          <span className="ml-3 text-xl font-bold text-darkBlue transition-all duration-300 ease-in group-hover:text-brandOrange">
            Send
          </span>
        </button>
      </form>
    </div>
  );

  // ToDo:(20230616 - Julian) fade in animation
  const animPart = showAnim ? (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-white">
      {animation === AnimationType.SENDING ? (
        <div className="h-200px w-200px" ref={sendAnimContainer}></div>
      ) : animation === AnimationType.SUCCESS ? (
        <div className="h-200px w-200px" ref={successAnimContainer}></div>
      ) : (
        <div className="h-100px w-100px" ref={errorAnimContainer}></div>
      )}
      <p className="text-lg text-darkBlue">
        {animation === AnimationType.SUCCESS
          ? 'Sent!'
          : animation === AnimationType.ERROR
          ? 'Something went wrong ! Please try again.'
          : ''}
      </p>
    </div>
  ) : null;

  return (
    <div
      id="contact_us"
      className="relative flex h-auto w-full items-center justify-center bg-gradient-to-b from-white to-lightGray px-28 py-24"
    >
      <Image
        src={'/elements/devider.svg'}
        width={0}
        height={0}
        style={{width: '100%', height: 'auto', position: 'absolute', top: '-100px'}}
        alt=""
      />
      <div className="relative flex h-full w-screen items-center justify-center py-20 lg:w-full lg:justify-end">
        <div className="absolute left-12 hidden w-full lg:block">
          <Image
            src="/elements/contact_us.svg"
            width={0}
            height={0}
            alt=""
            style={{
              width: '700px',
              height: 'auto',
              transform: 'perspective(1000px) rotateY(20deg)',
            }}
          />
        </div>
        <div className="relative z-20 flex h-auto w-9/10 items-center rounded-3xl bg-white p-10 text-darkBlue shadow-2xl lg:w-580px">
          {formPart}
          {animPart}
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
