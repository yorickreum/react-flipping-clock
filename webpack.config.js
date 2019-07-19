const path = require('path');

module.exports = {
    entry: path.join(__dirname, "./index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader" // compiles Sass to CSS
                    }
                ]
            }
        ]
    },
    plugins: [],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    externals: {
        'react': 'commonjs react'
    }
};