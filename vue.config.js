

const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 部署应用包时的基本 URL
    publicPath: process.env.NODE_ENV === 'production'
        ? '/production-sub-path/'
        : '/',
    outputDir: 'dist', // 生成的生产环境构建文件的目录
    assetsDir: 'static', // 放置生成的静态资源的目录
    lintOnSave: false,
    runtimeCompiler: true,// 是否使用包含运行时编译器的 Vue 构建版本
    productionSourceMap:false,
    devServer: {
        port: '8080',
        open: false,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            // ...Proxy_Config,
            [process.env.VUE_APP_BASE_API]: {
                target: `http://trd-op-api.release.yijiupidev.com/`,
                // target: `http://trd-op-api.release.yijiupidev.com/`,
                //target: `http://trd-op-api.pre.yijiupi.com/`,
                //target: `http://trd-op-api.yijiupi.com/`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            },
        },
        //  after: require('./mock/mock-server.j')
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: '易久批',
        // resolve: {
        //     alias: {
        //         '@': resolve('src'),
        //         'api': resolve('src/api'),
        //     }
        // }
    },

}
