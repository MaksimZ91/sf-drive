const path = require ("path");
const HtmlWebpackPlugin = require ("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

 module.exports = {
   entry:"./index.js",
   output:{
     path: path.resolve(__dirname, 'dist'),
     filename: "main.js"
   },
   module: {
      rules:[
        {
          test: /\.js$/,
          exclude: /node_modules/, 
          use : {
              loader: "babel-loader"
          } 
        },
        {
          test: /\.scss$/i,
          use: [ {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
              esModule: true,
            },
          }, 'css-loader', "sass-loader",],
        },
        {
          test: /\.(png|jpe?g|gif|ttf|svg)$/i,
          loader: 'file-loader'       
        },
        {
          test: /\.m?js$/i,
          use: ['smart-source-map-loader'],
          enforce: 'pre'
        }
      ]
    },   
    plugins: [
      new MiniCssExtractPlugin(),
      new TerserPlugin(),
      new OptimizeCssAssetsWebpackPlugin(),
      new HtmlWebpackPlugin ({
          template: "./index.html"
      })
    ],
    optimization: {
      minimize:true,
      minimizer: [new TerserPlugin(), new OptimizeCssAssetsWebpackPlugin()],
    }
  }