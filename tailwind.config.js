/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: '#1A2E50',

        lightGray: '#FAFAFA',
        lightGray2: '#8B8F92',

        lightWhite: '#FFFEFB',

        brandOrange: '#FFA502',
        darkOrange: '#FF5403',

        lightYellow: '#FCF300',
      },
      backgroundImage: {
        fintech: "url('/elements/KV.svg')",
      },
      backgroundPosition: {
        top1: 'center top -6rem',
      },
      fontSize: {
        '3xs': ['8px', '12px'],
        xxs: ['10px', '12px'],
        xs: ['12px', '16px'],
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['18px', '28px'],
        xl: ['20px', '28px'],
        '2xl': ['24px', '32px'],
        '3xl': ['30px', '36px'],
        '4xl': ['36px', '40px'],
        '42px': ['42px', '48px'],
        '5xl': ['48px', 1],
        '54px': ['54px', 1],
        '6xl': ['60px', 1],
        '7xl': ['72px', 1],
        '8xl': ['96px', 1],
        '9xl': ['128px', 1],
      },

      screens: {
        xxs: '370px',
        xs: '500px',
        sm: '640px',
        // => @media (min-width: 640px) { ... }
        md: '768px',
        // => @media (min-width: 768px) { ... }
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1600px',
      },
      spacing: {
        // width / height / padding / margin / top / bottom / right / left
        '1px': '1px',
        '2px': '2px',
        '3px': '3px',
        '5px': '5px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
        '21px': '21px',
        '22px': '22px',
        '23px': '23px',
        '24px': '24px',
        '25px': '25px',
        '26px': '26px',
        '27px': '27px',
        '28px': '28px',
        '30px': '30px',
        '32px': '32px',
        '33px': '33px',
        '34px': '34px',
        '35px': '35px',
        '36px': '36px',
        '37px': '37px',
        '38px': '38px',
        '39px': '39px',
        '40px': '40px',
        '42px': '42px',
        '44px': '44px',
        '45px': '45px',
        '46px': '46px',
        '47px': '47px',
        '48px': '48px',
        '50px': '50px',
        '52px': '52px',
        '53px': '53px',
        '54px': '54px',
        '55px': '55px',
        '56px': '56px',
        '57px': '57px',
        '58px': '58px',
        '59px': '59px',
        '60px': '60px',
        '61px': '61px',
        '62px': '62px',
        '63px': '63px',
        '64px': '64px',
        '65px': '65px',
        '69px': '69px',
        '70px': '70px',
        '71px': '71px',
        '72px': '72px',
        '73px': '73px',
        '74px': '74px',
        '75px': '75px',
        '76px': '76px',
        '77px': '77px',
        '80px': '80px',
        '81px': '81px',
        '82px': '82px',
        '83px': '83px',
        '85px': '85px',
        '88px': '88px',
        '90px': '90px',
        '95px': '95px',
        '98px': '98px',
        '100px': '100px',
        '105px': '105px',
        '110px': '110px',
        '120px': '120px',
        '122px': '122px',
        '125px': '125px',
        '130px': '130px',
        '134px': '134px',
        '140px': '140px',
        '150px': '150px',
        '158px': '158px',
        '160px': '160px',
        '180px': '180px',
        '190px': '190px',
        '200px': '200px',
        '220px': '220px',
        '240px': '240px',
        '250px': '250px',
        '254px': '254px',
        '255px': '255px',
        '271px': '271px',
        '278px': '278px',
        '280px': '280px',
        '285px': '285px',
        '290px': '290px',
        '296px': '296px',
        '300px': '300px',
        '310px': '310px',
        '320px': '320px',
        '330px': '330px',
        '340px': '340px',
        '350px': '350px',
        '354px': '354px',
        '360px': '360px',
        '370px': '370px',
        '372px': '372px',
        '400px': '400px',
        '410px': '410px',
        '420px': '420px',
        '430px': '430px',
        '438px': '438px',
        '440px': '440px',
        '450px': '450px',
        '475px': '475px',
        '479px': '479px',
        '480px': '480px',
        '500px': '500px',
        '505px': '505px',
        '510px': '510px',
        '520px': '520px',
        '530px': '530px',
        '540px': '540px',
        '549px': '549px',
        '550px': '550px',
        '555px': '555px',
        '560px': '560px',
        '565px': '565px',
        '570px': '570px',
        '580px': '580px',
        '590px': '590px',
        '600px': '600px',
        '620px': '620px',
        '630px': '630px',
        '640px': '640px',
        '650px': '650px',
        '660px': '660px',
        '700px': '700px',
        '720px': '720px',
        '726px': '726px',
        '810px': '810px',
        '1000px': '1000px',
        '1200px': '1200px',
        '1500px': '1500px',
        '2000px': '2000px',
        '2rem': '2rem',
        '3rem': '3rem',
        '4rem': '4rem',
        '5rem': '5rem',
        '6rem': '6rem',
        '7rem': '7rem',
        '8rem': '8rem',
        '9rem': '9rem',
        '11rem': '11rem',
        '13rem': '13rem',
        '15rem': '15rem',
        '20rem': '20rem',

        0.5: '50%',
        '1/2': '50%',
        '1/4': '25%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/8': '12.5%',
        '3/8': '37.5%',
        '5/8': '62.5%',
        '7/8': '87.5%',
        '1/10': '10%',
        '2/10': '20%',
        '3/10': '30%',
        '4/10': '40%',
        '5/10': '50%',
        '6/10': '60%',
        '7/10': '70%',
        '8/10': '80%',
        '9/10': '90%',
        '10/10': '100%',
        '1/11': '9.09090909090909%',
        '2/11': '18.181818181818183%',
        '10/11': '90.909%',
        '1/3': '33.333333%',
        '3/5': '60%',

        '80vh': '80vh',
        '95vh': '95vh',

        '70vw': '70vw',
        '80vw': '80vw',
        '85vw': '85vw',
        '90vw': '90vw',
      },
      margin: {
        '8px': '8px',
        '10px': '10px',
        '55px': '55px',
        '83px': '83px',
        '88px': '88px',
        '130px': '130px',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/5': '20%',
        '1/6': '16.666667%',
        '1/8': '12.5%',
        '1/10': '10%',
        '1/12': '8.333333%',
        '1/20': '5%',
        '1/25': '4%',
        '1/50': '2%',
      },
      padding: {
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/5': '20%',
        '1/6': '16.666667%',
        '1/8': '12.5%',
        '1/10': '10%',
        '1/12': '8.333333%',
        '1/20': '5%',
        '1/25': '4%',
        '1/50': '2%',
        '50px': '50px',
      },
      borderWidth: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
      },
    },
  },
  plugins: [],
};
