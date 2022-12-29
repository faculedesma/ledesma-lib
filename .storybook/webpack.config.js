const path = require(`path`);

module.exports = ({ config }) => {
  const fileLoaderRule = config.module.rules.find((rule) =>
    rule.test.test('.svg')
  );
  fileLoaderRule.exclude = /\.svg$/;

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader']
  });

  return config;
};
