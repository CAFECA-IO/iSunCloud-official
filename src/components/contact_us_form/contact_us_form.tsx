import {useEffect, useState, useRef} from 'react';
import lottie from 'lottie-web';
import Image from 'next/image';
import useInputNumber from '../../lib/hooks/use_input_number';
import {TbCloudDownload} from 'react-icons/tb';
import {IAnimationType, AnimationType} from '../../constants/animation_type';
import {useTranslation} from 'next-i18next';
import {TranslateFunction} from '../../interfaces/locale';

const ContactUsForm = () => {
  const {t}: {t: TranslateFunction} = useTranslation('common');

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
    // Info: (20230617 - Julian) animations
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

  // Info: (20230620 - Julian) check if email is valid
  const emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  const emailIsValid = emailRule.test(inputEmail);

  // Info: (20230617 - Julian) input change handler
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

  // Info: (20230617 - Julian) send failed process
  const failedProcess = async () => {
    setSendSuccess(false);
    setAnimation(AnimationType.ERROR);
    setShowAnim(true);

    // Info: (20230617 - Julian) delay 3 seconds to show the animation
    await new Promise(resolve => setTimeout(resolve, 3000));
    setShowAnim(false);
    setAnimation(null);
  };

  const successProcess = async () => {
    setSendSuccess(true);
    setAnimation(AnimationType.SUCCESS);
    setShowAnim(true);

    // Info: (20230617 - Julian) delay 3 seconds to show the animation
    await new Promise(resolve => setTimeout(resolve, 3000));
    // Info: (20230617 - Julian) empty the input fields
    setInputName('');
    setInputPhone('');
    setInputEmail('');
    setInputMessage('');
    setSendSuccess(false);
    setShowAnim(false);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    if (!emailIsValid) {
      return;
    }

    // Info: (20230617 - Julian) 先顯示 SENDING 動畫
    setAnimation(AnimationType.SENDING);
    setShowAnim(true);

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
        await successProcess();
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
        <h2 className="text-4xl font-bold lg:text-5xl">{t('HOME_PAGE.CONTACT_US_TITLE')}</h2>
        <h2 className="mt-3 text-base">{t('HOME_PAGE.CONTACT_US_DESCRIPTION')}</h2>
      </div>

      {/* Info: (20230616 - Julian) input part */}
      <form onSubmit={submitHandler} className="flex w-full flex-col items-center space-y-5 py-10">
        <div className="flex w-full flex-col items-start">
          <label htmlFor="name" className="text-sm">
            {t('HOME_PAGE.CONTACT_US_NAME')}
          </label>
          <input
            className="mt-2 h-50px w-full bg-lightGray px-4 py-2 text-sm text-lightGray2"
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName || ''}
          />
        </div>
        <div className="flex w-full flex-col items-start">
          <label htmlFor="phone" className="text-sm">
            {t('HOME_PAGE.CONTACT_US_PHONE')}
          </label>
          <input
            className="mt-2 h-50px w-full bg-lightGray px-4 py-2 text-sm text-lightGray2"
            id="phone"
            type="text"
            onChange={phoneChangeHandler}
            value={inputPhone || ''}
          />
        </div>
        <div className="flex w-full flex-col items-start">
          <div className="flex items-center text-sm">
            <label htmlFor="email">*{t('HOME_PAGE.CONTACT_US_EMAIL')}</label>
            <p
              className={`ml-4 text-xs text-red-500 ${
                // Info:(20230824 - Julian) 信箱不符合格式 && 信箱有輸入內容時，才顯示紅字
                inputEmail !== '' && !emailIsValid ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {t('HOME_PAGE.CONTACT_US_EMAIL_VERIFY')}
            </p>
          </div>
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
          <label htmlFor="message" className="text-sm">
            {t('HOME_PAGE.CONTACT_US_MESSAGE')}
          </label>
          <textarea
            className="mt-2 w-full bg-lightGray px-4 py-2 text-sm text-lightGray2"
            id="message"
            rows={7}
            wrap="soft"
            placeholder={t('HOME_PAGE.CONTACT_US_MESSAGE_PLACEHOLDER')}
            required
            onChange={messageChangeHandler}
            value={inputMessage || ''}
          />
        </div>

        <button
          id="submit"
          type="submit"
          // Info: (20230620 - Julian) email 格式不正確時，submit 按鈕 disabled
          disabled={emailIsValid ? false : true}
          className="flex items-center justify-center space-x-2 rounded-full bg-lightWhite2 px-8 py-3 shadow-pill transition-shadow duration-150 ease-in hover:shadow-pill-hover disabled:text-gray-500 disabled:hover:shadow-pill"
        >
          <TbCloudDownload className="text-2xl" />
          <p className="font-bold">{t('HOME_PAGE.CONTACT_US_SEND_SUBMIT')}</p>
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
          ? t('HOME_PAGE.CONTACT_US_CONTACT_US_SEND_SUCCESS')
          : animation === AnimationType.ERROR
          ? t('HOME_PAGE.CONTACT_US_CONTACT_US_SEND_FAIL')
          : ''}
      </p>
    </div>
  ) : null;

  return (
    <div
      id="contact_us"
      className="relative flex h-auto w-full items-center justify-center bg-lightGray px-28 py-10 font-Barlow lg:py-20"
    >
      {/* Info: (20230704 - Julian) Devider */}
      <div className="absolute -top-100px h-200px w-screen bg-white">
        <Image src={'/elements/devider_neo.png'} fill alt="divider" style={{objectFit: 'cover'}} />
      </div>
      <div className="relative flex h-full w-screen flex-col items-center justify-center py-10 lg:w-full lg:flex-row lg:justify-end lg:py-0">
        {/* Info: (20230619 - Julian) Image for desktop */}
        <div className="absolute left-12 hidden w-full lg:block">
          <Image
            src="/elements/contact_us.svg"
            width={0}
            height={0}
            alt="orange chat bubble"
            style={{
              width: '700px',
              height: 'auto',
              transform: 'perspective(1000px) rotateY(20deg)',
            }}
          />
        </div>
        {/* Info: (20230619 - Julian) Image for mobile */}
        <div className="block w-full p-10 lg:hidden">
          <Image
            src="/elements/contact_us.svg"
            width={0}
            height={0}
            alt="orange chat bubble"
            style={{
              width: '100vw',
              height: 'auto',
            }}
          />
        </div>
        <div className="relative z-20 flex h-auto w-9/10 items-center rounded-3xl bg-white p-10 text-darkBlue shadow-2xl lg:w-580px lg:scale-80 2xl:scale-100">
          {formPart}
          {animPart}
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
