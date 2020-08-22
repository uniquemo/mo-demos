const DayjsPlugin = require('antd-dayjs-webpack-plugin');

module.exports = function override(config, env) {
  config.plugins = [
    ...config.plugins,
    new DayjsPlugin({
      plugins: [
        // 'isBetween',
        'relativeTime',
        // 'isSameOrBefore',
        // 'isSameOrAfter',
        // 'advancedFormat',
        // 'customParseFormat',
        // 'weekday',
        // 'weekYear',
        // 'weekOfYear',
        // 'isMoment',
        // 'localeData',
        // 'localizedFormat',
        'badMutable',
      ],
      replaceMoment: true,
    }),
  ];
  return config;
}
