import {IDownloadContent} from '../interfaces/download_content';

export const downloadContent: IDownloadContent[] = [
  {
    os: 'Windows',
    downloadUrl: '/windows',
  },
  {
    os: 'Mac OS',
    downloadUrl: '/mac',
  },
  {
    os: 'Linux',
    downloadUrl: '/linux',
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
