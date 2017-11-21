const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const FILENAME = 'cxncharts';

module.exports = {
    entry: './src/charts.tsx',
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
                    fallback: 'style-loader',
                    use: {loader: 'css-loader', options: {minimize: true}}
                })
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    'awesome-typescript-loader'
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
        extensions: [ '.tsx', '.ts', '.js' ]
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

