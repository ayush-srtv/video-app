// ./babel.config.js

module.exports = function babelConfig(api) {
  api.cache(true);
  const presets = [
    ["@babel/preset-react"],
    ["@babel/preset-typescript"],
    ["@babel/preset-env", { useBuiltIns: "usage", corejs: 3 }]
  ];
  const plugins = [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
    "@babel/plugin-proposal-numeric-separator"
  ];
  return {
    presets,
    plugins
  };
};
