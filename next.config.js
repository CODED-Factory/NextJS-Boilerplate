const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  webpack: (config) => {
    return config;
  },
});
