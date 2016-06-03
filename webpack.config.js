var HtmlWebpackPlugin=require('html-webpack-plugin')
var ExtractTextPlugin=require('extract-text-webpack-plugin')

module.exports = {
  // entry point of our application
  entry: './src/main.js',
  // where to place the compiled bundle
  output: {
    path: __dirname+'/dist/',
    publicPath:'/',
    filename: 'build.js'
  },
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue',   // loader to use for matched files
        exclude: /node_modules/
      },
      {
        test:/\.css$/,
        //loader: "style-loader!css-loader"
        loader:ExtractTextPlugin.extract('style-loader','css-loader')
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          // limit for base64 inlining in bytes
          limit: 10000,
          // custom naming format if file is larger than
          // the threshold
          name: './image/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'my app',
      filename:'index.html',
      template:'./src/index.html',
      inject:'body'

    }),
    new ExtractTextPlugin('css/style.css')
  ]
}