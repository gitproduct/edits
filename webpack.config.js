const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        contentBase: './build',
        watchContentBase: true,
        hot: true
    },
    devtool: 'inline-source-map',
};