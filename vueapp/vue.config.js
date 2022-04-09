const {defineConfig} = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        devMiddleware: {
            writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
        }
    },
    publicPath: '/static/src/vue/dist/', // Should be STATIC_URL + path/to/build
    outputDir: path.resolve(__dirname, '../static/src/vue/dist/'), // Output to a directory in STATICFILES_DIRS

})
