module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
      },
    ],
    [
      "@babel/plugin-transform-private-methods",
      {
        loose: true,
      },
    ],
    '@babel/plugin-transform-runtime',
    "react-native-reanimated/plugin",
  ],
};
