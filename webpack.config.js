const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "output.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        use: { loader: "babel-loader" },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    contentBase: "./public",
    compress: true,
  },
};
