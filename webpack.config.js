const path = require('path');

module.exports = {
    entry: './src/index.js',
    target: 'node',
    externals: /^(react)$/i,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '',
        filename: 'trevo.js',
        libraryTarget: 'commonjs'
    }
};
