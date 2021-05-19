const { override, addWebpackResolve, addWebpackAlias } = require('customize-cra');
const path = require("path")

module.exports = override(
    // fixBabelImports('import', {
    //     libraryName: 'antd-mobile',
    //     style: 'css',
    // }),

    addWebpackResolve({
        extensions: [".js", ".json", ".jsx"]
    }),

    addWebpackAlias({
        "@assets": path.resolve(__dirname, 'src/assets'),
        "@components": path.resolve(__dirname, 'src/components'),
        "@view": path.resolve(__dirname, 'src/view'),
        "@uitls": path.resolve(__dirname, 'src/utils'),
        "@service": path.resolve(__dirname, 'src/service'),
    })
);