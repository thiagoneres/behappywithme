const webpack = require('webpack'); //importando dependências
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        })
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
            }
        ]
    },

    devServer: {
        publicPath: "/",
        contentBase: "./dist"
    }

};