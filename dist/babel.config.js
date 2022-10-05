"use strict";

module.exports = {
  presets: [["@babel/preset-env", {
    targets: {
      ie: "11"
    },
    useBuiltIns: "usage",
    corejs: {
      version: 3
    }
  }]]
};
//# sourceMappingURL=babel.config.js.map