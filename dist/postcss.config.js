"use strict";

module.exports = {
  // PostCSS 플러그인 설정
  plugins: [['postcss-preset-env', // 플러그인 옵션 설정
  {
    browserslist: ["last 3 version", "Chrome >= 59", "ie 11", "not ie <= 10"],
    autoprefixer: {
      grid: 'autoplace'
    }
  }]]
};
//# sourceMappingURL=postcss.config.js.map