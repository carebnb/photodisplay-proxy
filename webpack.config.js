const path = require('path');

const SRC_DIR = path.join(__dirname);
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: path.join(SRC_DIR, 'client', 'src', 'index.jsx'),
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react', '@babel/env'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "styled-components": path.resolve(SRC_DIR, "node_modules", "styled-components"),
    }
  },
};
