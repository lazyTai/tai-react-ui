var baseConfig = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')
var path = require('path')
var browsers = [
    'last 3 versions',
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 6',
    'opera >= 12.1',
    'ios >= 6',
    'android >= 4.4',
    'bb >= 10',
    'and_uc 9.9',
];
module.exports = {
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM',
        "react-router": 'ReactRouter'
    },
    entry: baseConfig.entry,
    output: baseConfig.output,
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'],
        alias: {
            zarm: process.cwd(),
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
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['manifest'],
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: Object.keys(baseConfig.entry),
            async: true,
            children: true,
            minChunks: 3,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
            sourceMap: true,
            mangle: true,
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            __DEBUG__: false,
        })
    ],
};