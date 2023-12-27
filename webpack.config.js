const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '/usr/share/nginx/html'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js', // Naming for non-entry chunks
    clean: true, // Clean the output directory before emit
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // Split all types of chunks
      maxSize: 244000, // Max size for chunk splitting
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // Get the package name and clean it
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
    runtimeChunk: 'single', // Split the runtime code into a separate chunk
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};

