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
    devtool: 'source-map',
    externals: {
        "react": 'React',
        "react-dom": 'ReactDOM',
        // "react-router": 'ReactRouter'
    },
    entry: baseConfig.entry,
    output: baseConfig.output,
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'],
        alias: {
            // 'vue$': 'vue/dist/vue.esm.js',
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
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin({
            filename: 'demo/css/[name].css',
            allChunks: true,
        })
    ],
    devServer: {
        publicPath: baseConfig.output.publicPath,
        host: '0.0.0.0',
        port: 3000,
        compress: true,
        noInfo: true,
        inline: true,
        hot: true,
    }
};