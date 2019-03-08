var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test:[/js$|.jsx$/],
        exclude: /(node_modules|bower_components)/,
        use: { 
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        },
        
      },
      {
        test: /\.s?css$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "./index.html"
    })
],
  devServer: {
    contentBase: path.join(__dirname,'build'),
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    // publicPath: '/build',
  },
  output: {
    path: path.join(__dirname,'build'),
    filename: 'webpack-bundle.js',
  },
  
};