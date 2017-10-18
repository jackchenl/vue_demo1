var webpack = require('webpack')
var fs = require('fs')
var path = require('path')

module.exports={
    devtool: "cheap-module-eval-source-map",
    entry:{
        vue_demo:[
            "vue",
            "vue-router",
            "./src/entry"
        ]
    },
    output:{
        filename: 'bundle.js',
        path: __dirname + '/build'
    },
    resolve:{
        extensions:['.web.js','.js','.jsx']
    },
    module:{
        rules:[
            {
                include: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader',
                options:{
                    loaders:{
                        css: 'vue-style-loader!css-loader',
                        js:'babel-loader?presets[]=es2015',
                        vue:'vue'
                    }
                }
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'babel-loader',
            //     query: {
            //         presets: ['es2015']
            //     }
            // },
            {
                test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'file-loader?name=../resources/img/[name]-[hash:6].[ext]'
            }
        ]
    },
}