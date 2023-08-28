import {IDownloadContent} from '../interfaces/download_content';

// Info: (20230828 - Julian) ----------Home Page----------
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

// Info: (20230828 - Julian) ----------Our History Page----------
export const milestoneContent = [
  {
    title: 'OUR_HISTORY.MILESTONE_1_TITLE',
    description: 'OUR_HISTORY.MILESTONE_1_DESCRIPTION',
    timeRange: 'OUR_HISTORY.MILESTONE_1_RANGE',
    imageSrc: '/elements/focus_media.png',
    imageAlt: "a smartphone displaying 'Focus Media'",
    imageWidth: 200,
    imageHeight: 400,
  },
  {
    title: 'OUR_HISTORY.MILESTONE_2_TITLE',
    description: 'OUR_HISTORY.MILESTONE_2_DESCRIPTION',
    timeRange: 'OUR_HISTORY.MILESTONE_2_RANGE',
    imageSrc: '/elements/location_in_hk.png',
    imageAlt: 'a location pin in Hong Kong',
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    title: 'OUR_HISTORY.MILESTONE_3_TITLE',
    description: 'OUR_HISTORY.MILESTONE_3_DESCRIPTION',
    timeRange: 'OUR_HISTORY.MILESTONE_3_RANGE',
    imageSrc: '/elements/cloud_1.png',
    imageAlt: 'a hand holding a smartphone that displays cloud storage',
    imageWidth: 181,
    imageHeight: 200,
  },
  {
    title: 'OUR_HISTORY.MILESTONE_4_TITLE',
    description: 'OUR_HISTORY.MILESTONE_4_DESCRIPTION',
    timeRange: 'OUR_HISTORY.MILESTONE_4_RANGE',
    imageSrc: '/elements/location_in_tw.png',
    imageAlt: 'a location pin in Taiwan',
    imageWidth: 200,
    imageHeight: 200,
  },
  {
    title: 'OUR_HISTORY.MILESTONE_5_TITLE',
    description: 'OUR_HISTORY.MILESTONE_5_DESCRIPTION',
    timeRange: 'OUR_HISTORY.MILESTONE_5_RANGE',
    imageSrc: '/elements/stream_1.png',
    imageAlt: 'a picture of a video player playing pop music',
    imageWidth: 560,
    imageHeight: 360,
  },
  {
    title: 'OUR_HISTORY.MILESTONE_6_TITLE',
    description: 'OUR_HISTORY.MILESTONE_6_DESCRIPTION',
    timeRange: 'OUR_HISTORY.MILESTONE_6_RANGE',
    imageSrc: '/elements/accounting_auditing_1.png',
    imageAlt: 'a laptop displaying financial statements',
    imageWidth: 578,
    imageHeight: 385,
  },
  {
    title: 'OUR_HISTORY.MILESTONE_7_TITLE',
    description: 'OUR_HISTORY.MILESTONE_7_DESCRIPTION',
    timeRange: 'OUR_HISTORY.MILESTONE_7_RANGE',
    imageSrc: '/elements/visa.png',
    imageAlt: 'a hand holding a credit card',
    imageWidth: 450,
    imageHeight: 380,
  },
  {
    title: 'OUR_HISTORY.MILESTONE_8_TITLE',
    description: 'OUR_HISTORY.MILESTONE_8_DESCRIPTION',
    timeRange: 'OUR_HISTORY.MILESTONE_8_RANGE',
    imageSrc: '/elements/stream_2.png',
    imageAlt: "a PC displaying 'zero-knowledge proof'",
    imageWidth: 560,
    imageHeight: 350,
  },
  {
    title: 'OUR_HISTORY.MILESTONE_9_TITLE',
    description: 'OUR_HISTORY.MILESTONE_9_DESCRIPTION',
    timeRange: 'OUR_HISTORY.MILESTONE_9_RANGE',
    imageSrc: '/elements/AI_1.png',
    imageAlt: 'a robot touching a tablet PC',
    imageWidth: 280,
    imageHeight: 280,
  },
];

// Info: (20230828 - Julian) ----------Footer----------
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
