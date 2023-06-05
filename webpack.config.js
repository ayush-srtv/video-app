// ./webpack.config.js

const { join, resolve } = require("path");
const { DefinePlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const webpackConfig = {
    entry: {
      /* [string | object | array] */
      client: "./client/client.js"
      // webpack will take the files from ./src/index.
    },
    // defaults to ./src
    // Here the application starts executing and webpack starts bundling...

    output: {
      path: join(__dirname, "/public"),
      filename: "client.js"
    },
    // and outputs into /dist as client.js.

    devServer: {
      compress: true,
      port: 3000,
      proxy: {
        "/api": "http://localhost:3001"
      }
    },

    // adding .ts and .tsx to resolve.extensions will help babel look for .ts(x) files to transpile.
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".scss", ".svg"]
    },

    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          use: {
            loader: "babel-loader"
          },
          include: [resolve(__dirname, "client")],
          exclude: [resolve(__dirname, "node_modules")]
        }
        // we use babel-loader to load our jsx and tsx files.
      ]
    },

    node: {
      fs: "empty"
    },

    stats: {
      children: false
    },

    plugins: [
      new DefinePlugin({}),
      new HtmlWebpackPlugin({
        title: "LUNCHI • I'm starvinggg!!!",
        template: join(__dirname, "/client/template/template.html")
      })
    ]
  };
  return webpackConfig;
};
