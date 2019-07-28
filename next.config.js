const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

module.exports = withCss(withSass(withFonts()));
