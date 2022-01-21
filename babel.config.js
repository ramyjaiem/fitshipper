module.exports = {
  presets: [
    // [
    //   "@babel/preset-env",
    //   {
    //     targets: {
    //       node: "current",
    //     },
    //   },
    // ],
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
    "es2015",
    "react",
  ],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"],
    },
  },
};
