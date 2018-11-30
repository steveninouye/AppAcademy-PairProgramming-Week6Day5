const path = require ("path");
module.exports = {
  entry: "./src/app.jsx",
  output: {
    path:  path.resolve(__dirname, "dist"),
  filename: "main.js"},
  module: {
    rules: [
      {test: [/\.jsx?$/, /\.js?$/],
      exclude: /(node_modules)/,
      use:{
        loader: "babel-loader",
        query: {presets: ["@babel/env", "@babel/react"]}}
      }

    ]
  }, devtool:"source-map",
  resolve:{extensions:[".js", ".jsx", "*"]}
};
