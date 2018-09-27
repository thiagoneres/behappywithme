const webpack = require('webpack'); //importando dependências
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin	= require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = { //aqui serão feitas todas as configs do arquivo

    entry: path.join(__dirname, 'src/index.jsx'), //informa o arquivo principal da aplicação

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //nome do arquivo que será criado em /dist
            template: path.join(__dirname, 'src/index.html') //arquivo que será copiado para a pasta /dist com o nome indicado acima
        }),

        new	ExtractTextPlugin('style.css'), //style.css é o nome do arquivo que será gerado na pasta /dist
        new	UglifyJSPlugin() //minifica os arquivos js e css
    ],

    module: {
        rules: [

            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                include: path.join(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            },

            

            {
                test: /\.(jpe?g|ico|png|gif|svg)$/i,
                loader: 'file-loader?name=img/[name].[ext]'
            },

            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }

        ]
    },



    devServer: {
        publicPath: "/",
        contentBase: "./dist"
    }

};