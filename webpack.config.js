const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const FILENAME = 'charts';

module.exports = {
    entry: './src/Charts.jsx',
    output: {
        filename: FILENAME + '.js',
        path: path.resolve(__dirname, 'demo/externals'),
        libraryTarget: "umd"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {loader: "css-loader", options: {minimize: true}}
                })
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [ '.jsx', '.js' ]
    },
    plugins: [
        new ExtractTextPlugin(FILENAME + '.css'),
        new webpack.optimize.UglifyJsPlugin()
    ],
    externals: {
        'react': 'React',
        'react-dom' : 'ReactDOM',
        'd3': 'd3'
    }
};

