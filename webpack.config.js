const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./public",
          to: "./build",
          filter: (path) => !path.includes("index.html"),
        },
      ],
    }),
    new MiniCssExtractPlugin.default(),
  ],
  module: {
    rules: [
      // typescript
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: "ts-loader",
      },

      // css/scss
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.default.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
        exclude: /\.module\.css$/,
      },
      // css/scss modules
      {
        test: /\.module\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.default.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[local]-[hash:base64:12]",
              },
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
