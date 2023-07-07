/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  env: {
    REACT_APP_ISUNCLOUD_PHONE: process.env.REACT_APP_ISUNCLOUD_PHONE,
    REACT_APP_ISUNCLOUD_EMAIL: process.env.REACT_APP_ISUNCLOUD_EMAIL,
    REACT_APP_ISUNCLOUD_COPYRIGHT: process.env.REACT_APP_ISUNCLOUD_COPYRIGHT,
  },
};

module.exports = nextConfig;
