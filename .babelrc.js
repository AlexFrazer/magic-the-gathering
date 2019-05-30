module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    // TODO: This won't work until the following is merged:
    // https://github.com/emotion-js/emotion/pull/1220
    ['emotion', {
      labelFormat: '[dirname]-[filename]-[local]',
      instances: ['emotion', '~util/styled'],
    }],
    'lodash',
    'react-hot-loader/babel',
  ],
};
