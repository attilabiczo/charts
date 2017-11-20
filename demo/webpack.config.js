const path = require('path');

module.exports = {
    entry: "./src/App.jsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public",
        libraryTarget: "umd"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        // Add '.js' and '.jsx' as resolvable extensions.
        extensions: [".js", ".jsx"],
        alias: {
            'charts': path.resolve(__dirname, 'externals/charts'),
            'charts-style': path.resolve(__dirname, 'externals/charts.css')
        }
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    devServer: {
        contentBase: ['./public', './externals']
    }
};
