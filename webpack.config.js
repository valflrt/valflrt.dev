const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let loadCss = (loaders) => [
  MiniCssExtractPlugin.loader,
  {
    loader: "css-loader",
    options: {
      importLoaders: loaders ?? 0,
    },
  },
];

let loadCssWithModules = (loaders) => [
  MiniCssExtractPlugin.loader,
  {
    loader: "css-loader",
    options: {
      importLoaders: loaders ?? 0,
      modules: {
        localIdentName: "[local]-[hash:base64:6]",
      },
    },
  },
];

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
          to: ".",
          filter: (path) => !path.includes("index.html"),
        },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      // javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },

      // typescript
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },

      // json
      { test: /\.json$/, use: "json-loader" },

      // css
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: loadCss(),
      },

      // css modules
      {
        test: /\.module\.css$/,
        use: loadCssWithModules(),
      },

      // scss
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module\.s(a|c)ss$/,
        use: [...loadCss(2), "postcss-loader", "sass-loader"],
      },

      // scss modules
      {
        test: /\.module\.s(a|c)ss$/,
        use: [...loadCssWithModules(2), "postcss-loader", "sass-loader"],
      },

      // files
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devServer: {
    allowedHosts: [".gitpod.io"],
  },
};
