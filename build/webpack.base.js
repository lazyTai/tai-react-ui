var Webpack = require('webpack')
var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        demo: path.resolve("./src/demo/index.js"),
    },
    resolve: { alias: {} },
    output: {
        path: path.resolve('./dist/'),
        filename: '[name]/[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'],
        alias: {
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: [path.resolve('./src')]
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        // { loader: "css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]", },
                        { loader: "css-loader", },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('precss')
                                ]
                            }
                        }
                    ]
                }),
            },

            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         // name: utils.assetsPath('img/[name].[hash:7].[ext]')
            //     }
            // },
            // {
            //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            //     loader: 'url-loader',
            //     query: {
            //         limit: 10000,
            //         // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
            //     }
            // }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'stylesheet/[name].css',
            allChunks: true,
        })
    ],
}