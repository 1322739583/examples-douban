const path = require("path");
const CracoLessPlugin = require("craco-less");
const resolve = (dir) => path.resolve(__dirname, dir);
module.exports = {
  webpack: {
    alias: {
      // "@": resolve("src"),
      // components: resolve("src/components"),
      // utils: resolve("src/utils"),
    },
  },
  //配置craco提供的plugin
  plugins: [
    {
      // 修改antd主题
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            math: "always",
            modifyVars: {
              "@primary-color": "#1890ff", //主题颜色
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
