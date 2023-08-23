import {IDownloadContent} from '../interfaces/download_content';

export const whatWeDoContent = [
  {
    title: 'HOME_PAGE.WHAT_WE_DO_BLOCKCHAIN_TITLE',
    description: 'HOME_PAGE.WHAT_WE_DO_BLOCKCHAIN_DESCRIPTION',
    bg: 'bg-blockchain',
  },
  {
    title: 'HOME_PAGE.WHAT_WE_DO_AI_TITLE',
    description: 'HOME_PAGE.WHAT_WE_DO_AI_DESCRIPTION',
    bg: 'bg-ai',
  },
  {
    title: 'HOME_PAGE.WHAT_WE_DO_FINTECH_TITLE',
    description: 'HOME_PAGE.WHAT_WE_DO_FINTECH_DESCRIPTION',
    bg: 'bg-fintech',
  },
];

export const advantageContents = [
  {
    title: 'HOME_PAGE.WHY_US_CLIENT_TITLE',
    description: '250+',
    image: '/elements/smile.svg',
  },
  {
    title: 'HOME_PAGE.WHY_US_PROJECT_TITLE',
    description: '14+',
    image: '/elements/files.svg',
  },
  {
    title: 'HOME_PAGE.WHY_US_PATENT_TITLE',
    description: '6+',
    image: '/elements/badge.svg',
  },
  {
    title: 'HOME_PAGE.WHY_US_EXPERIENCE_TITLE',
    description: '7+',
    image: '/elements/target.svg',
  },
];

//------------- 以上刪除 -------------

export const downloadContent: IDownloadContent[] = [
  {
    os: 'windows',
    title: 'HOME_PAGE.WINDOWS',
    downloadUrl: '/',
  },
  {
    os: 'mac',
    title: 'HOME_PAGE.MAC_OS',
    downloadUrl: '/',
  },
  {
    os: 'linux',
    title: 'HOME_PAGE.LINUX',
    downloadUrl: '/',
  },
];

export const partnerContent = [
  {
    name: 'TideBit',
    image: '/logo/tidebit.svg',
    imageHover: '/logo/tidebit_active.svg',
    link: 'https://tidebit-defi.com',
  },
  {
    name: 'CAFECA',
    image: '/logo/cafeca.svg',
    imageHover: '/logo/cafeca_active.svg',
    link: 'https://www.cafeca.io',
  },
  {
    name: 'BOLT',
    image: '/logo/bolt.svg',
    imageHover: '/logo/bolt_active.svg',
    link: 'https://bolt.cafeca.io',
  },
  {
    name: 'BAIFAAA',
    image: '/logo/baifaaa.svg',
    imageHover: '/logo/baifaaa_active.svg',
    link: 'https://baifa.io',
  },
  {
    name: 'MerMer',
    image: '/logo/mermer.svg',
    imageHover: '/logo/mermer_active.svg',
    link: 'https://www.mermer.cc',
  },
];

export const iSunCloudCopyRight = process.env.REACT_APP_ISUNCLOUD_COPYRIGHT;

export const iSunCloudTaiwan = {
  phone: process.env.REACT_APP_ISUNCLOUD_TAIWAN_PHONE,
  address: process.env.REACT_APP_ISUNCLOUD_TAIWAN_ADDRESS,
  inMap: process.env.REACT_APP_ISUNCLOUD_TAIWAN_ADDRESS_IN_MAP,
};

export const iSunCloudHongKong = {
  phone: process.env.REACT_APP_ISUNCLOUD_HONGKONG_PHONE,
  address: process.env.REACT_APP_ISUNCLOUD_HONGKONG_ADDRESS,
  inMap: process.env.REACT_APP_ISUNCLOUD_HONGKONG_ADDRESS_IN_MAP,
};

export const iSunCloudUSA = {
  phone: process.env.REACT_APP_ISUNCLOUD_USA_PHONE,
  address: process.env.REACT_APP_ISUNCLOUD_USA_ADDRESS,
};
