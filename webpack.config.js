const path = require('path');

module.exports = {
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    }
}