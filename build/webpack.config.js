/*
* @Author: mengyue
* @Date:   2018-11-15 11:03:48
* @Last Modified by:   mengyue
* @Last Modified time: 2018-11-16 14:29:17
*/
const path = require('path');
// const entry = require('./entry.js');
const env = process.env.NODE_ENV;
const webpack = require('webpack');
// const alias = require('./alias.js');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: path.resolve(__dirname,'../src/index.ts'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name]_[hash].js'
    },
    module: {
        // rules: [
        //     {test: /\.vue$/, use: 'vue-loader'}
        // ] 或
        rules:[
            {
                test: /\.js|vue$/,
                use:'vue-loader',
                enforce: 'pre',
                include: path.resolve(__dirname,'../src'),
                // options: {
                //     formatter: require('eslint-friendly-formatter')
                // }
            },
            {
                test: /\.ts$/,
                use: [
                    {loader: 'babel-loader'},
                    {
                        loader: 'ts-loader',  // 检索tsconfig.json文件
                        options: {appendTsSuffixTo: [/\.vue$/]},
                    },
                ],
                include: path.resolve(__dirname,'../src'),
            },
            {
                test: /\.less$/,
                use: ['vue-style-loader','postcss-loader','css-loader',{
                    loader: 'less-loader',
                    // options: {
                    //     data: require.resolve('./src/style/basic.less'),
                    // }
                }],
                include: path.resolve(__dirname,'../src/style'),
            }
        ]
    },
    resolve:{
        extensions:['.vue', '.js', '.ts', '.less', 'json'],
        // modules: ['node_modules'], // 解析模块应该搜索的目录
        alias:{
            '@': path.resolve(__dirname,'../src'),
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            identifier: ['vue', 'vue-class-component','Vue-Property-Decorator']
        })
    ]

}