const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
  entry: './src/main.js', // 入口文件
  mode: 'development', // 或者 'production'
  output: { // 输出配置
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
        }
      },
    ]
  },
  plugins: [ // 插件配置
    new HtmlWebpackPlugin({
      title: '一只优秀瑞',
      template: './public/index.html', // 模板文件
      templateParameters: {
        BASE_URL: '/src/assets/',  // 你的静态资源路径
      },
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
