module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "app.js",
    publicPath: "/dist"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  }
}
