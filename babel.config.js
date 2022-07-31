module.exports = function (api) {
  console.log('babel env - ' + api.env());
  console.log('babel env not development - ' + !api.env('development'));
  let plugins = [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        stripExtensions: ['.js', '.jsx', '.es', '.es6', '.mjs'],
        alias: {
          '~': './src',
          '#': './native-base-theme',
        },
      },
    ],
  ];

  if (!api.env('development')) {
    plugins.push('transform-remove-console');
  }
  console.log({plugins});
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: plugins,
  };
};
