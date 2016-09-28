const tomorrow_night = require('./lib/base16-tomorrow-night');

exports.decorateConfig = (config) => {
  return Object.assign({}, config, tomorrow_night(config));
};

