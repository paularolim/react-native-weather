// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ['module:react-native-dotenv', {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: true,
      }],
      ['module-resolver', {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.svg', '.png'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services',
          '@states': './src/states',
          '@styles': './src/styles',
        },
      }],
      'react-native-reanimated/plugin',
    ],
  };
};
