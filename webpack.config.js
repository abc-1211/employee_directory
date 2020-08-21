const path = require('path');


module.exports = {
    mode: "development",
    devtool: "none",
    devServer: {
        contentBase: path.resolve(__dirname, "./src"),
        historyApiFallback: true
    },
    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "dist")
    }
};