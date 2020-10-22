const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    mode: 'development',
    entry: "./src/index.js",
        output: {
        path: path.resolve(__dirname, 'dist'),
            filename: "bundle.js"
    },
    module: {
        rules: [
            { test:/\.css$/,use:['style-loader','css-loader']},
            { test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/view/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'order.html',
            template: './src/view/order.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}
module.exports = config