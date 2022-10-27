const path = require('path');

module.exports = {
  target: 'web',
  mode: 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  entry: './src/iFrameSerializer.ts',
  output: {
    filename: 'iFrameBundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
