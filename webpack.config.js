const prod = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: prod ? "production" : "development",
  entry: "./src/index.tsx",
  output: {
    path: `${__dirname}/dist/`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/public/index.html`,
    }),
    new MiniCssExtractPlugin.default(),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.default.loader, "css-loader"],
      },
    ],
  },
  devtool: prod ? undefined : "source-map",
};
