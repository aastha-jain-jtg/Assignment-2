const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: './',
        assetModuleFilename: 'images/[name][ext][query]'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'webpack Boilerplate',
          template: path.resolve(__dirname, './src/home.html'),
          filename: 'index.html',
        }),
         new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 8 * 1024,
              }
            },
            generator: {
                filename: 'fonts/[name][ext][query]',
              }
          },
          {
              test: /\.(scss|css)$/,
              use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
          },
        ],
    },
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, './dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },
    resolve: {
        alias: {
          fonts: path.resolve(__dirname, './src/fonts/'),
          styles: path.resolve(__dirname, './src/styles/main.scss'),
          images: path.resolve(__dirname, './src/images'),
          node_modules: path.resolve(__dirname, 'node_modules'),
        },
    },
}
