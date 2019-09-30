const path = require("path");
module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build/")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
