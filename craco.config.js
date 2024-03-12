const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.alias = {
        ...(webpackConfig.resolve.alias || {}),
        // Define an alias for the directory or file
        "react-refresh-runtime": path.resolve(
          __dirname,
          "node_modules/react-refresh/runtime.js"
        ),
      };
      return webpackConfig;
    },
  },
};