var path = require('path');
var APP_DIR = path.resolve(__dirname, './app');

module.exports = {
    entry: {
        javascript: APP_DIR + "/app.jsx"
    },

    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    resolve: {
        extensions: ["", ".json",  ".js", ".jsx"]
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.jsx$/,
                include : APP_DIR,
                loaders: ["babel-loader"]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    devtool: "#inline-source-map"
}
