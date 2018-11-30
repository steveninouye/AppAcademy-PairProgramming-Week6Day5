const path = require ("path")
module.exports = {
  entry: "app.js",
  output: {
    path:  path.resolve(__dirname, "dist"),
  filename: "main.js"},
  module: {
    rules: [
      {test: [/\.jsx?$/, /\.js?$/],
      exclude: /(node_modules)/,
      loader: "babel",
      query: {preset: ["@babel/env", "@babel/react"]}}
    ]
  }, devtool:"source-map",
  resolve:{extensions:[".js", ".jsx", "*"]}
}
