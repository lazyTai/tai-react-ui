var baseConfig = require('./webpack.base.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')
var path = require('path')
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
        extensions: ['.js','.jsx', '.json', '.css'],
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
                use: [
                    { loader: 'style-loader'  },
                    { loader: 'css-loader',
                    query:{
                        modules:true,
                        localIdentName:"[name]-[local]-[hash:base64:5]"
                    }  
                },
                ],
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
            filename: 'stylesheet/[name].css',
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