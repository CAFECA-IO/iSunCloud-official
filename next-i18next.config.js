/** @type {import('next-i18next').UserConfig} */
const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'tw',
    locales: ['tw', 'en', 'cn'],
  },
  localePath: path.resolve('./src/locales'),
};
